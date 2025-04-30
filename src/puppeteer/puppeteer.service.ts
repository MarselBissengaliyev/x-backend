import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import * as fs from 'fs';
import * as puppeteer from 'puppeteer';
import { PrismaService } from 'src/prisma/prisma.service';
import { LoginDto, PostDto } from './puppeteer.dto';
import { delay, downloadImageToTempFile } from './puppeteer.utils';

@Injectable()
export class PuppeteerService {
  private readonly logger = new Logger(PuppeteerService.name);

  constructor(private prisma: PrismaService) {}

  async   login({
    login,
    password,
    proxy,
    userAgent,
  }: LoginDto): Promise<{ result: any; page: puppeteer.Page | null }> {
    const delay = (ms: number) =>
      new Promise((resolve) => setTimeout(resolve, ms));

    let browser: any;
    let page: puppeteer.Page | null = null;
    try {
      this.logger.log('Launching browser with userAgent: ' + userAgent);

      const args = [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
        '--disable-gpu',
        '--no-zygote',
        '--incognito',
      ];

      let proxyAuth: { username: string; password: string } | null = null;

      if (proxy) {
        const proxyParts = proxy.split(':');

        if (proxyParts.length < 2) {
          throw new BadRequestException(
            'Невалидный формат прокси. Ожидается IP:PORT или IP:PORT:LOGIN:PASSWORD',
          );
        }

        const [ip, port, username, pwd] = proxyParts;
        const proxyUrl = `http://${ip}:${port}`;
        args.unshift(`--proxy-server=${proxyUrl}`);
        this.logger.log(`Using proxy: ${proxyUrl}`);

        if (username && pwd) {
          proxyAuth = {
            username,
            password: pwd,
          };
          this.logger.log('Proxy authentication credentials set');
        }
      }

      browser = await puppeteer.launch({
        headless: process.env.NODE_ENV === 'production', // или false
        executablePath:
          process.env.CHROMIUM_EXEC_PATH || puppeteer.executablePath(),
        args,
      });

      this.logger.log('Browser launched successfully');

      page = await browser.newPage();

      if (proxyAuth && page) {
        // Проверка, что page существует
        await page.authenticate(proxyAuth);
        this.logger.log('Proxy authentication applied');
      }

      if (page) {
        // Проверка, что page существует
        await page.setUserAgent(userAgent);
        this.logger.log('New page created and userAgent set');

        this.logger.log('Navigating to login page...');
        await page.goto('https://twitter.com/i/flow/login', {
          waitUntil: 'networkidle2',
        });

        this.logger.log('Typing login...');
        await page.waitForSelector('input[name="text"]', { timeout: 10000 });
        await page.type('input[name="text"]', login);
        await page.keyboard.press('Enter');
        await delay(2000);

        // 🔐 Проверка на "Unusual login activity"
        try {
          await page.waitForSelector('h1[role="heading"]', { timeout: 3000 });

          const challengeText = await page.evaluate(() => {
            const xpath =
              "//text()[contains(., 'There was unusual login activity on your account. To help keep your account safe, please enter your')]";
            const result = document.evaluate(
              xpath,
              document,
              null,
              XPathResult.FIRST_ORDERED_NODE_TYPE,
              null,
            );
            return result.singleNodeValue?.textContent || '';
          });

          if (
            challengeText.includes(
              'There was unusual login activity on your account. To help keep your account safe, please enter your',
            )
          ) {
            this.logger.warn(
              'Unusual login activity detected, waiting for user input...',
            );
            return { result: { challengeRequired: true }, page };
          }
        } catch (err) {
          this.logger.log('No unusual activity challenge detected');
        }

        this.logger.log('Typing password...');
        await page.waitForSelector('input[name="password"]'); // Без timeout — ждём сколько нужно
        await page.type('input[name="password"]', password);
        await page.keyboard.press('Enter');
        await delay(3000);

        const loginError = await page.evaluate(() => {
          const el = document.querySelector('div[role="alert"]')?.textContent;
          return el || '';
        });

        if (
          loginError.toLowerCase().includes('wrong') ||
          loginError.toLowerCase().includes('неправильный')
        ) {
          this.logger.warn('Login failed: ' + loginError);
          return { result: { success: false, error: loginError }, page };
        }

        this.logger.log('Waiting for 2FA prompt or login success...');
        try {
          await page.waitForSelector(
            'input[data-testid="ocfEnterTextTextInput"]',
            {
              timeout: 5000,
            },
          );
          this.logger.warn('2FA required');
          return { result: { twoFactorRequired: true }, page };
        } catch {
          const context = page.browserContext();
          const cookies = await context.cookies();
          const cookiesDir = 'cookies';
          if (!fs.existsSync(cookiesDir)) fs.mkdirSync(cookiesDir);
          await fs.promises.writeFile(
            `${cookiesDir}/${login}.json`,
            JSON.stringify(cookies, null, 2),
          );
          this.logger.log('Cookies saved after successful login');

          this.logger.log('Login successful without 2FA');
          return { result: { success: true }, page };
        }
      }
    } catch (error) {
      this.logger.error('Error during login process:', error);
      return {
        result: { success: false, error: error.message || 'Unknown error' },
        page: null,
      };
    } finally {
      // Закрываем браузер в любом случае
      if (browser && 'close' in browser) {
        await browser.close();
      }
    }

    // Добавлено окончательное возвращение
    return { result: { success: false, error: 'Unknown error' }, page: null };
  }

  async submitChallenge({
    challengeInput,
    page,
    password,
  }: {
    challengeInput: string;
    page: puppeteer.Page;
    password: string;
  }) {
    this.logger.log('Submitting unusual login challenge input...');

    try {
      await page.type('input[name="text"]', challengeInput);
      await page.keyboard.press('Enter');
      await delay(2000);

      this.logger.log(
        'Challenge input submitted. Waiting for password field...',
      );

      await page.waitForSelector('input[name="password"]', { timeout: 10000 });

      // Теперь используем переданный пароль для заполнения поля пароля
      await page.type('input[name="password"]', password);
      await page.keyboard.press('Enter');

      this.logger.log('Password entered. Waiting for login success...');

      // Проверяем на 2FA
      try {
        await page.waitForSelector(
          'input[data-testid="ocfEnterTextTextInput"]',
          {
            timeout: 5000,
          },
        );
        this.logger.warn('2FA required after password input');

        // Если 2FA требуется, запросим код и передадим его для ввода
        return { result: { twoFactorRequired: true }, page };
      } catch {
        // Ждем, пока страница перейдет в режим успешного логина или проверим ошибки
        // await page.waitForNavigation({ waitUntil: 'networkidle2' });

        const loginError = await page.evaluate(() => {
          const el = document.querySelector('div[role="alert"]')?.textContent;
          return el || '';
        });

        if (
          loginError.toLowerCase().includes('wrong') ||
          loginError.toLowerCase().includes('неправильный')
        ) {
          this.logger.warn('Login failed: ' + loginError);
          return { result: { success: false, error: loginError }, page };
        } else {
          return { result: { success: true } };
        }
      }
    } catch (error) {
      this.logger.error('Error during challenge submission:', error);
      return {
        result: { success: false, error: error.message || 'Unknown error' },
        page,
      };
    } finally {
      // Закрываем браузер в случае ошибки или завершения процесса
      if (page && page.browser()) {
        const browser = page.browser();
        await browser.close();
      }
    }
  }

  async submitCode({
    code,
    page,
    login,
  }: {
    code: string;
    page: puppeteer.Page;
    login: string;
  }) {
    this.logger.log('Submitting 2FA code...');

    try {
      await page.type('input[data-testid="ocfEnterTextTextInput"]', code);
      await page.click('[data-testid="ocfEnterTextNextButton"]');
      await page.waitForNavigation();
      this.logger.log('2FA completed, navigation successful');

      // Сохранение cookies после успешного ввода кода
      try {
        const context = page.browserContext();
        const cookies = await context.cookies();
        const cookiesDir = 'cookies';
        if (!fs.existsSync(cookiesDir)) fs.mkdirSync(cookiesDir);
        await fs.promises.writeFile(
          `${cookiesDir}/${login}.json`, // Сохраняем cookies по URL
          JSON.stringify(cookies, null, 2),
        );
        this.logger.log('Cookies saved after submitting 2FA code');
      } catch (e) {
        this.logger.error('Error saving cookies after submitting 2FA code', e);
      }

      return { success: true };
    } catch (error) {
      this.logger.error('Error during 2FA submission', error);
      return { success: false, error: error.message || 'Unknown error' };
    } finally {
      // Закрываем браузер в случае ошибки или завершения процесса
      if (page && page.browser()) {
        const browser = page.browser();
        await browser.close();
        this.logger.log('Browser closed after 2FA submission');
      }
    }
  }

  async submitPost(post: PostDto, userAgent: string) {
    let browser: any;
    try {
      const account = await this.getAccountOrThrow(post.accountId);

      browser = await this.launchBrowser(account.proxy);
      let page: puppeteer.Page;
      if (browser instanceof puppeteer.Browser) {
        page = await browser.newPage();
      } else {
        page = browser;
      }

      await page.setUserAgent(userAgent);
      await this.loadCookies(page, account.login);

      await this.navigateToComposer(page);

      // 👉 Сразу после перехода проверяем редирект на капчу
      const isCaptcha = await this.checkCaptcha(page);
      if (isCaptcha) {
        this.logger.warn(
          '⚠️ Обнаружена капча на странице x.com/account/access',
        );
        return {
          success: false,
          message: 'Captcha detected. Manual action required',
          captchaDetected: true,
        };
      }

      await this.closeWelcomeModalIfExists(page);

      if (post.imageUrl) {
        const success = await this.handleMediaUpload(page, post.imageUrl);
        if (!success) return { success: false, message: 'Media upload failed' };
        if (post.targetUrl) await this.setTargetUrlCard(page, post.targetUrl);
      }

      await this.insertPostContent(page, post);
      await this.togglePromotion(page, post.promoted);

      const url = await this.publishPost(page);
      if (!url) return { success: false, message: 'Url not found' };

      await this.savePostToDb(post);
      return { success: true, url };
    } catch (error) {
      console.error('Error submitting post:', error); // Для логирования ошибок
      return { success: false, message: error.message || 'Unknown error' };
    } finally {
      if (browser && 'close' in browser) {
        await browser.close();
      }
    }
  }

  async checkCaptcha(page: puppeteer.Page): Promise<boolean> {
    const currentUrl = page.url();
    if (currentUrl.includes('x.com/account/access')) {
      console.log('Captcha page detected based on URL.');
      return true;
    }
    return false;
  }

  private async getAccountOrThrow(accountId: string) {
    const account = await this.prisma.account.findUnique({
      where: { id: accountId },
    });
    if (!account) {
      this.logger.error(`Account not found: ${accountId}`);
      throw new BadRequestException('Аккаунт не найден');
    }
    this.logger.log(`Account found: ${account.login}`);
    return account;
  }

  private async launchBrowser(
    proxy: string | null,
  ): Promise<puppeteer.Browser | puppeteer.Page> {
    const args = ['--no-sandbox', '--disable-setuid-sandbox', '--incognito'];
    let proxyAuth: { username: string; password: string } | null = null;

    if (proxy) {
      const proxyParts = proxy.split(':');

      if (proxyParts.length < 2) {
        throw new BadRequestException(
          'Невалидный формат прокси. Ожидается IP:PORT или IP:PORT:LOGIN:PASSWORD',
        );
      }

      const [ip, port, username, pwd] = proxyParts;
      const proxyUrl = `http://${ip}:${port}`;
      args.unshift(`--proxy-server=${proxyUrl}`);
      this.logger.log(`Using proxy: ${proxyUrl}`);

      if (username && pwd) {
        proxyAuth = {
          username,
          password: pwd,
        };
        this.logger.log('Proxy authentication credentials set');
      }
    }

    const browser = await puppeteer.launch({
      headless: process.env.NODE_ENV === 'production',
      executablePath:
        process.env.CHROMIUM_EXEC_PATH || puppeteer.executablePath(),
      args,
    });

    if (proxyAuth) {
      const page = await browser.newPage();
      await page.authenticate(proxyAuth);
      this.logger.log('Proxy authentication applied');
      return page;
    }

    return browser;
  }

  private async setTargetUrlCard(page: puppeteer.Page, url: string) {
    const dropdownReady = await page.waitForSelector(
      'div[data-testid="destination-dropdown"]',
      { visible: true, timeout: 10000 },
    );
    if (!dropdownReady) {
      throw new Error('Target URL block not visible after Back');
    }

    try {
      const dropdownButtonSelector =
        'div[data-testid="destination-dropdown"] div.FormInputWrapper--withAbsoluteEndAdornment button.FormInput';

      await page.waitForSelector(dropdownButtonSelector, {
        visible: true,
        timeout: 10000,
      });

      // Используем boundingBox и click через evaluate, чтобы избежать overlay ошибок
      const dropdownButton = await page.$(dropdownButtonSelector);
      if (!dropdownButton) throw new Error('Dropdown button not found');

      const box = await dropdownButton.boundingBox();
      if (!box) throw new Error('Dropdown button is not visible');

      await page.evaluate((selector) => {
        const el = document.querySelector(selector) as HTMLElement;
        el?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, dropdownButtonSelector);

      await dropdownButton.click();
      this.logger.log('Dropdown opened');

      const optionSelector = 'li[data-testid="card-type-dropdown-WEBSITE"]';
      await page.waitForSelector(optionSelector, {
        visible: true,
        timeout: 10000,
      });

      await page.click(optionSelector);
      this.logger.log('Selected Website option');

      // Вводим URL
      const urlInputSelector =
        'input[data-test-id="mediaWebsiteCardURLInput-0"]';
      await page.waitForSelector(urlInputSelector, {
        visible: true,
        timeout: 10000,
      });
      await page.type(urlInputSelector, url, { delay: 50 });
      this.logger.log(`Entered target URL: ${url}`);

      // Вводим заголовок
      const headlineInputSelector =
        'input[data-test-id="mediaWebsiteCardHeadlineInput-0"]';
      await page.waitForSelector(headlineInputSelector, {
        visible: true,
        timeout: 10000,
      });
      await page.type(headlineInputSelector, 'Check', { delay: 50 });
      this.logger.log('Entered headline: Check');
    } catch (error) {
      this.logger.error('Error setting target URL card:', error.message);
      throw new Error('Не удалось установить ссылку карточки Website');
    }
  }

  private async loadCookies(page: puppeteer.Page, login: string) {
    const cookiePath = `cookies/${login}.json`;
    if (!fs.existsSync(cookiePath)) {
      throw new Error('Сессия не найдена. Сначала выполните login().');
    }

    const cookies = JSON.parse(await fs.promises.readFile(cookiePath, 'utf-8'));
    const context = page.browserContext();
    await context.setCookie(...cookies);
    this.logger.log('Cookies loaded');
  }

  private async navigateToComposer(page: puppeteer.Page) {
    await page.goto('https://ads.x.com', { waitUntil: 'networkidle2' });
    this.logger.log('Redirected URL: ' + page.url());

    const match = page.url().match(/analytics\/([^/]+)\/campaigns/);
    if (!match) throw new Error('Ads Account ID не найден');
    const adsAccountId = match[1];

    await page.goto(`https://ads.x.com/composer/${adsAccountId}/carousel`, {
      waitUntil: 'networkidle2',
    });
  }

  private async closeWelcomeModalIfExists(page: puppeteer.Page) {
    const modalCloseButton = await page.$(
      '.Dialog--modal.Dialog--withClose.is-open button[aria-label="Close"]',
    );
    if (modalCloseButton) {
      await modalCloseButton.click();
      await page.waitForSelector('.Dialog--modal.Dialog--withClose.is-open', {
        hidden: true,
        timeout: 5000,
      });
    }
  }

  private async insertPostContent(page: puppeteer.Page, post: PostDto) {
    await page.waitForSelector('.TweetTextInput-editor', { timeout: 10000 });

    const fullContent = [post.content.trim(), post.hashtags?.trim()]
      .filter(Boolean)
      .join('\n');

    await page.evaluate((text) => {
      const editor = document.querySelector('.TweetTextInput-editor');
      if (editor && editor instanceof HTMLElement) {
        editor.focus();

        // Очистка предыдущего текста
        const selection = window.getSelection();
        const range = document.createRange();
        range.selectNodeContents(editor);
        selection?.removeAllRanges();
        selection?.addRange(range);
        editor.innerHTML = ''; // или editor.textContent = ''; если без разметки

        // Вставка текста
        const lines = text.split('\n');
        for (let i = 0; i < lines.length; i++) {
          const line = document.createTextNode(lines[i]);
          editor.appendChild(line);
          if (i < lines.length - 1)
            editor.appendChild(document.createElement('br'));
        }

        // Вызываем input событие, если нужно запустить какие-то listeners
        editor.dispatchEvent(new Event('input', { bubbles: true }));
      }
    }, fullContent);
  }

  private async togglePromotion(
    page: puppeteer.Page,
    promoted: boolean = false,
  ) {
    // Получаем текущее состояние чекбокса
    const isChecked = await page.evaluate(() => {
      const checkbox = document.querySelector(
        '[data-test-id="promotedOnlyCheckbox"] .Checkbox-input',
      ) as HTMLInputElement;
      return checkbox ? checkbox.checked : false;
    });

    console.log(
      `Current checkbox state: ${isChecked}, desired state: ${promoted}`,
    );

    // Если состояние не совпадает с желаемым — переключаем
    if (promoted !== isChecked) {
      const checkbox = await page.$(
        '[data-test-id="promotedOnlyCheckbox"] .Checkbox-input',
      );

      if (checkbox) {
        // Кликаем и ждём, пока UI стабилизируется
        await checkbox.click();
        await delay(1000); // увеличенный delay

        // Проверяем новое состояние чекбокса
        const newState = await page.evaluate(() => {
          const checkbox = document.querySelector(
            '[data-test-id="promotedOnlyCheckbox"] .Checkbox-input',
          ) as HTMLInputElement;
          return checkbox ? checkbox.checked : false;
        });

        console.log(`New checkbox state after click: ${newState}`);

        // Если всё ещё не совпадает — форсируем изменение через JS
        if (newState !== promoted) {
          console.warn('Click did not work, forcing checkbox value manually');
          await page.evaluate((promoted) => {
            const checkbox = document.querySelector(
              '[data-test-id="promotedOnlyCheckbox"] .Checkbox-input',
            ) as HTMLInputElement;
            if (checkbox && checkbox.checked !== promoted) {
              checkbox.checked = promoted;
              checkbox.dispatchEvent(new Event('change', { bubbles: true }));
            }
          }, promoted);

          await delay(1000); // ждём после принудительного изменения
        }
      } else {
        console.warn('Checkbox not found on the page');
      }
    }
  }

  private async handleMediaUpload(
    page: puppeteer.Page,
    imageUrl: string,
  ): Promise<boolean> {
    try {
      await delay(2000);
      const selector = '[data-testid="adFormatsGroup-SINGLE_MEDIA"]';
      const singleMediaElement = await page.waitForSelector(selector, {
        timeout: 20000,
      });
      if (!singleMediaElement) return false;
  
      await page.evaluate((sel) => {
        const el = document.querySelector(sel);
        el?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, selector);
  
      await singleMediaElement.focus();
      await page.keyboard.press('Space');
  
      await page.waitForSelector('button[data-test-id="addMediaButton"]', {
        timeout: 20000,
      });
      await page.click('button[data-test-id="addMediaButton"]');
  
      // Скачиваем и обрабатываем изображение
      const localPath = await downloadImageToTempFile(imageUrl, 800, 800);
      console.log('[handleMediaUpload] Image saved to:', localPath);
  
      const input = (await page.waitForSelector(
        '.FilePicker-callToActionFileInput',
        { timeout: 20000 }, // Увеличили таймаут
      )) as puppeteer.ElementHandle<HTMLInputElement>;
  
      if (!input) {
        console.error('[handleMediaUpload] Image input not found');
        return false;
      }
      console.log(
        '[handleMediaUpload] Input element found, uploading image...',
      );
      await input.uploadFile(localPath);
  
      // Добавим задержку перед удалением файла
      await delay(1000); // Убедимся, что файл не используется
  
      // Удаляем временный файл после использования
      try {
        await fs.promises.unlink(localPath);
        console.log('[handleMediaUpload] Temporary file deleted:', localPath);
      } catch (e) {
        console.warn('[handleMediaUpload] Failed to delete file:', localPath, e.message);
      }
  
      // Нажимаем кнопку Save
      try {
        await page.waitForSelector('button.Button--small', { timeout: 5000 });
  
        const buttons = await page.$$('button.Button--small');
        for (const btn of buttons) {
          const text = await btn.evaluate((el) => el.textContent?.trim());
          if (text === 'Save') {
            console.log('[handleMediaUpload] Clicking Save button...');
            await btn.click();
            break;
          }
        }
      } catch (err) {
        console.log(
          '[handleMediaUpload] Save button not found — skipping click',
        );
      }
  
      try {
        const backButtonSelector =
          'button[aria-label="Back"].Panel-headerBackButton';
        await page.waitForSelector(backButtonSelector, { timeout: 5000 });
        await page.click(backButtonSelector);
        console.log('[handleMediaUpload] Clicked Back button');
  
        await delay(2000);
      } catch (err) {
        console.log(
          '[handleMediaUpload] Back button not found or click failed:',
          err.message,
        );
      }
  
      return true;
    } catch (err) {
      console.error(
        '[handleMediaUpload] Error during image upload:',
        err.message,
      );
      this.logger.error('Image upload error:', err.message);
      return false;
    }
  }
  

  private async publishPost(page: puppeteer.Page): Promise<string> {
    await page.waitForSelector('button[data-test-id="tweetSaveButton"]', {
      timeout: 10000,
    });

    // Активируем кнопку отправки
    await page.evaluate(() => {
      const button = document.querySelector(
        'button[data-test-id="tweetSaveButton"]',
      ) as HTMLButtonElement;
      if (button) {
        button.disabled = false;
        button.classList.remove('is-disabled');
      }
    });

    // Кликаем по кнопке
    const button = await page.$('button[data-test-id="tweetSaveButton"]');
    if (!button) throw new Error('Button not found (even after force)');
    await button.click();

    // Ждём небольшое время, чтобы действие завершилось
    await delay(2000); // Добавляем задержку, например 2 секунды

    // await page.screenshot({ path: 'fail.png' });

    // Ждём появления уведомления с ссылкой на твит
    const tweetSelector = '.Notification-body a[href*="/status/"]';
    await page.waitForSelector(tweetSelector, { timeout: 50000 });

    // Извлекаем ссылку
    const tweetUrl = await page.$eval(tweetSelector, (a: Element) => {
      return (a as HTMLAnchorElement).href;
    });

    return tweetUrl;
  }

  private async savePostToDb(post: PostDto) {
    await this.prisma.post.create({
      data: {
        accountId: post.accountId,
        content: post.content,
        imageUrl: post.imageUrl,
        hashtags: post.hashtags,
        targetUrl: post.targetUrl,
        promoted: post.promoted || undefined,
      },
    });
  }
}

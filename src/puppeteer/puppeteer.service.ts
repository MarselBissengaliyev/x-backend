import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import * as fs from 'fs';
import * as puppeteer from 'puppeteer-core';
import { PrismaService } from 'src/prisma/prisma.service';
import { LoginDto, PostDto } from './puppeteer.dto';
import { delay, downloadImageToTempFile } from './puppeteer.utils';

@Injectable()
export class PuppeteerService {
  private readonly logger = new Logger(PuppeteerService.name);

  constructor(private prisma: PrismaService) {}

  async login({
    login,
    password,
    proxy,
    userAgent,
  }: LoginDto): Promise<{ result: any; page: puppeteer.Page }> {
    const delay = (ms: number) =>
      new Promise((resolve) => setTimeout(resolve, ms));

    this.logger.log('Launching browser with userAgent: ' + userAgent);

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

    const isProd = process.env.NODE_ENV === 'production';

    const browser = await puppeteer.launch({
      executablePath:
        process.env.CHROMIUM_EXEC_PATH || puppeteer.executablePath(),
      headless: isProd, // true на проде, false — локально
      args,
    });

    this.logger.log('Browser launched successfully');

    const page = await browser.newPage();

    if (proxyAuth) {
      await page.authenticate(proxyAuth);
      this.logger.log('Proxy authentication applied');
    }

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
        const el = document.querySelector('h1[role="heading"]')?.textContent;
        return el || '';
      });

      if (challengeText.includes('Enter your')) {
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
      await page.waitForSelector('input[data-testid="ocfEnterTextTextInput"]', {
        timeout: 5000,
      });
      this.logger.warn('2FA required');
      return { result: { twoFactorRequired: true }, page };
    } catch {
      this.logger.log('Login successful without 2FA');
      return { result: { success: true }, page };
    }
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

    await page.type('input[name="text"]', challengeInput);
    await page.keyboard.press('Enter');
    await delay(2000);

    this.logger.log('Challenge input submitted. Waiting for password field...');

    await page.waitForSelector('input[name="password"]', { timeout: 10000 });

    // Теперь используем переданный пароль для заполнения поля пароля
    await page.type('input[name="password"]', password);
    await page.keyboard.press('Enter');

    this.logger.log('Password entered. Waiting for login success...');

    // Проверяем на 2FA
    try {
      await page.waitForSelector('input[data-testid="ocfEnterTextTextInput"]', {
        timeout: 5000,
      });
      this.logger.warn('2FA required after password input');

      // Если 2FA требуется, запросим код и передадим его для ввода
      return { result: { twoFactorRequired: true }, page };
    } catch {
    // Ждем, пока страница перейдет в режим успешного логина или проверим ошибки
    await page.waitForNavigation({ waitUntil: 'networkidle2' });

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
      return { result: { success: true } }
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
  }

  async submitPost(post: PostDto, userAgent: string) {
    this.logger.log(`Starting to submit post: ${JSON.stringify(post)}`);

    const account = await this.getAccountOrThrow(post.accountId);

    const browser = await this.launchBrowser();
    const page = await browser.newPage();
    await page.setUserAgent(userAgent);

    await this.loadCookies(page, account.login);
    await this.navigateToComposer(page);

    await this.closeWelcomeModalIfExists(page);
    await this.insertPostContent(page, post);

    await this.togglePromotion(page, post.promoted || false);

    if (post.imageUrl) {
      const success = await this.handleMediaUpload(page, post.imageUrl);
      if (!success) {
        await browser.close();
        return { success: false, message: 'Media upload failed' };
      }
    }

    await this.publishPost(page);
    await this.savePostToDb(post);

    await browser.close();
    return { success: true };
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

  private async launchBrowser() {
    return puppeteer.launch({
      executablePath: process.env.CHROMIUM_EXEC_PATH,
      headless: false,
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });
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

    const fullContent = [
      post.content.trim(),
      post.hashtags?.trim(),
      post.targetUrl ? `Check it out: ${post.targetUrl}` : null,
    ]
      .filter(Boolean)
      .join('\n');

    await page.evaluate((content: string) => {
      const el = document.querySelector(
        '.TweetTextInput-editor',
      ) as HTMLElement;
      if (!el) return;

      el.focus();
      const selection = window.getSelection();
      const range = document.createRange();
      range.selectNodeContents(el);
      selection?.removeAllRanges();
      selection?.addRange(range);
      document.execCommand('delete');

      const lines = content.split('\n');
      for (const line of lines) {
        document.execCommand('insertText', false, line);
        document.execCommand('insertParagraph');
      }
    }, fullContent);
  }

  private async togglePromotion(page: puppeteer.Page, promoted: boolean) {
    const checkbox = await page.$(
      '[data-test-id="promotedOnlyCheckbox"] .Checkbox-input',
    );
    if (!checkbox) return;

    const isChecked = await checkbox.evaluate(
      (el: HTMLInputElement) => el.checked,
    );

    if (promoted && !isChecked) {
      await checkbox.click();
      await delay(500);
    } else if (!promoted && isChecked) {
      await checkbox.click();
      await delay(500);
    }
  }

  private async handleMediaUpload(
    page: puppeteer.Page,
    imageUrl: string,
  ): Promise<boolean> {
    try {
      const selector = '[data-testid="adFormatsGroup-SINGLE_MEDIA"]';
      const singleMediaElement = await page.waitForSelector(selector, {
        timeout: 10000,
      });
      if (!singleMediaElement) throw new Error('Single media not found');

      await page.evaluate((sel) => {
        const el = document.querySelector(sel);
        el?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, selector);

      await singleMediaElement.focus();
      await page.keyboard.press('Space');

      await page.waitForSelector('button[data-test-id="addMediaButton"]', {
        timeout: 10000,
      });
      await page.click('button[data-test-id="addMediaButton"]');

      const localPath = await downloadImageToTempFile(imageUrl, 1200, 1200);
      const input = (await page.waitForSelector(
        '.FilePicker-callToActionFileInput',
        { timeout: 10000 },
      )) as puppeteer.ElementHandle<HTMLInputElement>;
      if (!input) throw new Error('Image input not found');
      await input.uploadFile(localPath);

      await page.waitForSelector('button.Button--primary', { timeout: 10000 });
      await page.waitForFunction(() => {
        const btn = document.querySelector('button.Button--primary');
        return btn && !btn.hasAttribute('disabled');
      });

      await page.click('button.Button--primary');
      await fs.promises.unlink(localPath);

      return true;
    } catch (err) {
      this.logger.error('Image upload error:', err);
      return false;
    }
  }

  private async publishPost(page: puppeteer.Page) {
    await page.click('button[data-test-id="tweetSaveButton"]');
    await delay(3000);
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

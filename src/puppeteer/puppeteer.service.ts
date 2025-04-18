import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { Post } from 'generated/prisma';
import * as puppeteer from 'puppeteer-core';
import { LoginDto, PostDto } from './puppeteer.dto';

@Injectable()
export class PuppeteerService {
  private readonly logger = new Logger(PuppeteerService.name);
  private browser: puppeteer.Browser | null = null;
  private page: puppeteer.Page | null = null;

  async login({
    login,
    password,
    proxy,
    userAgent,
  }: LoginDto): Promise<{ result: any; page: puppeteer.Page }> {
    const delay = (ms: number) =>
      new Promise((resolve) => setTimeout(resolve, ms));

    this.logger.log('Launching browser with userAgent: ' + userAgent);

    const args = ['--no-sandbox', '--disable-setuid-sandbox'];
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
      executablePath: process.env.CHROMIUM_EXEC_PATH,
      headless: false,
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
    
      if (challengeText.includes('Enter your phone number or username')) {
        this.logger.warn(
          'Unusual login activity detected, waiting for user input...',
        );
    
        // Ждём появление поля
        await page.waitForSelector('input[name="text"]', { timeout: 10000 });
    
        // Ждём, пока пользователь введёт что-то в поле (бесконечно)
        let inputEntered = false;
        while (!inputEntered) {
          const value = await page.$eval(
            'input[name="text"]',
            (el) => el.value,
          );
          if (value && value.trim().length > 0) {
            inputEntered = true;
            this.logger.log('User has entered their username or phone number');
            await page.keyboard.press('Enter');
          } else {
            await delay(1000); // Пауза перед повторной проверкой
          }
        }
    
        await delay(2000); // Небольшая пауза после нажатия Enter
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

  async submitCode({ code, page }: { code: string; page: puppeteer.Page }) {
    this.logger.log('Submitting 2FA code...');
    await page.type('input[data-testid="ocfEnterTextTextInput"]', code);
    await page.click('[data-testid="ocfEnterTextNextButton"]');
    await page.waitForNavigation();
    this.logger.log('2FA completed, navigation successful');
    return { success: true };
  }

  async submitPost(post: PostDto) {
    if (!this.page) {
      this.logger.error('No active session for posting');
      throw new Error('No active session');
    }

    this.logger.log('Navigating to Composer...');
    await this.page.goto('https://ads.x.com/composer');

    this.logger.log('Filling in post content...');
    await this.page.type('#content-text-field', post.content);

    if (post.imageUrl) {
      this.logger.log('Adding image URL');
      await this.page.type('#image-url-field', post.imageUrl);
    }

    if (post.hashtags) {
      this.logger.log('Adding hashtags');
      await this.page.type('#hashtags-field', post.hashtags);
    }

    if (post.targetUrl) {
      this.logger.log('Adding target URL');
      await this.page.type('#target-url-field', post.targetUrl);
    }

    if (post.promoted) {
      this.logger.log('Setting post as Promoted');
      const promotedToggle = await this.page.$('#promoted-toggle');
      if (promotedToggle) {
        await promotedToggle.click();
      } else {
        this.logger.warn('Promoted toggle not found');
      }
    }

    this.logger.log('Clicking publish...');
    await this.page.click('#publish-button');

    this.logger.log('Waiting for post confirmation...');
    await this.page.waitForSelector('#post-confirmation', { visible: true });

    this.logger.log('Post published successfully');
    return { success: true };
  }
}

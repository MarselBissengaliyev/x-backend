import { Injectable, Logger } from '@nestjs/common';
import { Page } from 'puppeteer-core';
import { PuppeteerService } from 'src/puppeteer/puppeteer.service';
import { v4 as uuid } from 'uuid';
import { PrismaService } from '../prisma/prisma.service';
import { isToday } from './account.utils';
import { CreateAccountDto } from './accounts.dto';

@Injectable()
export class AccountsService {
  private readonly logger = new Logger(AccountsService.name);
  private sessions = new Map<string, { page: Page; data: CreateAccountDto }>();

  constructor(
    private prisma: PrismaService,
    private puppeteerService: PuppeteerService,
  ) {}

  async create(data: CreateAccountDto, userAgent: string) {
    this.logger.log(`Attempting to create account for login: ${data.login}`);
    try {
      const { result, page } = await this.puppeteerService.login({
        login: data.login,
        password: data.password,
        proxy: data.proxy,
        userAgent,
      });

      // Проверяем, был ли логин успешным
      if (result.success === false) {
        this.logger.warn(`Login failed for login: ${data.login}`);
        return { success: false, error: 'Invalid login or password' };
      }

      // Проверка на двухфакторную аутентификацию
      if (result.twoFactorRequired) {
        const sessionId = uuid();
        this.sessions.set(sessionId, { page, data });
        this.logger.log(
          `Two-factor authentication required. Session ID: ${sessionId}`,
        );
        return { twoFactorRequired: true, sessionId };
      }

      if (result.challengeRequired) {
        const sessionId = uuid();
        this.sessions.set(sessionId, { page, data });
        this.logger.log(`Challenge required. Session ID: ${sessionId}`);
        return { challengeRequired: true, sessionId };
      }

      // Создание аккаунта в базе данных
      const account = await this.prisma.account.create({
        data: {
          id: uuid(),
          ...data,
        },
      });

      this.logger.log(`Account created successfully for login: ${data.login}`);
      return { success: true, id: account.id };
    } catch (err) {
      this.logger.error(`Login failed for login: ${data.login}`, err.stack);
      throw new Error('Логин не удался');
    }
  }

  async submitCode(sessionId: string, code: string, login: string) {
    this.logger.log(`Submitting 2FA code for session ID: ${sessionId}`);
    const session = this.sessions.get(sessionId);
    if (!session) {
      this.logger.error(`Session not found for session ID: ${sessionId}`);
      throw new Error('Сессия не найдена');
    }

    const { page, data } = session;

    await this.puppeteerService.submitCode({ code, page, login });

    await this.prisma.account.create({
      data: {
        id: uuid(),
        ...data,
      },
    });

    this.sessions.delete(sessionId);
    this.logger.log(
      `2FA successful and account created for session ID: ${sessionId}`,
    );

    return { success: true };
  }

  async submitChallenge(
    sessionId: string,
    challengeInput: string,
    password: string,
  ) {
    this.logger.log(`Submitting challenge input for session ID: ${sessionId}`);

    // Получаем сессию из Map
    const session = this.sessions.get(sessionId);
    if (!session) {
      this.logger.error(`Session not found for session ID: ${sessionId}`);
      throw new Error('Сессия не найдена');
    }

    const { page, data } = session;

    // Отправляем данные через Puppeteer
    await this.puppeteerService.submitChallenge({
      challengeInput,
      page,
      password,
    });

    await this.prisma.account.create({
      data: {
        id: uuid(),
        ...data,
      },
    });

    // Удаляем сессию после выполнения
    this.sessions.delete(sessionId);
    this.logger.log(
      `Challenge input submitted and session cleared for session ID: ${sessionId}`,
    );

    return { success: true };
  }

  async findAll() {
    this.logger.log('Fetching all accounts');
    try {
      const accounts = await this.prisma.account.findMany({
        include: {
          posts: true, // Включаем посты
          contentSettings: true,
          ScheduledPost: true,
        },
      });

      this.logger.log(`Found ${accounts.length} accounts`);

      const accountsWithCounts = accounts.map((account) => ({
        ...account,
        totalPosts: account.posts.length, // Количество всех постов
        postsToday: account.posts.filter((post) => isToday(post.createdAt))
          .length, // Количество постов за сегодня
      }));

      this.logger.log(`Processed accounts with post counts`);
      return accountsWithCounts;
    } catch (err) {
      this.logger.error('Error fetching accounts', err.stack);
      throw new Error('Ошибка при получении аккаунтов');
    }
  }

  async findById(id: string) {
    return this.prisma.account.findUnique({
      where: {
        id,
      },
    });
  }
}

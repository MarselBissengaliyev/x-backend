import { Test, TestingModule } from '@nestjs/testing';
import { ContentSettingsService } from './content-settings.service';

describe('ContentSettingsService', () => {
  let service: ContentSettingsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ContentSettingsService],
    }).compile();

    service = module.get<ContentSettingsService>(ContentSettingsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

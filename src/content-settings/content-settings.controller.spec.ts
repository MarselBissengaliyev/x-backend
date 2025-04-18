import { Test, TestingModule } from '@nestjs/testing';
import { ContentSettingsController } from './content-settings.controller';

describe('ContentSettingsController', () => {
  let controller: ContentSettingsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ContentSettingsController],
    }).compile();

    controller = module.get<ContentSettingsController>(ContentSettingsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

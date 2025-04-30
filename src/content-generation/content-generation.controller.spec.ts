import { Test, TestingModule } from '@nestjs/testing';
import { ContentGenerationController } from './content-generatio.controller';


describe('ContentGenerationController', () => {
  let controller: ContentGenerationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ContentGenerationController],
    }).compile();

    controller = module.get<ContentGenerationController>(ContentGenerationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

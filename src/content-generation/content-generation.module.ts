import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { ContentGenerationService } from './content-generation.service';
import { ContentGenerationController } from './content-generatio.controller';

@Module({
  providers: [ContentGenerationService],
  imports: [PrismaModule],
  exports: [ContentGenerationService],
  controllers: [ContentGenerationController]
})
export class ContentGenerationModule {}

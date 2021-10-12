import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { jobProviders } from './job.providers';
import { JobsController } from './jobs.controller';
import { JobsService } from './jobs.service';

@Module({
  imports: [DatabaseModule],
  controllers: [JobsController],
  providers: [JobsService, ...jobProviders],
})
export class JobsModule {}

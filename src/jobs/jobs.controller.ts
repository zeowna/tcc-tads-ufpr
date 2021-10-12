import { Controller } from '@nestjs/common';
import { AbstractTypeORMCrudController } from '../common/controllers/abstract-typeorm-crud.crontroller';
import { Job } from './entities/job.entity';
import { JobsService } from './jobs.service';

@Controller('jobs')
export class JobsController extends AbstractTypeORMCrudController<Job> {
  constructor(private jobService: JobsService) {
    super(jobService);
  }
}

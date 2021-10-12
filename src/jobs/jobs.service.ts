import { Inject, Injectable } from '@nestjs/common';
import { AbstractTypeORMCrudService } from '../common/services/abstract-typeorm-crud.service';
import { Repository } from 'typeorm';
import { Job } from './entities/job.entity';

@Injectable()
export class JobsService extends AbstractTypeORMCrudService<Job> {
  constructor(
    @Inject('JOB_REPOSITORY')
    private jobRepository: Repository<Job>,
  ) {
    super(jobRepository);
  }
}

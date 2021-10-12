import { Connection } from 'typeorm';
import { Job } from './entities/job.entity';

export const jobProviders = [
  {
    provide: 'JOB_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Job),
    inject: ['DATABASE_CONNECTION'],
  },
];

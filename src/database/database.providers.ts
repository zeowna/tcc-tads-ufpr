import { createConnection } from 'typeorm';
import { databaseConfig } from './database.config';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () => createConnection(databaseConfig),
  },
];

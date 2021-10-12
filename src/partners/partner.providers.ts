import { Connection } from 'typeorm';
import { Partner } from './entities/partner.entity';

export const partnerProviders = [
  {
    provide: 'PARTNER_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Partner),
    inject: ['DATABASE_CONNECTION'],
  },
];

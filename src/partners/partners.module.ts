import { Module } from '@nestjs/common';
import { PartnersService } from './partners.service';
import { PartnersController } from './partners.controller';
import { partnerProviders } from './partner.providers';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [PartnersController],
  providers: [PartnersService, ...partnerProviders],
})
export class PartnersModule {}

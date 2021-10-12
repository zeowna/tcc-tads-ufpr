import { DatabaseModule } from '../database/database.module';
import { Module } from '@nestjs/common';
import { addressProviders } from './address.providers';
import { AddressesService } from './addresses.service';
import { AddressesController } from './addresses.controller';

@Module({
  imports: [DatabaseModule],
  providers: [AddressesService, ...addressProviders],
  controllers: [AddressesController],
})
export class AddressModule {}

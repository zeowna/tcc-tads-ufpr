import { Controller } from '@nestjs/common';
import { AbstractTypeORMCrudController } from '../common/controllers/abstract-typeorm-crud.crontroller';
import { AddressesService } from './addresses.service';
import { Address } from './entities/address.entity';

@Controller('addresses')
export class AddressesController extends AbstractTypeORMCrudController<Address> {
  constructor(private addresssService: AddressesService) {
    super(addresssService);
  }
}

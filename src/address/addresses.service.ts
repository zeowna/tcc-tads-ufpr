import { Inject, Injectable } from '@nestjs/common';
import { AbstractTypeORMCrudService } from '../common/services/abstract-typeorm-crud.service';
import { Repository } from 'typeorm';
import { Address } from './entities/address.entity';

@Injectable()
export class AddressesService extends AbstractTypeORMCrudService<Address> {
  constructor(
    @Inject('ADDRESS_REPOSITORY')
    private addressRepository: Repository<Address>,
  ) {
    super(addressRepository);
  }
}

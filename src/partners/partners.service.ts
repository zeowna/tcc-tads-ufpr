import { Inject, Injectable } from '@nestjs/common';
import { AbstractTypeORMCrudService } from '../common/services/abstract-typeorm-crud.service';
import { Repository } from 'typeorm';
import { Partner } from './entities/partner.entity';

@Injectable()
export class PartnersService extends AbstractTypeORMCrudService<Partner> {
  constructor(
    @Inject('PARTNER_REPOSITORY')
    private partnerRepository: Repository<Partner>,
  ) {
    super(partnerRepository);
  }
}

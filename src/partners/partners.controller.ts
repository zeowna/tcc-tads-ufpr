import { Controller, Post, UseGuards } from '@nestjs/common';
import { AbstractTypeORMCrudController } from '../common/controllers/abstract-typeorm-crud.crontroller';
import { Partner } from './entities/partner.entity';
import { PartnersService } from './partners.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('partners')
export class PartnersController extends AbstractTypeORMCrudController<Partner> {
  constructor(private partnersService: PartnersService) {
    super(partnersService);
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  async create(record: Partner) {
    return super.create(record);
  }
}

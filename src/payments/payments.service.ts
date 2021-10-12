import { Inject, Injectable } from '@nestjs/common';
import { AbstractTypeORMCrudService } from '../common/services/abstract-typeorm-crud.service';
import { Repository } from 'typeorm';
import { Payment } from './entities/payment.entity';

@Injectable()
export class PaymentsService extends AbstractTypeORMCrudService<Payment> {
  constructor(
    @Inject('PAYMENT_REPOSITORY')
    private paymenRepository: Repository<Payment>,
  ) {
    super(paymenRepository);
  }
}

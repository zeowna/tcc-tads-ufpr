import { Controller } from '@nestjs/common';
import { AbstractTypeORMCrudController } from '../common/controllers/abstract-typeorm-crud.crontroller';
import { Payment } from './entities/payment.entity';
import { PaymentsService } from './payments.service';

@Controller('payments')
export class PaymentsController extends AbstractTypeORMCrudController<Payment> {
  constructor(private paymentsService: PaymentsService) {
    super(paymentsService);
  }

  async create(record: Payment) {
    return undefined;
  }

  async update(id: number, record: Payment) {
    return undefined;
  }

  async remove(id: number) {
    return undefined;
  }
}

import { IsDefined } from 'class-validator';
import { Job } from '../../jobs/entities/job.entity';
import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { AbstractEntity } from '../../common/entities/abstract.entity';
import { PaymentMethods } from './payment-methods.enum';
import { PaymentStatus } from './payment-statuses.enum';

@Entity()
export class Payment extends AbstractEntity {
  @IsDefined()
  @Column('character varying')
  method: PaymentMethods;

  @Column()
  externalId: string;

  @IsDefined()
  @Column()
  externalServiceName: string;

  @IsDefined()
  @Column('character varying', { default: PaymentStatus.SCHEDULED })
  status: PaymentStatus;

  @IsDefined()
  @OneToOne(() => Job, (job) => job.payment)
  @JoinColumn()
  job: Job;
}

import { AbstractEntity } from '../../common/entities/abstract.entity';
import { Address } from '../../address/entities/address.entity';
import { Column, Entity, JoinColumn, OneToMany, OneToOne } from 'typeorm';
import { JobStatuses } from './job-statuses.enum';
import { Partner } from '../../partners/entities/partner.entity';
import { Payment } from '../../payments/entities/payment.entity';
import { User } from '../../users/entities/user.entity';
import { JobPicture } from './job-picture.entity';

@Entity()
export class Job extends AbstractEntity {
  partner: Partner;

  @OneToOne(() => User)
  @JoinColumn()
  endUser: User;

  @OneToOne(() => User)
  @JoinColumn()
  partnerUser: User;

  @OneToOne(() => Address)
  @JoinColumn()
  address: Address;

  @Column({ type: 'int' })
  price: number;

  @Column({ default: 'BRL' })
  currency: string;

  @Column('character varying', { default: JobStatuses.WAITING })
  status: JobStatuses;

  @OneToOne(() => Payment, (payment) => payment.job)
  payment: Payment;

  @OneToMany(() => JobPicture, (picture) => picture.job)
  pictures: JobPicture;
}

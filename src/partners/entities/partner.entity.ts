import { IsDefined, Max, Min } from 'class-validator';
import { Column, Entity } from 'typeorm';
import { AbstractEntity } from '../../common/entities/abstract.entity';
import { PartnerStatus } from './partiner-statuses.enum';

@Entity()
export class Partner extends AbstractEntity {
  @IsDefined()
  @Column()
  name: string;

  @IsDefined()
  @Column()
  cnpj: string;

  @Column('character varying', { default: PartnerStatus.ACTIVE })
  status: PartnerStatus;

  @Min(1)
  @Max(5)
  @Column('integer')
  avgRating: number;
}

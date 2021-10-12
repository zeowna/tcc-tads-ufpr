import { AbstractEntity } from '../../common/entities/abstract.entity';
import { Column, Entity } from 'typeorm';

@Entity()
export class Address extends AbstractEntity {
  @Column()
  zipCode: string;

  @Column()
  street: string;

  @Column()
  neighborhood: string;

  @Column()
  state: string;

  @Column({ type: 'int' })
  number: number;

  @Column()
  complement: string;
}

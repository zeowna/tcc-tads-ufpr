import { IsDefined } from 'class-validator';
import { AbstractEntity } from '../../common/entities/abstract.entity';
import { Column, Entity, Index, TableInheritance } from 'typeorm';
import { UserRoles } from './user-roles.enum';
import { UserStatuses } from './user-statuses.enum';

@Entity()
@TableInheritance({ column: { type: 'character varying', name: 'role' } })
export class User extends AbstractEntity {
  @IsDefined()
  @Column()
  name: string;

  @IsDefined()
  @Index({ unique: true })
  @Column()
  rg: string;

  @IsDefined()
  @Index({ unique: true })
  @Column()
  cpf: string;

  @IsDefined()
  @Column({ type: 'date' })
  birthdate: Date;

  @Column('character varying', { default: UserStatuses.ACTIVE })
  status: UserStatuses;

  @IsDefined()
  @Column()
  email: string;

  @IsDefined()
  @Column()
  password: string;

  @IsDefined()
  @Column('character varying')
  role: UserRoles;
}

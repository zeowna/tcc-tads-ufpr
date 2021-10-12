import { Inject, Injectable } from '@nestjs/common';
import { AbstractTypeORMCrudService } from '../common/services/abstract-typeorm-crud.service';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService extends AbstractTypeORMCrudService<User> {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>,
  ) {
    super(userRepository);
  }

  async findByEmail(email: string) {
    return this.userRepository.findOneOrFail({ where: { email } });
  }
}

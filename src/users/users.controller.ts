import { Controller } from '@nestjs/common';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';
import { TypeORMCrudControllerFactory } from '../common/controllers/abstract-typeorm-crud.crontroller';

const AbstractTypeORMCrudController = TypeORMCrudControllerFactory(User);

@Controller('users')
export class UsersController extends AbstractTypeORMCrudController<User> {
  constructor(private userService: UsersService) {
    super(userService);
  }
}

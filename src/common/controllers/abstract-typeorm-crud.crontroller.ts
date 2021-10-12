import {
  Body,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ICrudService } from '../services/i-crud-service';
import { ICrudCrontroller } from './i-crud-controller.inferface';
import { AbstractEntity } from '../entities/abstract.entity';

export abstract class AbstractTypeORMCrudController<T extends AbstractEntity>
  implements ICrudCrontroller<T>
{
  readonly entity: T;

  constructor(private crudService: ICrudService<T>) {}

  @Get()
  async findAll(): Promise<T[] | void> {
    return this.crudService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<T | void> {
    const existing = await this.crudService.findOne(id);

    if (!existing) {
      throw new NotFoundException(
        `${this.crudService.getEntityName()} not found with id ${id}`,
      );
    }

    return existing;
  }

  @Post()
  async create(@Body() record: T) {
    return this.crudService.create(record);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() record: T): Promise<T | void> {
    const existing = await this.findOne(id);

    return this.crudService.update(existing as T, record);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<T | void> {
    const existing = await this.findOne(id);

    return this.crudService.remove(existing as T);
  }
}

export const TypeORMCrudControllerFactory = (
  entity: typeof AbstractEntity,
): typeof AbstractTypeORMCrudController => {
  abstract class GeneratedAbstractTypeORMCrudController<
    T extends AbstractEntity,
  > extends AbstractTypeORMCrudController<T> {
    @Post()
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    async create(@Body() record: entity): Promise<T> {
      return super.create(record as any);
    }

    @Put(':id')
    async update(
      @Param('id') id: number,
      @Body()
      record: // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      entity,
    ): Promise<T | void> {
      return super.update(id, record as any);
    }
  }

  return GeneratedAbstractTypeORMCrudController;
};

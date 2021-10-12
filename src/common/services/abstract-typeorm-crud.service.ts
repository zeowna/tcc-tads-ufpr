import { Repository } from 'typeorm';
import { ICrudService } from './i-crud-service';

export abstract class AbstractTypeORMCrudService<T> implements ICrudService<T> {
  constructor(private repository: Repository<T>) {}

  async findAll(): Promise<T[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<T> {
    return this.repository.findOne(id);
  }

  async create(body: T): Promise<T> {
    return this.repository.save(this.repository.create(body));
  }

  async update(existing: T, data: T): Promise<T> {
    return this.repository.save(
      this.repository.create({
        ...existing,
        ...data,
      }),
    );
  }

  async remove(existing: T): Promise<T> {
    return this.repository.remove(existing);
  }

  getEntityName(): string {
    return this.repository.create().constructor?.name ?? 'Record';
  }
}

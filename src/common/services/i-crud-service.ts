export interface ICrudService<T> {
  findAll(): Promise<T[]>;
  findOne(id: number): Promise<T>;
  create(body: T): Promise<T>;
  update(existing: T, data: T): Promise<T>;
  remove(existing: T): Promise<T>;
  getEntityName(): string;
}

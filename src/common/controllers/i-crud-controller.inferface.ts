export interface ICrudCrontroller<T> {
  findAll(): Promise<T[] | void>;
  findOne(id: number): Promise<T | void>;
  create(body: any): Promise<T | void>;
  update(id: number, body: T): Promise<T | void>;
  remove(id: number): Promise<T | void>;
}

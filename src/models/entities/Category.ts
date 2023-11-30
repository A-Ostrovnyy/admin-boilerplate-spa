import Entity from './Entity';
import { Tag } from './Tag';
export class Category implements Entity {
  public id?: string;
  public name = '';
  public categoryId = '';
  public tagIds = [];
  public tags?: Tag[] = [];

  constructor(initData: Partial<Category>) {
    Object.assign(this, initData);
  }
}

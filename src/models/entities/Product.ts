import Entity from './Entity';
import { Tag } from './Tag';

export class Product implements Entity {
  public id?: string;
  public name = '';
  public categoryId = '';
  public description = '';
  public isHidden = false;
  public tagIds = [];
  public tags?: Tag[] = [];

  constructor(initData: Partial<Product>) {
    Object.assign(this, initData);
  }
}

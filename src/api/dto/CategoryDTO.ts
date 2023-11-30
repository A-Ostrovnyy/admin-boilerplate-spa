import { TagDTO } from './TagDTO';

export interface CategoryDTO {
  id?: string;
  name: string;
  categoryId?: string;
  category?: CategoryDTO;
  tags?: TagDTO[];
  tagIds?: string[];
}

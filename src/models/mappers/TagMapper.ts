import Mapper from './Mapper';
import { Tag } from '../../models/entities/Tag';
import { TagDTO } from '../../api/dto/TagDTO';
import { mapValueToInterface } from '../../utils/models';

export class TagMapper extends Mapper<Tag, TagDTO> {
  mapFromDTO(productDTO: TagDTO): Tag {
    return new Tag(<Partial<Tag>>productDTO);
  }

  mapToDTO(product: Tag): TagDTO {
    return mapValueToInterface(product) as TagDTO;
  }
}

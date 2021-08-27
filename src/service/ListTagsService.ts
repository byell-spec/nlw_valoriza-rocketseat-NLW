import { getCustomRepository } from 'typeorm';
import { TagsRepositories } from '../repositories/TagRepositories';
import { classToPlain } from "class-transformer";

class ListTagsService {
  async execute() {
    const tagsRepositories = getCustomRepository(TagsRepositories);

    const tags = tagsRepositories.find();

    return classToPlain(tags);
  }
}

export { ListTagsService };
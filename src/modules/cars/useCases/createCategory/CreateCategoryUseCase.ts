import { ICategoriesRepository } from '../../repositories/ICategoriesRepository';

interface IRequest {
  name: string;
  description: string;
}

export class CreateCategoryUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  execute({ description, name }: IRequest): void {
    const categoryAlreadyExists = this.categoriesRepository.findByName(name);

    console.log();

    if (categoryAlreadyExists) throw new Error('Category already exists.');

    this.categoriesRepository.create({
      description,
      name,
    });
  }
}

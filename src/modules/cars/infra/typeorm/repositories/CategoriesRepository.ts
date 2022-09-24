import { getRepository, Repository } from 'typeorm';

import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from '@modules/cars/repositories/ICategoriesRepository';

import { Category } from '../entities/Category';

// DTO => Data transfer object: um objeto que faz transferência de dados entre camadas, classes. ICategoriesRepository, e.g.

// singleton: criar apenas uma instância de uma classe que será uma instância global da aplicação

class CategoriesRepository implements ICategoriesRepository {
  // private categories: Category[];
  private repository: Repository<Category>;

  // eslint-disable-next-line no-use-before-define
  /*
  private static INSTANCE: CategoriesRepository;

  public static getInstance(): CategoriesRepository {
    if (!CategoriesRepository.INSTANCE) {
      CategoriesRepository.INSTANCE = new CategoriesRepository();
    }

    return CategoriesRepository.INSTANCE;
  }
  */

  constructor() {
    // this.categories = [];
    this.repository = getRepository(Category);
  }

  async create({ name, description }: ICreateCategoryDTO): Promise<void> {
    const category = this.repository.create({ description, name });
    /* const category = new Category();

    Object.assign(category, {
      name,
      description,
      created_at: new Date(),
    }); */

    await this.repository.save(category);
  }

  async list(): Promise<Category[]> {
    return this.repository.find();
  }

  async findByName(name: string): Promise<Category> {
    // Select * from categories where name = "name" limit 1
    return this.repository.findOne({ name });
  }
}

export { CategoriesRepository };

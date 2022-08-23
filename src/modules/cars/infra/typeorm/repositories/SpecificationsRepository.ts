import { ICreateSpecificationDTO, ISpecificationsRepository } from '@modules/cars/repositories/ISpecificationsRepository';
import { getRepository, Repository } from 'typeorm';
import { Specification } from '../entities/Specification';

class SpecificationsRepository implements ISpecificationsRepository {
  private repository: Repository<Specification>;

  constructor() {
    this.repository = getRepository(Specification);
  }

  async create({ description, name }: ICreateSpecificationDTO): Promise<void> {
    const specification = this.repository.create({
      description,
      name,
    });

    await this.repository.save(specification);
  }

  async findByName(name: string): Promise<Specification> {
    return this.repository.findOne({
      name,
    });
  }
}

export { SpecificationsRepository };
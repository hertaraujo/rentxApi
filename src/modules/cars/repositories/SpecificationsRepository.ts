import {
  ICreateSpecificationDTO,
  ISpecificationsRepository,
} from './ISpecificationsRepository';

class SpecificationRepository implements ISpecificationsRepository {
  create({ description, name }: ICreateSpecificationDTO): void {
    throw new Error('Method not implemented.');
  }
}

export { SpecificationRepository };

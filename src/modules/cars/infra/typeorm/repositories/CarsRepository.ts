import { getRepository, Repository } from 'typeorm';

import { ICreateCarDTO } from '@modules/cars/dtos/ICreateCarDTO';
import { ICarsRepository } from '@modules/cars/repositories/ICarsRepository';

import { Car } from '../entities/Car';

export class CarsRepository implements ICarsRepository {
  private repository: Repository<Car>;

  constructor() {
    this.repository = getRepository(Car);
  }

  async create({
    category_id,
    license_plate,
    brand,
    daily_rate,
    description,
    fine_amount,
    name,
    specifications,
    id,
  }: ICreateCarDTO): Promise<Car> {
    const car = this.repository.create({
      category_id,
      license_plate,
      brand,
      daily_rate,
      description,
      fine_amount,
      name,
      specifications,
      id,
    });

    await this.repository.save(car);

    return car;
  }

  async findByLicensePlate(license_plate: string): Promise<Car> {
    return this.repository.findOne({ license_plate });
  }

  async findAvailable(
    brand?: string,
    category_id?: string,
    name?: string
  ): Promise<Car[]> {
    const carsQuery = this.repository
      .createQueryBuilder('c')
      .where('available = :available', { available: true });

    if (brand) carsQuery.andWhere('c.brand = :brand', { brand });
    if (name) carsQuery.andWhere('c.name = :name', { name });
    if (category_id)
      carsQuery.andWhere('c.category_id = :category_id', { category_id });

    return carsQuery.getMany();
  }

  async findById(id: string): Promise<Car> {
    return this.repository.findOne(id);
  }
}

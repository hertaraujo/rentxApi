import { CarsRepositoryInMemory } from '@modules/cars/repositories/in-memory/CarsRepositoryInMemory';

import { ListAvailableCarsUseCase } from './ListAvailableCarsUseCase';

let listAvailableCarsUseCase: ListAvailableCarsUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe('List Cars', () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    listAvailableCarsUseCase = new ListAvailableCarsUseCase(
      carsRepositoryInMemory
    );
  });

  it('should be able to list all availble cars', async () => {
    const car = await carsRepositoryInMemory.create({
      name: 'BMW',
      brand: 'brand',
      daily_rate: 40,
      category_id: 'category_id',
      description: 'description',
      fine_amount: 100,
      license_plate: 'TET-1234',
    });

    const cars = await listAvailableCarsUseCase.execute({});

    expect(cars).toEqual([car]);
  });

  it('should be able to list all availble cars by brand', async () => {
    const car = await carsRepositoryInMemory.create({
      name: 'car',
      brand: 'Tbrand',
      daily_rate: 40,
      category_id: 'category_id',
      description: 'description',
      fine_amount: 100,
      license_plate: 'TET-1234',
    });

    const cars = await listAvailableCarsUseCase.execute({
      brand: 'Tbrand',
    });

    expect(cars).toEqual([car]);
  });

  it('should be able to list all availble cars by name', async () => {
    const car = await carsRepositoryInMemory.create({
      name: 'car',
      brand: 'Tbrand',
      daily_rate: 40,
      category_id: 'category_id',
      description: 'description',
      fine_amount: 100,
      license_plate: 'TET-1234',
    });

    const cars = await listAvailableCarsUseCase.execute({
      name: 'car',
    });

    expect(cars).toEqual([car]);
  });

  it('should be able to list all availble cars by category_id', async () => {
    const car = await carsRepositoryInMemory.create({
      name: 'car',
      brand: 'Tbrand',
      daily_rate: 40,
      category_id: '12345',
      description: 'description',
      fine_amount: 100,
      license_plate: 'TET-1234',
    });

    const cars = await listAvailableCarsUseCase.execute({
      category_id: '12345',
    });

    expect(cars).toEqual([car]);
  });
});

import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateCarUseCase } from './CreateCarUseCase';

export class CreateCarController {
  async handler(req: Request, res: Response): Promise<Response> {
    const {
      name,
      brand,
      daily_rate,
      category_id,
      description,
      fine_amount,
      license_plate,
    } = req.body;

    const createCarUseCase = container.resolve(CreateCarUseCase);

    const car = await createCarUseCase.execute({
      name,
      brand,
      daily_rate,
      category_id,
      description,
      fine_amount,
      license_plate,
    });

    return res.status(201).json(car);
  }
}

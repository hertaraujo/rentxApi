import { Router } from 'express';

import { createSpecificationController } from '../modules/cars/useCases/createSpecification';

const specificationRoutes = Router();

specificationRoutes.post('/', (req, res) =>
  createSpecificationController.handler(req, res)
);

export { specificationRoutes };

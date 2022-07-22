import { Router } from 'express';
import multer from 'multer';

import { createCategoryController } from '../modules/cars/useCases/createCategory';
import { importCategoryController } from '../modules/cars/useCases/importCategory';
import { listCategoriesController } from '../modules/cars/useCases/listCategories';
// import { PostgresCategoriesRepository } from '../modules/cars/repositories/PostgresCategoriesRepository';

const categoriesRoutes = Router();

const upload = multer({ dest: './tmp' });

categoriesRoutes.post('/', (req, res) =>
  createCategoryController.handler(req, res)
);

categoriesRoutes.get('/', (req, res) =>
  listCategoriesController.handler(req, res)
);

categoriesRoutes.post('/import', upload.single('file'), (req, res) =>
  importCategoryController.handler(req, res)
);

export { categoriesRoutes };

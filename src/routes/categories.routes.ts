import { Router } from 'express';
import multer from 'multer';

// import createCategoryController from '../modules/cars/useCases/createCategory';
import { CreateCategoryController } from '../modules/cars/useCases/createCategory/CreateCategoryController';
import { ImportCategoryController } from '../modules/cars/useCases/importCategory/ImportCategoryController';
import { ListCategoriesController } from '../modules/cars/useCases/listCategories/ListCategoriesController';
// import { PostgresCategoriesRepository } from '../modules/cars/repositories/PostgresCategoriesRepository';

const categoriesRoutes = Router();

const upload = multer({ dest: './tmp' });

const createCategoryController = new CreateCategoryController();
const importCategoryController = new ImportCategoryController();
const listCategoriesController = new ListCategoriesController();

/* categoriesRoutes.post('/', (req, res) =>
  createCategoryController().handler(req, res)
); */

categoriesRoutes.post('/', createCategoryController.handler);

categoriesRoutes.get('/', listCategoriesController.handler);

categoriesRoutes.post(
  '/import',
  upload.single('file'),
  importCategoryController.handler
);

export { categoriesRoutes };

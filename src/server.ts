import express from 'express';

import { categoriesRoutes } from './routes/categories.routes';

const app = express();

app.use(express.json());

app.use('/categories', categoriesRoutes);

/* app.get('/', (req, res) => {
  return res.json({ message: 'Hello World' });
});

app.post('/courses', (req, res) => {
  const { name } = req.body;
  return res.json({ name });
}); */

app.listen(8000, () => console.log('Running!'));

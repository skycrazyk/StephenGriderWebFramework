import express from 'express';
import { router } from './routes/loginRoutes';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';
import { AppRouter } from './AppRouter';
import './controllers/LoginController';

const app = express();

app.use(cookieSession({ keys: ['sdfassajflkj'] }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(router);
app.use(AppRouter.getInstance());

app.listen(3000, () => {
  console.log('Listining on port 3000');
});

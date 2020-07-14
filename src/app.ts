import * as express from 'express';
import * as strongErrorHandler from 'strong-error-handler';
import { json } from 'body-parser';

import { userRouterFactory } from './controllers/userRouterFactory';
import { postRouterFactory } from './controllers/postRouterFactory';
import { authRouterFactory } from './controllers/authRouterFactory';

export const app = express();

app.use(json());

app.use(userRouterFactory());
app.use(postRouterFactory());
app.use(authRouterFactory());

app.use(strongErrorHandler({
  debug: true,
}));


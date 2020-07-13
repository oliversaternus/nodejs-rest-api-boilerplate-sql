import { Router } from 'express';
import { Post } from "./Post";
import autoCatch from '../tools/autocatch';

export const postRouterFactory = () => Router()

  .get('/posts', autoCatch(async (req, res, next) => {
    const users = await Post.findAll();
    res.json(users);
  }))

  .get('/posts/:id', autoCatch(async (req, res, next) => {
    const user = await Post.findByPk(req.params.id);
    user ? res.json(user) : next({ statusCode: 404 });
  }))

  .post('/posts', autoCatch(async (req, res, next) => {
    const user = await Post.create(req.body);
    res.json(user);
  }))

  .put('/posts/:id', autoCatch(async (req, res, next) => {
    const user = await Post.findByPk(req.params.id);
    await user.update(req.body);
    res.json(user);
  }));

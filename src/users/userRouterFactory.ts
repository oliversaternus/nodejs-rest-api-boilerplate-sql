import { Router } from 'express';
import { User } from './User';
import autoCatch from '../tools/autocatch';
import { Post } from '../posts/Post';

export const userRouterFactory = () => Router()

  .get('/users', autoCatch(async (req, res, next) => {
    const users = await User.findAll({ include: [{ model: Post }], attributes: { exclude: ['createdAt', 'updatedAt'] } });
    res.json(users);
  }))

  .get('/users/:id', autoCatch(async (req, res, next) => {
    const user = await User.findByPk(req.params.id);
    user ? res.json(user) : next({ statusCode: 404 });
  }))

  .post('/users', autoCatch(async (req, res, next) => {
    const user = await User.create(req.body);
    res.json(user);
  }))

  .put('/users/:id', autoCatch(async (req, res, next) => {
    const user = await User.findByPk(req.params.id);
    await user.update(req.body);
    res.json(user);
  }));

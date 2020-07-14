import { Router } from 'express';
import { Post } from "../models/Post";
import autoCatch from '../tools/autocatch';
import { autoVerifyUser } from '../tools/auth';

export const postRouterFactory = () => Router()

  .get('/posts', autoCatch(async (req, res, next) => {
    const users = await Post.findAll();
    res.json(users);
  }))

  .get('/posts/:id', autoCatch(async (req, res, next) => {
    const user = await Post.findByPk(req.params.id);
    user ? res.json(user) : next({ statusCode: 404 });
  }))

  .post('/posts', autoCatch(autoVerifyUser(async (req, res, currentUser, next) => {
    const user = await Post.create({ ...req.body, userId: currentUser.id });
    res.json(user);
  })));

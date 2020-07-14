import { Sequelize } from 'sequelize-typescript';
import * as path from "path";

import { User } from '../models/User';
import { Post } from '../models/Post';

export const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: path.join(__dirname, "../", "../", "data.db"),
  models: [User, Post],
});

import { sequelize } from './sequelize';
import { User } from '../models/User';
import * as hashJS from "hash.js";

export const init = async (options: { force: boolean }) => {
    await sequelize.sync({ force: options.force });
    options.force && await User.create({
        username: 'superAdmin',
        role: 'admin',
        email: 'admin@mail.com',
        password: hashJS.sha256().update('bananarama').digest("hex")
    });
};
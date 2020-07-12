import path from "path";
import { Sequelize } from "sequelize";
import UserModel from "./User";

const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: path.join(__dirname, "../", "../", "data.db"),
    logging: false
});

export const User = sequelize.define("user", UserModel);

export default sequelize;

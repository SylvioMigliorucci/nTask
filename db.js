import fs from "fs";
import path from "path";
import Sequelize from "sequelize";
import Tasks from "./models/tasks";
import Users from "./models/users";
import Produto from "./models/produto";
import Cart from "./models/cart";

let db = null;

module.exports = app => {
  if (!db) {
    const config = app.libs.config;
    const sequelize = new Sequelize(
      config.database,
      config.username,
      config.password,
      config.params
    );
    db = {
      sequelize,
      Sequelize,
      models: {Tasks, Users, Produto, Cart}
    };
    const dir = path.join(__dirname, "models");
    fs.readdirSync(dir).forEach(file => {
      const modelDir = path.join(dir, file);
      const model = sequelize.import(modelDir);
      db.models[model.name] = model;
    });
    Object.keys(db.models).forEach(key =>{
      if (db.models[key].hasOwnProperty('associate')){
        db.models[key].associate(db.models);
      }
    });
  //   Object.keys(db.models).forEach(key => {
  //     db.models[key].options.classMethods.associate(db.models);
  // });
  }
  return db;
};
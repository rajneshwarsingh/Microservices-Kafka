import fs from 'fs';
import path from 'path';
import { config } from '../config/default';
import { Sequelize, DataTypes, Op } from 'sequelize'; // Correct import
const basename = path.basename(__filename);
const key: string = process.env.NODE_ENV || 'development';
const { host, userName, password, database, dialect, port, logging } = config[key].db;
const db: any = {};

// Connection String
const sequelize = new Sequelize(database, userName, password, {
  host,
  dialect,
  port,
  logging,
});

try {
  sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

fs.readdirSync(__dirname)
  .filter((file: any) => {
    return file.indexOf('.') !== 0 && file !== basename && (file.slice(-3) === '.ts' || file.slice(-3) === '.js');
  })
  .forEach((file: any) => {
    const model = require(path.join(__dirname, file))(sequelize, DataTypes); // Use DataTypes instead of Sequelize.DataTypes
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName: any) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.DataTypes = DataTypes; // Adjust here as well
db.Op = Op; // Adjust for Sequelize.Op
export { db };

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');

let db = {};

// For running a local PostGres database named 'sola'
let sequelize = new Sequelize('sola', 'postgres', '',
  {
    host: 'localhost',
    dialect: 'postgres',
  });

// This checks for all .js files in the models folder and associates them here
fs
  .readdirSync(__dirname)
  .filter(file =>
    (file.indexOf('.') !== 0) &&
    (file !== 'index.js') &&
    (file.slice(-3) === '.js'))
  .forEach(file => {
    const model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;

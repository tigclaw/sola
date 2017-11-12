const postgres = require('pg');
const Sequelize = require('sequelize');

var sequelize = new Sequelize('sola', 'postgres', '', {
  host: 'localhost',
  dialect: 'postgres',
})

sequelize
  .authenticate()
  .then(() => {
    console.log('[Sqlize] connection success!');
  })
  .catch(err => {
    console.log('[Sqlize] connection error', err);
  });
  
const User = sequelize.define('user', {
  firstName: {
    type: Sequelize.STRING
  },
  lastName: {
    type: Sequelize.STRING
  }
});

// force: true will drop the table if it already exists
User.sync({force: true}).then(() => {
  // Table created
  return User.create({
    firstName: 'John',
    lastName: 'Hancock'
  });
});

// Set up Models in database


// module.exports.sequelize = sequelize;

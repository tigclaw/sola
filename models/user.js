// "use strict";
// 
// module.exports = function(sequelize, DataTypes) {
//   var User = sequelize.define("User", {
//     username: DataTypes.STRING
//   });
// 
//   User.associate = function(models) {
//     User.hasMany(models.Task);
//   }
// 
//   return User;
// };

const User = sequelize.define('user', {
  email: Sequelize.STRING,
  firstName: Sequelize.STRING,
  lastName: Sequelize.STRING,
  phoneNumber: Sequelize.STRING,
  gender: Sequelize.STRING,
  hometown: Sequelize.STRING,
  age: Sequelize.STRING,
  profession: Sequelize.STRING,
  isVerified: { Sequelize.BOOLEAN, allowNull: false, defaultValue: false },
})

export default User;
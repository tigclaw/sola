module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: DataTypes.STRING,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    gender: DataTypes.STRING,
    hometown: DataTypes.STRING,
    age: DataTypes.STRING,
    profession: DataTypes.STRING,
    isVerified: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false },
  });

  User.associate = (models) => {

  };

  return User;
};

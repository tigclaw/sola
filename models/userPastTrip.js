module.exports = (sequelize, DataTypes) => {
  const UserPastTrip = sequelize.define('userPastTrip', {
    destinationName: DataTypes.STRING,
  });

  UserPastTrip.associate = (models) => {
    UserPastTrip.belongsTo(models.User);
  };

  return UserPastTrip;
};

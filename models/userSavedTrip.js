module.exports = (sequelize, DataTypes) => {
  const UserSavedTrip = sequelize.define('userSavedTrip', {
    destinationName: DataTypes.STRING,
    savedSights: DataTypes.STRING, // to edit
    savedLodging: DataTypes.STRING, // to edit
    savedDining: DataTypes.STRING, // to edit
  });

  UserSavedTrip.associate = (models) => {
    UserSavedTrip.belongsTo(models.User);
  };

  return UserSavedTrip;
};

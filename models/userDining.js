module.exports = (sequelize, DataTypes) => {
  const UserDining = sequelize.define('userDining', {
    review: DataTypes.TEXT,
    diningApiId: DataTypes.STRING,
    isRecommended: DataTypes.STRING,
    safetyRating: DataTypes.INTEGER,
    isSoloFriendly: DataTypes.BOOLEAN,
    soloTravelTips: DataTypes.TEXT,
  });

  UserDining.associate = (models) => {
    UserDining.belongsTo(models.User);
  };

  return UserDining;
};

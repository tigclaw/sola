module.exports = (sequelize, DataTypes) => {
  const UserSight = sequelize.define('userSight', {
    review: DataTypes.TEXT,
    placeApiId: DataTypes.STRING,
    isRecommended: DataTypes.STRING,
    safetyRating: DataTypes.INTEGER,
    isSoloFriendly: DataTypes.BOOLEAN,
    soloTravelTips: DataTypes.TEXT,
  });

  UserSight.associate = (models) => {
    UserSight.belongsTo(models.User);
  };

  return UserSight;
};

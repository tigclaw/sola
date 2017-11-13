module.exports = (sequelize, DataTypes) => {
  const UserLodging = sequelize.define('userLodging', {
    review: DataTypes.TEXT,
    lodgingApiId: DataTypes.STRING,
    isRecommended: DataTypes.STRING,
    safetyRating: DataTypes.INTEGER,
    isSoloFriendly: DataTypes.BOOLEAN,
    soloTravelTips: DataTypes.TEXT,
  });

  UserLodging.associate = (models) => {
    UserLodging.belongsTo(models.User);
  };

  return UserLodging;
};

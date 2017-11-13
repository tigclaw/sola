module.exports = (sequelize, DataTypes) => {
  const UserCity = sequelize.define('userCity', {
    cityName: DataTypes.STRING,
    review: DataTypes.TEXT,
    isRecommended: DataTypes.STRING,
    safetyRating: DataTypes.INTEGER,
    isBus: DataTypes.BOOLEAN,
    isTrain: DataTypes.BOOLEAN,
    isSubway: DataTypes.BOOLEAN,
    isBike: DataTypes.BOOLEAN,
    isWalk: DataTypes.BOOLEAN,
    isCab: DataTypes.BOOLEAN,
    isCar: DataTypes.BOOLEAN,
    isTram: DataTypes.BOOLEAN,
    cityApiId: DataTypes.STRING,
  });

  UserCity.associate = (models) => {
    UserCity.belongsTo(models.interestCategory, {
      foreignKey: 'interestId',
    });
    UserCity.belongsTo(models.User);
  };

  return UserCity;
};


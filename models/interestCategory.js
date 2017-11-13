module.exports = (sequelize, DataTypes) => {
  const InterestCategory = sequelize.define('interestCategory', {
    destinationName: DataTypes.STRING,
  });

  InterestCategory.associate = (models) => {
    InterestCategory.belongsTo(models.User);
  };

  return InterestCategory;
};

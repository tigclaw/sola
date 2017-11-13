module.exports = (sequelize, DataTypes) => {
  const Friend = sequelize.define('Friend', {
    status: DataTypes.BOOLEAN,
  });

  Friend.associate = (models) => {
    Friend.belongsTo(models.User, {
      foreignKey: 'friendId',
    });
    Friend.belongsTo(models.User, {
      foreignKey: 'friendId',
    });
  };

  return Friend;
};

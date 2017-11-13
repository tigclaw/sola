module.exports = (sequelize, DataTypes) => {
  const Message = sequelize.define('message', {
    message: DataTypes.TEXT,
  });

  Message.associate = (models) => {
    Message.belongsTo(models.User);
  };

  return Message;
};

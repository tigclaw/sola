const Friend = sequelize.define('friend', {
  status: Sequelize.BOOLEAN,
})

// Set up associations/foreign keys. http://docs.sequelizejs.com/manual/tutorial/associations.html
Friend.belongsTo(User, {as: user}); //Adds userId as foreignKey referencing User
Friend.belongsTo(User, {as: friend});  //Adds friendId as foreignKey referencing User

export default Friend;

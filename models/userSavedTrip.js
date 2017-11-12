const UserSavedTrip = sequelize.define('userSavedTrip', {
  destinationName: Sequelize.STRING,
  savedSights: Sequelize.STRING,
  savedLodging: Sequelize.STRING,
  savedDining: Sequelize.STRING,
})

UserSavedTrip.belongsTo(User);

export default UserSavedTrip;

const UserPastTrip = sequelize.define('userPastTrip', {
  destinationName: Sequelize.STRING,
})

UserPastTrip.belongsTo(User);

export default UserPastTrip;

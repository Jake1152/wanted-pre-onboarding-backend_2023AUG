const sequelize = require('./database'); 

const User = sequelize.define('User', {
  email: {
    type: sequelize.Sequelize.STRING,
    unique: true,
    allowNull: false,
  },
  password: {
    type: sequelize.Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = User;

const Sequelize = require('sequelize');

const sequelize = new Sequelize('chat','root',null,{dialect:'mysql',host:'localhost'})

module.exports = sequelize;
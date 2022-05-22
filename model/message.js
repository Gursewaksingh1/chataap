const Sequelize = require('sequelize');
const sequelize = require('../connection');

const Message = sequelize.define('message',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey:true
    },
    message: {
        type:Sequelize.TEXT,
        allowNull:false,
    },
    receiverId: {
        type:Sequelize.INTEGER,
        allowNull:false,
    }
});

module.exports = Message;
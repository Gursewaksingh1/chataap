const Sequelize = require('sequelize');
const sequelize = require('../connection');

const User = sequelize.define('user',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull:false
    },
    name: {
        type:Sequelize.STRING,
        notNull: true,

        
    },
    email: {
        type:Sequelize.STRING,
        isEmail: true,
        notNull: true,
        
       

    },
    address:{
        type:Sequelize.STRING(100),
        
    
    },
    test:{
        type:Sequelize.CHAR.BINARY,
        
    }
})

module.exports = User;
'use strict'

var all = {
    sequelize:{
        username: 'root',
        password: '123456',
        database: 'papermaker',
        host: "localhost",
        dialect: 'mysql',
        define: {
            underscored: false,
            timestamps: true,
            paranoid: true
        }
    }
};

module.exports = all;
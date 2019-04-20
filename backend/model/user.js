var Sequelize = require('sequelize');
var sequelize = new Sequelize(
    'papermaker',    //数据库名
    'root',             //用户名
    '123456',             //密码
    {
        'dialect': 'mysql',
        'host': 'localhost',
        'port': 3306
    }
);

//定义表的模型
var User = sequelize.define('user', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        unique: true,
        autoIncrement:true
    },
    username: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    }
});
User.sync({force: false}); //创建表

module.exports = User;
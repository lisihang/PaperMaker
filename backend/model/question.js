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
var Question = sequelize.define('question', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        unique: true,
        autoIncrement:true
    },
    user: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    test: {
        type: Sequelize.TEXT,
        allowNull: false
    }
});
Question.sync({force: false}); //创建表

module.exports = Question;
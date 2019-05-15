'use strict';
module.exports = (sequelize, DataTypes) => {
  const question = sequelize.define('question', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        unique: true,
        autoIncrement:true
    },
    user: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    answer: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    subject: {
        type: DataTypes.STRING,
        allowNull: true
    },
    grade: {
        type: DataTypes.STRING,
        allowNull: true
    },
    type: {
        type: DataTypes.STRING,
        allowNull: true
    },
    difficulty: {
        type: DataTypes.STRING,
        allowNull: true
    },
    time: {
        type: DataTypes.STRING,
        allowNull: true
    },
    hot: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
  }, {});
  question.associate = function(models) {
    // associations can be defined here
  };
  return question;
};
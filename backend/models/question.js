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
    test: {
        type: DataTypes.TEXT,
        allowNull: false
    }
  }, {});
  question.associate = function(models) {
    // associations can be defined here
  };
  return question;
};
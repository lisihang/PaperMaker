'use strict';
module.exports = (sequelize, DataTypes) => {
  const paper = sequelize.define('paper', {
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
    question: {
        type: DataTypes.STRING,
        allowNull: false
    }
  }, {});
  paper.associate = function(models) {
    // associations can be defined here
  };
  return paper;
};
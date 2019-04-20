'use strict'

var config = require('../config');
var Sequelize = require('sequelize');
var db = {
    sequelize:new Sequelize(config.sequelize.database,config.sequelize.username,config.sequelize.password,config.sequelize)
};
db.Users = db.sequelize.import('../models/user.js');
db.questions = db.sequelize.import('../models/question.js');
db.papers = db.sequelize.import('../models/paper.js');
module.exports = db;
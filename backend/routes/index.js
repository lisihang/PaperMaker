var express = require('express');
var router = express.Router();

var User = require('../model/user');
var Question = require('../model/question');
var Paper = require('../model/paper');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.send('hello world')
})

router.get('/create', function(req, res, next) {
    var user = {
        username: 'admin',
        password: '123456'
    };
    User.create(user).then(function(msg){
        console.log(msg);
        res.redirect('/');
    });
})

module.exports = router;

var express = require('express');
var router = express.Router();

var models = require('../models');
var User = models.user;
var Question = models.question;
var Paper = models.paper;

var bodyParser = require("body-parser");

/* GET home page. */
router.get('/', function(req, res, next) {
    res.send('hello world')
})

/* 注册 */
router.post('/signup', bodyParser.json(), function(req, res, next)
{
    data = {};
    data['status'] = '';
    data['message'] = '';
    data['payload'] = {};
    User.findOne(
    {
        where:
        {
            username: req.body.username
        }
    }).then(function(result)
    {
        if (result == null)
        {
            User.create(
            {
                username: req.body.username,
                password: req.body.password
            }).then(function(result)
            {
                data['status'] = 'success';
                res.json(data);
            }).catch(function(err)
            {
                data['status'] = 'fail';
                data['message'] = err.message;
                res.json(data);
            });
        }
        else
        {
            data['status'] = 'fail';
            data['message'] = 'username already exists';
            res.json(data);
        }
    }).catch(function(err)
    {
        data['status'] = 'fail';
        data['message'] = err.message;
        res.json(data);
    });
});

/* 登录 */
router.post('/signin', bodyParser.json(), function(req, res, next)
{
    data = {};
    data['status'] = '';
    data['message'] = '';
    data['payload'] = {};
    User.findOne(
    {
        where:
        {
            username: req.body.username,
            password: req.body.password
        }
    }).then(function(result)
    {
        if (result == null)
        {
            data['status'] = 'fail';
            data['message'] = 'username or password wrong';
            res.json(data);
        }
        else
        {
            var token = Math.random().toString(36).substr(2);
            User.update(
            {
                token: token
            },
            {
                where:
                {
                    username: req.body.username
                }
            }).then(function(result)
            {
                data['status'] = 'success';
                data['payload']['token'] = token;
                res.json(data);
            }).catch(function(err)
            {
                data['status'] = 'fail';
                data['message'] = err.message;
                res.json(data);
            });
        }
    }).catch(function(err)
    {
        data['status'] = 'fail';
        data['message'] = err.message;
        res.json(data);
    });
});

/* 上传试题 */
router.post('/question', bodyParser.json(), function(req, res, next)
{
    data = {};
    data['status'] = '';
    data['message'] = '';
    data['payload'] = {};
    User.findOne(
    {
        where:
        {
            token: req.body.token
        }
    }).then(function(result)
    {
        if (result == null)
        {
            data['status'] = 'fail';
            data['message'] = 'wrong token';
            res.json(data);
        }
        else
        {
            Question.create(
            {
                user: result.id,
                content: req.body.payload.content,
                answer: req.body.payload.answer,
                subject: req.body.payload.subject,
                grade: req.body.payload.grade,
                type: req.body.payload.type,
                difficulty: req.body.payload.difficulty,
                time: req.body.payload.time,
                hot: 0
            }).then(function(result)
            {
                data['status'] = 'success';
                res.json(data);
            }).catch(function(err)
            {
                data['status'] = 'fail';
                data['message'] = err.message;
                res.json(data);
            });
        }
    }).catch(function(err)
    {
        data['status'] = 'fail';
        data['message'] = err.message;
        res.json(data);
    });
});

/* 获取试题 */
router.get('/question', function(req, res, next)
{
    data = {};
    data['status'] = '';
    data['message'] = '';
    data['payload'] = {};
    User.findOne(
    {
        where:
        {
            token: req.query.token
        }
    }).then(function(result)
    {
        if (result == null)
        {
            data['status'] = 'fail';
            data['message'] = 'wrong token';
            res.json(data);
        }
        else
        {
            Question.findAll(
            {
                where:
                {
                    subject: req.query.subject,
                    grade: req.query.grade,
                    type: req.query.type,
                    difficulty: req.query.difficulty,
                    time: req.query.time
                },
                order: [['hot', 'DESC']]
            }).then(function(result)
            {
                data['status'] = 'success';
                data['payload'] = result;
                res.json(data);
            }).catch(function(err)
            {
                data['status'] = 'fail';
                data['message'] = err.message;
                res.json(data);
            });
        }
    }).catch(function(err)
    {
        data['status'] = 'fail';
        data['message'] = err.message;
        res.json(data);
    });
});

module.exports = router;

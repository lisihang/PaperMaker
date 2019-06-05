var express = require('express');
var router = express.Router();

var models = require('../models');
var User = models.user;
var Question = models.question;
var Paper = models.paper;

var bodyParser = require("body-parser");

var paper = require('../src/paper');

var Sequelize = require('sequelize');
const Op = Sequelize.Op;

var MD5 = require('js-md5');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.send('hello world')
})

/* 注册 */
router.post('/signup', bodyParser.json(), function(req, res, next)
{
    var data = {};
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
            var str = Math.random().toString(36).substr(2);
            var password = MD5(req.body.password + str);
            User.create(
            {
                username: req.body.username,
                password: password,
                str: str
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
    var data = {};
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
            data['status'] = 'fail';
            data['message'] = 'username not exists';
            res.json(data);
        }
        else if (MD5(req.body.password + result.str) != result.password)
        {
            data['status'] = 'fail';
            data['message'] = 'password wrong';
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
    var data = {};
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

/* 组卷 */
router.post('/paper', bodyParser.json(), function(req, res, next)
{
    var data = {};
    data['status'] = '';
    data['message'] = '';
    data['payload'] = {};
    if (req.body.payload.ids.length == 0)
    {
        data['status'] = 'fail';
        data['message'] = 'no question ids';
        res.json(data);
    }
    else
    {
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
                var ids = req.body.payload.ids;
                var title = req.body.payload.title;
                paper.makePaper(title, ids, result.id, res);
            }
        }).catch(function(err)
        {
            data['status'] = 'fail';
            data['message'] = err.message;
            res.json(data);
        });
    }
});

/* 获取答案 */
router.post('/answer', bodyParser.json(), function(req, res, next)
{
    var data = {};
    data['status'] = '';
    data['message'] = '';
    data['payload'] = {};
    if (req.body.payload.ids.length == 0)
    {
        data['status'] = 'fail';
        data['message'] = 'no question ids';
        res.json(data);
    }
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
            var ids = req.body.payload.ids;
            var title = req.body.payload.title;
            paper.makeAnswer(title, ids, result.id, res);
        }
    }).catch(function(err)
    {
        data['status'] = 'fail';
        data['message'] = err.message;
        res.json(data);
    });
});

/* 获取上传过的试题 */
router.get('/upload', function(req, res, next)
{
    var data = {};
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
                    user: result.id
                }
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

/* 获取组过的试卷 */
router.get('/title', function(req, res, next)
{
    var data = {};
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
            Paper.findAll(
            {
                where:
                {
                    user: result.id
                }
            }).then(function(result)
            {
                data['status'] = 'success';
                data['payload'] = [];
                for (var i in result)
                {
                    var tmp = {};
                    tmp['id'] = result[i].id;
                    tmp['title'] = result[i].title;
                    data['payload'].push(tmp);
                }
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

/* 获取组过的试卷信息 */
router.get('/paper', function(req, res, next)
{
    var data = {};
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
            Paper.findOne(
            {
                where:
                {
                    id: req.query.id
                }
            }).then(function(result)
            {
                var ids = [];
                var s = result.question.split(' ');
                for (var i in s)
                    if (s[i] != '')
                        ids.push(parseInt(s[i]));
                Question.findAll(
                {
                    where:
                    {
                        id: {[Op.in]: ids}
                    },
                    order: ['type']
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

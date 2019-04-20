var express = require('express');
var router = express.Router();

var User = require('../models/user');
var Question = require('../models/question');
var Paper = require('../models/paper');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.send('hello world')
})

/* 添加user */
router.post('/add/user',function(req,res,next){
    console.log("+++++++++++++++++++++++");
    var saveUser = {
        name:req.body.username,
        password:req.body.password
    };

    return db.sequelize.transaction(function(t){
        console.log("+++++++++++++++++++");
        return User.create(saveUser,{
            transaction:t
        }).then(function(result){
            res.send(result);
        }).catch(function(err){
            console.log("发生错误：" + err);
        });
    })
});


/* 添加paper */
router.post('/add/paper',function(req,res,next){
    console.log("+++++++++++++++++++++++");
    var savePaper = {
        user:req.body.user,
        question:req.body.question
    };

    return db.sequelize.transaction(function(t){
        console.log("+++++++++++++++++++");
        return Paper.create(savePaper,{
            transaction:t
        }).then(function(result){
            res.send(result);
        }).catch(function(err){
            console.log("发生错误：" + err);
        });
    })
});

/* 添加question */
router.post('/add/question',function(req,res,next){
    console.log("+++++++++++++++++++++++");
    var saveQuestion = {
        user:req.body.user,
        question:req.body.test
    };

    return db.sequelize.transaction(function(t){
        console.log("+++++++++++++++++++");
        return Question.create(saveQuestion,{
            transaction:t
        }).then(function(result){
            res.send(result);
        }).catch(function(err){
            console.log("发生错误：" + err);
        });
    })
});

/* 删除user */
router.post('/delete/user',function(req,res,next){
    console.log("--------------------");
    return db.sequelize.transaction(function(t){
        console.log("--------------------");
        return User.destroy({
            where:{
                id:req.body.userid
            }
        },{
            transaction:t
        }).then(function(result){
            res.send(result);
        }).catch(function(err){
            console.log("发生错误：" + err);
        });
    })
});

/* 删除paper */
router.post('/delete/paper',function(req,res,next){
    console.log("--------------------");
    return db.sequelize.transaction(function(t){
        console.log("--------------------");
        return Paper.destroy({
            where:{
                id:req.body.paperid
            }
        },{
            transaction:t
        }).then(function(result){
            res.send(result);
        }).catch(function(err){
            console.log("发生错误：" + err);
        });
    })
});

/* 删除question */
router.post('/delete/question',function(req,res,next){
    console.log("--------------------");
    return db.sequelize.transaction(function(t){
        console.log("--------------------");
        return Question.destroy({
            where:{
                id:req.body.questionid
            }
        },{
            transaction:t
        }).then(function(result){
            res.send(result);
        }).catch(function(err){
            console.log("发生错误：" + err);
        });
    })
});

/* 查询user */
router.get('/get/user/:userid',function(req,res,next){
    return db.sequelize.transaction(function(t){
        return User.findOne({
            where:{
                id:req.params.userid
            }
        },{
            transaction:t
        }).then(function(result){
            res.send(result);
        }).catch(function(err){
            console.log("发生错误：" + err);
        });
    });
});

/* 查询paper */
router.get('/get/paper/:paperid',function(req,res,next){
    return db.sequelize.transaction(function(t){
        return Paper.findOne({
            where:{
                id:req.params.paperid
            }
        },{
            transaction:t
        }).then(function(result){
            res.send(result);
        }).catch(function(err){
            console.log("发生错误：" + err);
        });
    });
});

/* 查询question */
router.get('/get/question/:questionid',function(req,res,next){
    return db.sequelize.transaction(function(t){
        return Question.findOne({
            where:{
                id:req.params.questionid
            }
        },{
            transaction:t
        }).then(function(result){
            res.send(result);
        }).catch(function(err){
            console.log("发生错误：" + err);
        });
    });
});

/* 更新user/username */
router.post('/update/user/username',function(req,res,next){
    return db.sequelize.transaction(function(t){
        return User.update({
            username:req.body.username
        },{
           where:{
               id:req.body.userid
           }
        },{
            transaction:t
        }).then(function(result){
            res.send(result);
        }).catch(function(err){
            console.log("发生错误：" + err);
        });
    })
});

/* 更新user/password */
router.post('/update/user/password',function(req,res,next){
    return db.sequelize.transaction(function(t){
        return User.update({
            password:req.body.password
        },{
           where:{
               id:req.body.userid
           }
        },{
            transaction:t
        }).then(function(result){
            res.send(result);
        }).catch(function(err){
            console.log("发生错误：" + err);
        });
    })
});

/* 更新paper/user */
router.post('/update/paper/user',function(req,res,next){
    return db.sequelize.transaction(function(t){
        return Paper.update({
            user:req.body.user
        },{
           where:{
               id:req.body.paperid
           }
        },{
            transaction:t
        }).then(function(result){
            res.send(result);
        }).catch(function(err){
            console.log("发生错误：" + err);
        });
    })
});

/* 更新paper/question */
router.post('/update/paper/question',function(req,res,next){
    return db.sequelize.transaction(function(t){
        return Paper.update({
            question:req.body.question
        },{
           where:{
               id:req.body.paperid
           }
        },{
            transaction:t
        }).then(function(result){
            res.send(result);
        }).catch(function(err){
            console.log("发生错误：" + err);
        });
    })
});

/* 更新question/user */
router.post('/update/question/user',function(req,res,next){
    return db.sequelize.transaction(function(t){
        return Question.update({
            user:req.body.user
        },{
           where:{
               id:req.body.questionid
           }
        },{
            transaction:t
        }).then(function(result){
            res.send(result);
        }).catch(function(err){
            console.log("发生错误：" + err);
        });
    })
});

/* 更新question/test */
router.post('/update/question/test',function(req,res,next){
    return db.sequelize.transaction(function(t){
        return Question.update({
            test:req.body.test
        },{
           where:{
               id:req.body.questionid
           }
        },{
            transaction:t
        }).then(function(result){
            res.send(result);
        }).catch(function(err){
            console.log("发生错误：" + err);
        });
    })
});


module.exports = router;

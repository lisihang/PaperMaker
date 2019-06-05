const expect = require('chai').expect
const request = require('supertest')
const app = require('../app.js')
const db = require('../models');
const MD5 = require('js-md5');
var Sequelize = require('sequelize');
const Op = Sequelize.Op;

process.on('unhandledRejection', reason =>
{
    console.log(reason); // 打印"Hello, Fundebug!"
});

describe('app.js',function(){
    describe('GET /',function(){
        it('should response hello world',function(done){
            request(app)
            .get('/')
            .then(res => {
                // console.log(res.text)
                expect(res.text).to.equal('hello world')
                done()
            })
        })
    })

    describe('GET /users',function(){
        it('should response "respond with a resource"',function(done){
            request(app)
            .get('/users')
            .then(res => {
                // console.log(res.text)
                expect(res.text).to.equal('respond with a resource')
                done()
            })
        })
    })

    describe('POST /signup',function(){
        before(async function(){
            var str = Math.random().toString(36).substr(2);
            var password = MD5('111222' + str);
            await db.user.create({
                username: 'wzq',
                password: password,
                str: str
              })
            var str = Math.random().toString(36).substr(2);
            var password = MD5('333444' + str);
            await db.user.create({
                username: 'lsh',
                password: password,
                str: str
            })
        })
        after(async function(){
            await db.user.destroy({
                truncate: true,
                force: true
            })
        })
        it('should response "fail" and "username already exists"',function(done){
            request(app)
            .post('/signup')
            .send({username:'wzq',password:111222})
            // send是发送req的内容，query是传url的参数，set设置http请求的header
            .then(res => {
                expect(res.body.status).to.be.equal('fail')
                expect(res.body.message).to.be.equal('username already exists')
                done()
            })
        })
        it('should response "success"',function(done){
            request(app)
            .post('/signup')
            .send({username:'hahaha',password:123456})
            .then(res => {
                // db.user.findOne(
                // {
                //     where:
                //     {
                //         username: 'hahaha'
                //     }
                // }).then(function(result){
                //     if (result == null)
                //     {
                //         console.log(res.body.status)
                //         expect(res.body.status).to.be.equal('success')
                //     }
                //     else{
                //         expect(res.body.status).to.be.equal('fail')
                //         expect(res.body.message).to.be.equal('username already exists')
                //     }
                // })
                // 这种分情况判断有两点不好，一是对数据库进行查询，而请求的就是对数据库的修改，二是两种判断总有一个是错的，虽然通过了
                // 测试，但是命令行仍会给出警告：未处理的拒绝断言错误，所以不如自己设置数据库自己知道结果再测试
                expect(res.body.status).to.be.equal('success')
                done()
            })
        })
    })

    describe('POST /signin',function(){
        before(async function(){
            var str = Math.random().toString(36).substr(2);
            var password = MD5('111222' + str);
            await db.user.create({
                username: 'wzq',
                password: password,
                str: str
              })
            var str = Math.random().toString(36).substr(2);
            var password = MD5('333444' + str);
            await db.user.create({
                username: 'lsh',
                password: password,
                str: str
            })
        })
        after(async function(){
            await db.user.destroy({
                truncate: true,
                force: true
            })
        })
        it('should response "fail" and "username not exists"',function(done){
            request(app)
            .post('/signin')
            .send({username:'hahaha',password:123456})
            .then(res => {
                expect(res.body.status).to.be.equal('fail')
                expect(res.body.message).to.be.equal('username not exists')
                done()
            })
        })
        it('should response "fail" and "password wrong"',function(done){
            request(app)
            .post('/signin')
            .send({username:'wzq',password:123456})
            .then(res => {
                expect(res.body.status).to.be.equal('fail')
                expect(res.body.message).to.be.equal('password wrong')
                done()
            })
        })
        it('should response "success"',function(done){
            request(app)
            .post('/signin')
            .send({username:'lsh',password:333444})
            .then(res => {
                expect(res.body.status).to.be.equal('success')
                done()
            })
        })
    })

    describe('POST AND GET /question AND GET /upload',function(){
        var token;
        before(async function(){
            var str = Math.random().toString(36).substr(2);
            var password = MD5('111222' + str);
            await db.user.create({
                username: 'wzq',
                password: password,
                str: str
              })
        })
        after(async function(){
            await db.user.destroy({
                truncate: true,
                force: true
            })
            await db.question.destroy({
                truncate: true,
                force: true
            })
        })
        it('should response "success" signin',function(done){
            request(app)
            .post('/signin')
            .send({username:'wzq',password:111222})
            .then(res => {
                expect(res.body.status).to.be.equal('success')
                token = res.body.payload.token
                done()
            })
        })
        it('should response "fail" and "wrong token" post question',function(done){
            request(app)
            .post('/question')
            .send({token:token+'1',payload:{
                content: '1+1=__',
                answer: '2',
                subject: 'math',
                grade: '5',
                type: 'completion',
                difficulty: 'very easy',
                time: '2019-06'
            }})
            .then(res => {
                expect(res.body.status).to.be.equal('fail')
                expect(res.body.message).to.be.equal('wrong token')
                done()
            })
        })
        it('should response "success" post question 1',function(done){
            request(app)
            .post('/question')
            .send({token:token,payload:{
                content: '1+1=__',
                answer: '2',
                subject: 'math',
                grade: '5',
                type: 'completion',
                difficulty: 'very easy',
                time: '2019-06'
            }})
            .then(res => {
                expect(res.body.status).to.be.equal('success')
                done()
            })
        })
        it('should response "success" post question 2',function(done){
            request(app)
            .post('/question')
            .send({token:token,payload:{
                content: '9!=__',
                answer: '362880',
                subject: 'math',
                grade: '10',
                type: 'completion',
                difficulty: 'difficult',
                time: '2019-06'
            }})
            .then(res => {
                expect(res.body.status).to.be.equal('success')
                done()
            })
        })
        it('should response "success" post question 3',function(done){
            request(app)
            .post('/question')
            .send({token:token,payload:{
                content: '8-5=__',
                answer: '3',
                subject: 'math',
                grade: '5',
                type: 'completion',
                difficulty: 'very easy',
                time: '2019-06'
            }})
            .then(res => {
                expect(res.body.status).to.be.equal('success')
                done()
            })
        })
        it('should response "success" post question 4',function(done){
            request(app)
            .post('/question')
            .send({token:token,payload:{
                content: '小明有1只铅笔，用了1根，借给同学1根，还剩__根',
                answer: '1',
                subject: 'math',
                grade: '5',
                type: 'completion',
                difficulty: 'very easy',
                time: '2019-06'
            }})
            .then(res => {
                expect(res.body.status).to.be.equal('success')
                done()
            })
        })
        it('should response "fail" and "wrong token" get question',function(done){
            request(app)
            .get('/question')
            .query({
                token:token+1,
                subject: 'math',
                grade: '5',
                type: 'completion',
                difficulty: 'very easy',
                time: '2019-06'
            })
            .then(res => {
                expect(res.body.status).to.be.equal('fail')
                expect(res.body.message).to.be.equal('wrong token')
                done()
            })
        })
        it('should response "success" and payload get question',function(done){
            request(app)
            .get('/question')
            .query({
                token:token,
                subject: 'math',
                grade: '5',
                type: 'completion',
                difficulty: 'very easy',
                time: '2019-06'
            })
            .then(res => {
                // var payload
                expect(res.body.status).to.be.equal('success')
                db.question.findAll(
                    {
                        where:
                        {
                            subject: 'math',
                            grade: '5',
                            type: 'completion',
                            difficulty: 'very easy',
                            time: '2019-06'
                        },
                        order: [['hot', 'DESC']]
                    }).then(function(result)
                    {
                        // console.log(result)
                        // payload = result
                        expect(res.body.payload.length).to.be.equal(result.length)
                        for(var i in res.body.payload)
                        {
                            expect(res.body.payload[i]['id']).to.be.equal(result[i].dataValues['id'])
                        }
                        done()
                    })
            })
        })
        it('should response "fail" and "wrong token" get upload',function(done){
            request(app)
            .get('/upload')
            .query({token:token+'1'})
            .then(res => {
                console.log(res.body.status)
                expect(res.body.status).to.be.equal('fail')
                expect(res.body.message).to.be.equal('wrong token')
                done()
            })
        })
        it('should response "success" and payload get upload',function(done){
            request(app)
            .get('/upload')
            .query({token:token})
            .then(res => {
                expect(res.body.status).to.be.equal('success')
                db.user.findOne({
                    where:{
                        token: token
                    }
                }).then(function(result){
                    db.question.findAll(
                        {
                            where:
                            {
                                user: result.id
                            }
                        }).then(function(result)
                        {
                            expect(res.body.payload.length).to.be.equal(result.length)
                            for(var i in res.body.payload)
                            {
                                expect(res.body.payload[i]['id']).to.be.equal(result[i].dataValues['id'])
                            }
                            done()
                        })
                })
            })
        })
    })
    describe('POST /question AND POST /paper AND GET /title AND GET /paper',function(){
        var token;
        // var userid;
        before(async function(){
            var str = Math.random().toString(36).substr(2);
            var password = MD5('111222' + str);
            await db.user.create({
                username: 'wzq',
                password: password,
                str: str
              })
        })
        after(async function(){
            await db.user.destroy({
                truncate: true,
                force: true
            })
            await db.paper.destroy({
                truncate: true,
                force: true
            })
            await db.question.destroy({
                truncate: true,
                force: true
            })
        })
        it('should response "success" signin',function(done){
            request(app)
            .post('/signin')
            .send({username:'wzq',password:111222})
            .then(res => {
                expect(res.body.status).to.be.equal('success')
                token = res.body.payload.token
                db.user.findOne(
                    {
                        where:{
                            token: token
                        }
                    }
                ).then(function(result){
                    // userid = result.id
                    done()
                }).catch(function(err){
                    console.log(err.message)
                })
            })
        })
        it('should response "success" post question 1',function(done){
            request(app)
            .post('/question')
            .send({token:token,payload:{
                content: '1+1=__',
                answer: '2',
                subject: 'math',
                grade: '5',
                type: 'completion',
                difficulty: 'very easy',
                time: '2019-06'
            }})
            .then(res => {
                expect(res.body.status).to.be.equal('success')
                done()
            })
        })
        it('should response "success" post question 2',function(done){
            request(app)
            .post('/question')
            .send({token:token,payload:{
                content: '9!=__',
                answer: '362880',
                subject: 'math',
                grade: '10',
                type: 'completion',
                difficulty: 'difficult',
                time: '2019-06'
            }})
            .then(res => {
                expect(res.body.status).to.be.equal('success')
                done()
            })
        })
        it('should response "success" post question 3',function(done){
            request(app)
            .post('/question')
            .send({token:token,payload:{
                content: '8-5=__',
                answer: '3',
                subject: 'math',
                grade: '5',
                type: 'completion',
                difficulty: 'very easy',
                time: '2019-06'
            }})
            .then(res => {
                expect(res.body.status).to.be.equal('success')
                done()
            })
        })
        it('should response "success" post question 4',function(done){
            request(app)
            .post('/question')
            .send({token:token,payload:{
                content: '小明有1只铅笔，用了1根，借给同学1根，还剩__根',
                answer: '1',
                subject: 'math',
                grade: '5',
                type: 'completion',
                difficulty: 'very easy',
                time: '2019-06'
            }})
            .then(res => {
                expect(res.body.status).to.be.equal('success')
                done()
            })
        })
        it('should response "fail" and "wrong token" post paper',function(done){
            request(app)
            .post('/paper')
            .send({token:token+'1',payload:{
                ids: [1,2,3],
                title: 'paper1'
            }})
            .then(res => {
                expect(res.body.status).to.be.equal('fail')
                expect(res.body.message).to.be.equal('wrong token')
                done()
            })
        })
        it('should response "fail" and "no question ids"',function(done){
            request(app)
            .post('/paper')
            .send({token:token,payload:{
                ids: [],
                title: 'paper1'
            }})
            .then(res => {
                expect(res.body.status).to.be.equal('fail')
                expect(res.body.message).to.be.equal('no question ids')
                done()
            })
        })
        it('should response "success" post paper',function(done){
            request(app)
            .post('/paper')
            .send({token:token,payload:{
                ids: [1,2,3],
                title: 'paper1'
            }})
            .then(res => {
                expect(res.body.status).to.be.equal('success')
                done()
                // db.paper.findOne(
                //     {
                //         where:{
                //             user: userid,
                //             title: 'paper1'
                //         }
                //     }
                // ).then(function(result){
                //     console.log(result.question)
                //     var ids = [1,2,3]
                //     var s = "";
                //     for (var i in ids)
                //         s += ids[i].toString() + " ";
                //     expect(result.question).to.be.equal(s)
                //     done()
                // })
            })
        })
        it('should response "fail" and "wrong token" get title',function(done){
            request(app)
            .get('/title')
            .query({token:token+'1'})
            .then(res => {
                expect(res.body.status).to.be.equal('fail')
                expect(res.body.message).to.be.equal('wrong token')
                done()
            })
        })
        it('should response "success" get title',function(done){
            request(app)
            .get('/title')
            .query({token:token})
            .then(res => {
                expect(res.body.status).to.be.equal('success')
                db.user.findOne(
                    {
                        where:
                        {
                            token: token
                        }
                    }).then(function(result){
                        db.paper.findAll(
                            {
                                where:
                                {
                                    user: result.id
                                }
                            }).then(function(result)
                            {
                                var payload = []
                                for (var i in result)
                                {
                                    var tmp = {};
                                    tmp['id'] = result[i].id;
                                    tmp['title'] = result[i].title;
                                    payload.push(tmp)
                                }
                                console.log(payload)
                                expect(payload).to.deep.equal(res.body.payload)
                                done()
                            })
                        })
            })
        })
        it('should response "fail" and "wrong token" get paper',function(done){
            request(app)
            .get('/paper')
            .query({token:token+'1',id:1})
            .then(res => {
                expect(res.body.status).to.be.equal('fail')
                expect(res.body.message).to.be.equal('wrong token')
                done()
            })
        })
        it('should response "success" and get paper',function(done){
            request(app)
            .get('/paper')
            .query({token:token,id:1})
            .then(res => {
                expect(res.body.status).to.be.equal('success')
                db.paper.findOne(
                    {
                        where:
                        {
                            id: 1
                        }
                    }).then(function(result)
                    {
                        var ids = [];
                        var s = result.question.split(' ');
                        for (var i in s)
                            if (s[i] != '')
                                ids.push(parseInt(s[i]));
                        db.question.findAll(
                        {
                            where:
                            {
                                id: {[Op.in]: ids}
                            },
                            order: ['type']
                        }).then(function(result)
                        {
                            expect(res.body.payload.length).to.be.equal(result.length)
                            for(var i in res.body.payload)
                            {
                                expect(res.body.payload[i]['id']).to.be.equal(result[i].dataValues['id'])
                            }
                            done()
                        })
                        
                    })
            })
        })
    })
    describe('POST /answer AND POST /question',function(){
        var token;
        before(async function(){
            var str = Math.random().toString(36).substr(2);
            var password = MD5('111222' + str);
            await db.user.create({
                username: 'wzq',
                password: password,
                str: str
              })
        })
        after(async function(){
            await db.user.destroy({
                truncate: true,
                force: true
            })
            await db.question.destroy({
                truncate: true,
                force: true
            })
        })
        it('should response "success" signin',function(done){
            request(app)
            .post('/signin')
            .send({username:'wzq',password:111222})
            .then(res => {
                expect(res.body.status).to.be.equal('success')
                token = res.body.payload.token
                done()
            })
        })
        it('should response "success" post question 1',function(done){
            request(app)
            .post('/question')
            .send({token:token,payload:{
                content: '1+1=__',
                answer: '2',
                subject: 'math',
                grade: '5',
                type: 'completion',
                difficulty: 'very easy',
                time: '2019-06'
            }})
            .then(res => {
                expect(res.body.status).to.be.equal('success')
                done()
            })
        })
        it('should response "success" post question 2',function(done){
            request(app)
            .post('/question')
            .send({token:token,payload:{
                content: '9!=__',
                answer: '362880',
                subject: 'math',
                grade: '10',
                type: 'completion',
                difficulty: 'difficult',
                time: '2019-06'
            }})
            .then(res => {
                expect(res.body.status).to.be.equal('success')
                done()
            })
        })
        it('should response "success" post question 3',function(done){
            request(app)
            .post('/question')
            .send({token:token,payload:{
                content: '8-5=__',
                answer: '3',
                subject: 'math',
                grade: '5',
                type: 'completion',
                difficulty: 'very easy',
                time: '2019-06'
            }})
            .then(res => {
                expect(res.body.status).to.be.equal('success')
                done()
            })
        })
        it('should response "success" post question 4',function(done){
            request(app)
            .post('/question')
            .send({token:token,payload:{
                content: '小明有1只铅笔，用了1根，借给同学1根，还剩__根',
                answer: '1',
                subject: 'math',
                grade: '5',
                type: 'completion',
                difficulty: 'very easy',
                time: '2019-06'
            }})
            .then(res => {
                expect(res.body.status).to.be.equal('success')
                done()
            })
        })
        it('should response "fail" and "wrong token"',function(done){
            request(app)
            .post('/answer')
            .send({token:token+'1',payload:{
                ids: [1,2,3],
                title: 'paper1'
            }})
            .then(res => {
                expect(res.body.status).to.be.equal('fail')
                expect(res.body.message).to.be.equal('wrong token')
                done()
            })
        })
        it('should response "fail" and "no question ids"',function(done){
            request(app)
            .post('/answer')
            .send({token:token,payload:{
                ids: [],
                title: 'paper1'
            }})
            .then(res => {
                expect(res.body.status).to.be.equal('fail')
                expect(res.body.message).to.be.equal('no question ids')
                done()
            })
        })
        it('should response "success"',function(done){
            request(app)
            .post('/answer')
            .send({token:token,payload:{
                ids: [1,2,3],
                title: 'paper1'
            }})
            .then(res => {
                expect(res.body.status).to.be.equal('success')
                done()
            })
        })
    })
})
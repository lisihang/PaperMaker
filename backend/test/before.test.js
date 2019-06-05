const db = require('../models');
const MD5 = require('js-md5');
var str = Math.random().toString(36).substr(2);
var password = MD5('111222' + str);
db.user.create(
{
    username: 'wzq',
    password: password,
    str: str
}).then(function(result){
    console.log('insert user wzq')
    // console.log(result)
}).catch(function(err){
    console.log(err.message)
})

var str = Math.random().toString(36).substr(2);
var password = MD5('333444' + str);
db.user.create(
{
    username: 'lsh',
    password: password,
    str: str
}).then(function(result){
    console.log('insert user lsh')
    // console.log(result)
}).catch(function(err){
    console.log(err.message)
})
const db = require('../models')
db.user.destroy({
    truncate: true,
    force: true
}).then(function(result){
    console.log('destroy user')
    // console.log(result)
}).catch(function(err){
    console.log(err.message)
})
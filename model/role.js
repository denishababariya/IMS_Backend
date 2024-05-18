const mongoose = require('mongoose')

var roleSchema = new mongoose.Schema({
    rolename : {
        type:String,
    }
})


module.exports = mongoose.model('role',roleSchema);
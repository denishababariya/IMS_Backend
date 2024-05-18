const mongoose = require('mongoose')

var statusSchema = new mongoose.Schema({
    status : {
        type:String,
    }
})


module.exports = mongoose.model('status',statusSchema);
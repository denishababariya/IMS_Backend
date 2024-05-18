const mongoose = require('mongoose')

var courseSchema = new mongoose.Schema({
    course : {
        type:String,
    }
})


module.exports = mongoose.model('course',courseSchema);
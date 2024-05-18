const mongoose = require('mongoose')

var branchSchema = new mongoose.Schema({
    branchname : {
        type:String,
    }
})


module.exports = mongoose.model('branch',branchSchema);
const mongoose = require('mongoose')

var refSchema = new mongoose.Schema({
    referencename : {
        type:String,
    }
})


module.exports = mongoose.model('reference',refSchema);
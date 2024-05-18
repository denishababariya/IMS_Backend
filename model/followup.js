const mongoose = require('mongoose')

var followupSchema = new mongoose.Schema({
    f_reason : {
        type:String,
    },
    f_date:{
        type:String,
    },
    f_by:{
        type:String, 
    },
    inq_id:{
        type : mongoose.Schema.Types.ObjectId,
        ref:"inquiry"
    }
})


module.exports = mongoose.model('followup',followupSchema);
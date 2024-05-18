

const mongoose = require('mongoose')

var inquerySchema = new mongoose.Schema({
    branch_id : {
        type : mongoose.Schema.Types.ObjectId,
        ref:"branch"
    },
    email:{
        type:String,
    },
    name:{
        type:String
    },
    contact:{
        type:String
    },
    course_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"course"
    },
    joindate:{
        type:String
    },
    ref_id:{
        type : mongoose.Schema.Types.ObjectId,
        ref:"reference" 
    },
    ref_by:{
        type : String,
    },
    inq_by:{
        type : mongoose.Schema.Types.ObjectId,
        ref:"role"
    },
    status:{
        type : mongoose.Schema.Types.ObjectId,
        ref:"status"
    },
    status_date:{
        type:String,
    },
    inq_date:{
        type:String
    },
    verified: {
        type: Boolean,
        default: false
    }

})


module.exports = mongoose.model('inquery',inquerySchema);
const mongoose = require('mongoose');

const adminschema = new mongoose.Schema({
    name:{
        type:String,
    },
    email:{
        type:String,
    },
    password:{
        type:String,
    },
    role:{
        type : mongoose.Schema.Types.ObjectId,
        ref:"role"
    },
    branch_id:{
        type : mongoose.Schema.Types.ObjectId,
        ref:"branch"
    },
    contact:{
        type:String,
    },
    image:{
        type:String,
    },
    token:{
        type:String,
    }

})
module.exports = mongoose.model('admin',adminschema);
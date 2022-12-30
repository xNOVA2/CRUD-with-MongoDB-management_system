const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstname:{
        type:String,
        require:true,
    },
    lastname:{
        type:String,
        require:true,
    },
    address:{
        type:String,
        require:true,
    }
   
})

module.exports = mongoose.model('user',UserSchema);
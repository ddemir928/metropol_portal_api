const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema ({
    
    name : {
        type: String,
        required: true  
    },
    surname : {
        type: String,
        required: true  
    },
    nickname: {
        type:String,
        unique: true ,
        required: true
    },
    email:{
        type:String,
        unique: true },
    password: String,
    role_id:Schema.Types.ObjectId,
    department_id: Schema.Types.ObjectId,
    image_url:String,
    createdAt : {
        type: Date, 
        default :Date.now
    },
    modifiedAt : {
        type: Date,
        
    }
});

module.exports = mongoose.model('user',UserSchema);

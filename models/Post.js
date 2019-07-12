const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema ({
    
    title : {
        type: String,
        //required: true  ,
        maxlength:255
    },
    subtitle : {
        type: String,
        //required: true,
        maxlength: 255 
    },
    description: String,
   
    post_type_id: String,
    user_id:Schema.Types.ObjectId,
    department_id: Schema.Types.ObjectId,
    category_id: Schema.Types.ObjectId,
    image_url:String,
    createdAt : {
        type: Date,
        default :Date.now
    },
    modifiedAt : {
        type: Date,
        
    },
    post_url: String
});

module.exports = mongoose.model('post',PostSchema);

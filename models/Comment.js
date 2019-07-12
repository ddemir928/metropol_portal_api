const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema ({
    
    
    user_id:Schema.Types.ObjectId,
    message: {
        type:String,
        required: true,
        maxlength: 255,
    },
    parent_id: Schema.Types.ObjectId,
    image_url:String,
    createdAt : {
        type: Date,
        default :Date.now
    }
});

module.exports = mongoose.model('comment',CommentSchema);

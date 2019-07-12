const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Post_LikeSchema = new Schema ({
    
    post_id:Schema.Types.ObjectId,
    user_id:Schema.Types.ObjectId,
    createdAt : {
        type: Date,
        default :Date.now
    },
    isLiked: Boolean
});

module.exports = mongoose.model('post_like',Post_LikeSchema);

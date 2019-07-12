const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Post_HitSchema = new Schema ({
    
    post_id:Schema.Types.ObjectId,
    user_id:Schema.Types.ObjectId,
    createdAt : {
        type: Date,
        default :Date.now
    }
});

module.exports = mongoose.model('post_hit',Post_HitSchema);

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Post_TypeSchema = new Schema ({
    
    name : {
        type: String,
        required: true  
    }
    
});

module.exports = mongoose.model('post_type',Post_TypeSchema);

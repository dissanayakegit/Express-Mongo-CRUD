const mongoos = require('mongoose');

const PostSchema = mongoos.Schema({
    title: {
        type: String,
        require: true
    },
    description:{
        type: String,
        require: true
    },
    date:{
        type: Date,
        default:Date.now
    }

});

module.exports = mongoos.model('Posts',PostSchema);
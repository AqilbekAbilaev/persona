const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    pwd: {
        type: String,
        required: true
    },
    is_admin: {
        type: Boolean,
        default: false
    },
    usrname: String,
    is_blocked: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('User', userSchema);
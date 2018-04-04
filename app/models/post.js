// load the things we need
var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

var postSchema = mongoose.Schema({
    email: { type: String, lowercase: true, trim: true },
    name: { type: String, trim: true },
    header: { type: String, trim: true },
    body: { type: String, trim: true }
});

module.exports = mongoose.model('Post', userSchema);
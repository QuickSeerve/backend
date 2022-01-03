const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username: {type: String},
    firstname: {type: String, required: true},
    lastname: {type: String, required: true},
    usertype: {type: String, default: 'Default User'},
    password: {type: String},
    email:{type: String}
}, {timestamps: true})

module.exports = mongoose.model('User', userSchema);
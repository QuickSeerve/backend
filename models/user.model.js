const mongoose = require('mongoose');
const serviceSelected = mongoose.Schema({
    serviceType: {type: String},
    professional_ID: {type: String},
    your_location: {type: String},
})

const userSchema = mongoose.Schema({
    username: {type: String},
    firstname: {type: String, required: true},
    lastname: {type: String, required: true},
    usertype: {type: String, default: 'Default User'},
    password: {type: String},
    email:{type: String},
    serviceSelected: {serviceSelected}
}, {timestamps: true})

module.exports = mongoose.model('User', userSchema);
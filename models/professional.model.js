const mongoose = require('mongoose');
const orderDetails = mongoose.Schema({
    username: {type: String},
    user_location: {type: String}
})

const professionalUser = mongooe.Schema({
    username: {type: String, required: true},
    firstname: {type: String},
    lastname: {type: String},
    email: {type: String, required: true},
    phonenumber: {type: String},
    password: {type: String, require: true},
    orderDetails: {orderDetails}
}, {timestamp: true})


const ProfUser = mongoose.model('ProfUser', professionalUser);
module.exports = ProfUser;
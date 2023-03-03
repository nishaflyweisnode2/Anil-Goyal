const mongoose = require('mongoose');


const webUser = mongoose.Schema({
    phone: {
        type: Number, 
        unique: true, 
        length: 10
    }, 
    email: {
        type: String, 
        unique: true
    }, 
    otp: {
        type: String
    }
}, { timestamps: true})

const WebUser = mongoose.model('webuser', webUser);

module.exports = WebUser
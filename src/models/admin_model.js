const mongoose = require('mongoose');


const adminSchema = mongoose.Schema({
    name: {
        type: String,
    }, 
    email: {
        type: String
    }, 
    password: {
        type: String
    }
});

const admin = mongoose.model('admin', adminSchema);

module.exports = admin;

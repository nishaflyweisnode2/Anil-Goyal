const mongoose = require('mongoose');


const userSchema = mongoose.Schema({

    firstname: {
        type: String, 
        required: true
    },
    lastname: {
        type: String, 
        required: true
    }, 
    mobile: {
        type: Number, 
        required: true, 
        unique: true
    }, 
    aadhaarNumber : {
        type: String, 
        unique: true,
        required: true
    }, 
    email: {
        type: String, 
        unique: true, 
        required: true
    }, 
    password: {
      type: String, 
      required : true
    },
    address : {
        type: String, 
        required : true
    }, 
    role: {
        type: String, 
        default: "customer",
    },
    resetPasswordToken: {
        type: String,
        default: null,
    },
    resetPasswordExpires: {
        type: Date,
        default: null
    }
} ,{ timestamps: true })

const User = mongoose.model('users', userSchema);

module.exports = User;
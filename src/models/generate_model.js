const mongoose = require('mongoose');

const CreatepartnerID = mongoose.Schema({
    partnerId : {
        type: String,
        require: true,
        unique: true
    }, 
    Name: {
        type: String, 
        require: true, 
    }, 
    father: {
        type: String
    }, 
    mother: {
        type: String
    }, 
    Members: {
        type: String
    },
    mobile: {
        type: Number, 
        require: true
    }, 
    email: {
        type: String, 
        require: true
    },
    address: {
        type: String,
    },
    adhaarNumber: {
        type: String, 
        require: true
    },
    pancard: {
        type: Number, 
        require: true
    },
    licenseNumber: {
        type: String, 
        require: false
    }, 
    adhaarImage: {
        type: String,
    },
    panImage: {
        type: String
    },
    Id: {
        type: String
    }, 
    bankDetails : {
        type: String, 

    }, 
    lightbill: {
        type: String, 
        require: true
    }, 
    kyc: {
        type: String, 
        require: true
    }
    
    
}, { timestamps: true})

const LabourtoAdmin = mongoose.model('labourPartner', CreatepartnerID);

module.exports = LabourtoAdmin
const mongoose = require('mongoose');

const setting = mongoose.Schema({
    payroll: {
        type: Boolean,
        default: false
    }, 
    salesorder: {
        type: Boolean,
        default: false
    },
    dateformat: {
        type: String
    }, 
    decimalpalce: {
        type: String
    }, 
    quotesNumber: {
        type: Number
    }, 
    orderNmber: {
        type: String
    }, 
    invoiceNumber : {
        type: String
    }, 
    terms: {
        type: String
    }, 
    unitMeasurment: {
        type: Boolean, 
        default: true
    },
    supplierCode: {
        type: Boolean,
        default: true
    },
    salesreturn : {
        type: Boolean,
        default: false
    }, 
    salesreturndate: {
        type: String
    }, 
    purchaseReturn : {
        type: Boolean, 
        default: false
    },
    Auth: {
        type: Boolean, 
        default: false,
    }, 
    fingerPrint: {
        type: Boolean,
        default: false
    }
})

const UserSetting= mongoose.model('usersettinges', setting);

module.exports = UserSetting
const mongoose = require('mongoose');


const MediaInvoice = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'users',
        require: true
    },
    invoiceNo : {
        type: String
    }, 
    date: {
        type: String
    }, 
    amount : {
        type: String
    }, 
    item : {
        type:String
    }, 
    discount : {
        type: String
    }, 
    totalamoumt : {
        type: String
    }, 
    tax: {
        type: String
    }, 
    doc: {
        type: String
    }
}, { timestamps: true});

const mediaInvoice = mongoose.model('mediainvoice', MediaInvoice);

module.exports = mediaInvoice
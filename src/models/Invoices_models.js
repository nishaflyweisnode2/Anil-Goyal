const mongoose = require('mongoose');


const invoiceSchema = mongoose.Schema({
    appName: {
        type: String, 
        require: true
    }, 
    name : {
        type : String , 
        require : true
    } ,
    amount : {
        type: Number,
        required: true, 
    }, 
    address: {
        type: String, 
        required : true,
    }, 
    Mobile: {
        type: Number, 
    }, 
    date: {
        type: Date
    }, 
    GrandTotal: {
        type: Number
    }, 
    Status: {
        type: String
    },
    productName: [], 
    price: [], 
    quantity: [], 
    total: [],

})



const Invoice = mongoose.model('invoice', invoiceSchema); 

module.exports = Invoice
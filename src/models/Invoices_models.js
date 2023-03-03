const mongoose = require('mongoose');


const invoiceSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'users',
        require: false
    },
    AckNo: {
        type: String
    },
    AckDt: {
        type: String
    },
    Irn: {
        type: String
    },
    SignedInvoice: {
        type: String
    },
    SignedQRCode: {
        type: String
    },
    EwbValidTill: {
        type: String
    },
    EwbNo: {
        type: String,
    },
    EwbDt: {
        type: String
    },
    QRCodeUrl: {
        type: String,
    },
    EinvoicePdf: {
        type: String
    },
    // appName: {
    //     type: String, 
    //     require: true
    // }, 
    Status: {
        type: String
    },
    requestId: {
        type: String
    },
    // name : {
    //     type : String , 
    //     require : true
    // } ,
    // amount : {
    //     type: Number,
    //     required: true, 
    // }, 

    // address: {
    //     type: String, 
    //     required : true,
    // }, 
    // Mobile: {
    //     type: Number, 
    // }, 
    // date: {
    //     type: Date
    // }, 
    // GrandTotal: {
    //     type: Number
    // }, 
    // Status: {
    //     type: String
    // },
    // invoiceNo : {
    //     type: String
    // },
    // productName: [], 
    // price: [], 
    // quantity: [], 
    // total: [],


},  {timestamps: true} )



const Invoice = mongoose.model('invoice', invoiceSchema); 

module.exports = Invoice
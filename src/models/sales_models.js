const mongoose = require('mongoose');


const salesSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.ObjectId,
        ref: "users",
        required: true,
    },
    productId: {
        type: mongoose.Schema.ObjectId,
        ref: 'product',
        required: true
    },
    totalSales: {
        type: Number,
    },
    name: {
        type: String,
    },
    salesNumber: {
        type: Number,
    },
    salesType: {
        type: String
    },
    revison: {
        type: String
    },
    date: {
        type: Date
    },
    remark: {
        type: String
    },
    amount: {
        type: Number
    }, 
    due: {
        type: Number,
        default: 0
    }, 
    status: {
        type: String
    }, 
    discount: {
        type: String
    }, 
    tax: {
        type: String
    },


}, {timestrap: true});

const sales = mongoose.model('sale', salesSchema);

module.exports = sales;
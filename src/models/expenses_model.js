const mongoose = require('mongoose');


const expensesSchema = mongoose.Schema({
    category : {
        type: String
    }, 
    amount : {
        type: Number
    },
    split: {
        type: Boolean,
        default: false
    }, 
    paymentMethod: {
        type: String, 
        default : "UPI", 
        enum: ['cash', "UPI", "CASH", "UPI"]
    }, 
    transactionDate : {
        type: Date, 
    }, 
    description: {
        type: String
    }, 
    status: {
        type: String, 
        default: "Unpaid", 
        enum: ["paid", "Unpaid"]
    }, 
    billerName: {
        type: String
    }
}, { timestamps: true})

const expenses = mongoose.model('expense', expensesSchema);
module.exports = expenses;
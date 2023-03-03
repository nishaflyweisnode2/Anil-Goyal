const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    productName: {
        type: String
    }, 
    quantity : {
        type: Number, 
    }, 
    unitprice: {
        type: String
    }, 
    amount: {
        type: String
    }, 
}, { timestamps: true})

const product = mongoose.model('product', productSchema);

module.exports = product;
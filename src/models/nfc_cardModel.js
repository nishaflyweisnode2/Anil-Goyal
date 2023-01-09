const mongoose = require("mongoose");


const NFCModel = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: "users",
        require: true
    },
    name: {
        type: String, 
        require: false
    }, 
    card: {
        type: Number,
        require: false
    }, 
    month: {
        type: Number, 
        require: false
    }, 
    year: {
     type: Number, 
     require: false
    }, 
    cvv: {
        type: Number, 
        require: false
    }

}, {timestrap: true})

const nfcCard  = mongoose.model('card', NFCModel);

module.exports = nfcCard
const { default: mongoose } = require("mongoose");




const quote = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        'ref': "users",
        required: true
    },
    qnoteNo : {
        type: String
    }, 
    version : {
        type: String
    }, 
    Qdate : {
        type: String
    }, 
    account  : {
        type: String
    }
}, {timestrap: true})


const quotes = mongoose.model('quote', quote);

module.exports = quotes



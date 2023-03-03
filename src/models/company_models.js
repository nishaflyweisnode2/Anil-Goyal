const mongoose = require('mongoose');

const companySchema = mongoose.Schema({
    name: {
        type: String
    }, 
    email: {
        type: String
    }, 
    mobile: {
        type: String
    }, 
    password: {
        type: String
    }, 
    country: {
        type: String
    }, 
    state: {
        type: String
    }
})


module.exports = mongoose.model('comapny', companySchema)
const mongoose = require('mongoose');


// (Business name , aadhar number , business address , busniess registration number , business gst number )

const businessSchema = mongoose.Schema({
    Name: {
        type: String,
        required: [true, "  Business must have a name"],
      },
    
      businessaddress: {
        type: String,
        required: [true, "business address  Name is required!"],
      },
    
      aadhaarNumber: {
        type: Number,
        required: [true, "Aadharr  Number is required!"],
        unique: true,
      },
    
      busniessnumber: {
        type: String,
        required: [true, "Busniess registration number  is required"],
      },
    
      gst: {
        type: String
      },
      logo: {
        type: String
      }
}, { timestamps: true})

const busniess  = mongoose.model('busniess', businessSchema);

module.exports = busniess ; 
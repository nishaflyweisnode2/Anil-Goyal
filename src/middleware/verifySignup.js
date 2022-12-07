
const emailVailditor = require('deep-email-validator');
const User = require('../models/user_models');


var emailRegex = /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;

function isEmailValid(email) {
    if (!email)
        return false;

    if(email.length>254)
        return res.status(400).send({
            message: "Please provide a valid email address.",
            // reason: validators[reason].reason
          });

    var valid = emailRegex.test(email);
    if(!valid)
         return res.status(400).send({
            message: "Please provide a valid email address.",
            // reason: validators[reason].reason
          })

    // Further checking of some things regex can't handle
    var parts = email.split("@");
    if(parts[0].length>64)
    return res.status(400).send({
        message: "Please provide a valid email address.",
        // reason: validators[reason].reason
      });

    var domainParts = parts[1].split(".");
    if(domainParts.some(function(part) { return part.length>63; }))
    return res.status(400).send({
        message: "Please provide a valid email address.",
        // reason: validators[reason].reason
      });

    return true;
}

exports.validationSignUp = async(req, res, next) => {
    if (!req.body.firstname) {
        return res.status(400).send({
            message: "Failed ! first name is required"
        })
    }

    if (!req.body.lastname) {
        return res.status(400).send({
            message: "Failed ! lastname is required "
        })
    }

    if(!req.body.mobile){
        return res.status(400).send({
            message: "Faild ! Mobile Number is required "
        })
    }

    if(req.body.mobile){
        const mobile = req.body.mobile;

        console.log(mobile)
        if(mobile.toString().length != 10){
            return  res.status(400).send({message:"Faild ! Mobile Number is not valid "})
        }
    }

    //Check Email Valid 
    if(req.body.email){
     isEmailValid(req.body.email)
    }

    if(req.body.aadhaar ){
        const Aadhaar = req.body.aadhaar;
        if(Aadhaar.toString().length != 12){
        return res.status(400).send({
            message: "Faild  !  Aadhaar Number is not Vaild "
        })
    }
    }

    if (!req.body.email) {
        return res.status(400).send({
            message: "Failed ! Email is Requied"
        })
    }
   if(!req.body.password){
    return res.status(400).send({
        message: "Faild ! Password is Required "
    })
   }
   

    var user = await User.findOne({ email: req.body.email });

    if (user != null) {
        return res.status(400).send({
            message: "Failed ! Email already exist  "
        })
    }

   

    var user = await User.findOne({ mobile: req.body.mobile });

    if (user != null) {
        return res.status(400).send({
            message: "Failed ! Mobile  is already used "
        })
    }

    var user = await User.findOne({ aadhaarNumber: req.body.aadhaar });

    if (user != null) {
        return res.status(400).send({
            message: "Failed ! Aadhaar   is already used  "
        })
    }



    next();
}
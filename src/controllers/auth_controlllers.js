const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs')
const async = require('async');
const nodemailer = require('nodemailer')
const crypto = require('crypto');
const User = require('../models/user_models');


exports.signup = async(req,res) =>{
    try{
    const data = {
        lastname: req.body.lastname, 
        firstname: req.body.firstname, 
        mobile: req.body.mobile, 
        email: req.body.email, 
        password : bcrypt.hashSync(req.body.password, 8),
        aadhaarNumber : req.body.aadhaar , 
        address: req.body.address,
        role: req.body.role,
        image: req.body.image
    }
    console.log(data)
    
 const  details =   await User.create(data);
    res.status(200).send({details : details._id});
    }catch (err){
        console.log(err);
        res.status(400).send({message: err.message});
    }
}


exports.signin = async (req,res) => {
    try{
    const userDetails = await User.findOne({email: req.body.email});
    console.log(userDetails)
    if(!userDetails){
       return  res.status(401).send({message: "Email is not register "});
    }else{
        const isPasswordValid = bcrypt.compareSync(req.body.password , userDetails.password );
        if(!isPasswordValid){
             return  res.status(401).send({message: "Password not match "})
        }
        const token = jwt.sign({id: userDetails._id}, process.env.SECRET,{
            expiresIn: "1d"
        })
        console.log(token);
        res.status(200).json({
            accesstoken : token,
            userID: userDetails._id
        })
    }
   
}catch(err){
    console.log(err);
    res.status(400).send({message: err.message});
}
}


exports.UpdateUser = async(req,res) => {
    try{
        const UserData   = await User.findByIdAndUpdate({_id: req.params.id},{
            lastname: req.body.lastname, 
            firstname: req.body.firstname, 
            mobile: req.body.mobile, 
            email: req.body.email, 
            address: req.body.address,
            image: req.body.image
        })
        console.log(UserData);
        res.status(200).json({message: " User  Data is Updated "})
    }catch(err){
        console.log(err);
        res.status(400).json({message: err.message})
    }
}



exports.cuestomerCout = async(req,res) => {
    try{
    const cuestomerData = await User.find({role: "cuestomer"})
    console.log(cuestomerData.length);
    res.status(200).json({
        message:    `Total Cuestomer ${cuestomerData.length}`
    })
    }catch(err){
        console.log(err);
        res.status(400).json({
            message: err.message
        })
    }

}


exports.supplierCout = async(req,res) => {
    try{
    const cuestomerData = await User.find({role: "supplier"})
    console.log(cuestomerData.length);
    res.status(200).json({
        message:    `Total Supplier ${cuestomerData.length}`
    })
    }catch(err){
        console.log(err);
        res.status(400).json({
            message: err.message
        })
    }

}

exports.getByID = async(req,res) => {
    try{
        const result = await User.findById({_id: req.params.id})
        res.status(200).json({
            message: "ok",
            result: result
        })
    }catch(err){
        console.log(err);
        res.status(400).json({
            message: err.message
        })
    }
}

exports.GetAllSuplier = async(req,res) => {
    try{
const userData = await User.find({role: "supplier"})
res.status(200).json({
    details: userData
})
    }catch(err){
        console.log(err);
    }
}


exports.GetAllSuplier = async(req,res) => {
    try{
const userData = await User.find({role: "cuestomer"})
res.status(200).json({
    details: userData
})
    }catch(err){
        console.log(err);
    }
}


exports.ForgetPassword = (req,res) => {
    try{
        async.waterfall([
            function(done) {
              crypto.randomBytes(20, (err, buf) => {
                const token = buf.toString('hex');
                console.log(token)
                done(err, token);
              });
            },
            function(token, done) {
              User.findOne({ email: req.body.email }, (err, user) => {
                if (!user) {
                 return  res.status(201).json({
                    message: "No account with that email address exists"
                 })
                 // return res.redirect('/forgot');
                }
                user.resetPasswordToken = token;
                user.resetPasswordExpires = Date.now() + 3600000; // 1 hour
                user.save((err) => {
                  done(err, token, user);
                });
              });
            },
            function(token, user, done) {
              const transporter = nodemailer.createTransport({
                service: 'Gmail',
                auth: {
                  user: "Vyaparkhata22@gmail.com",
                  pass: 'alfdphpgkaigmcpn'
                }
              });
              const mailOptions = {
                to: user.email,
                from: "Vyaparkhata22@gmail.com",
                subject: 'Password Reset',
                text: `You are receiving this because you (or someone else) have requested the reset of the password for your account.
                Please click on the following link, or paste this into your browser to complete the process:
                https://honey-goyal-website.vercel.app/forgetPassword
                ${token}
                If you did not request this, please ignore this email and your password will remain unchanged.`
              };
              transporter.sendMail(mailOptions, (err) => {
                console.log('success', `An email has been sent to ${user.email} with further instructions.`);
                done(err, 'done');
              });
            }
          ], (err) => {
            if (err){
                console.log(err);
                return next(err);

            }
            res.status(200).json({
                message: "mail sent"
            })
          });
    }catch(err){
        console.log(err);
        res.status(400).json({
            message: "not ok ",
            error: err.message
        })
    }
}


exports.ResetPasword = async(req,res) => {
    try{
        if(!req.headers.authorization){
            return res.status(200).json({
               message: "Reset Token is Required "
            })
        }
        const auth= req.headers.authorization;
 const token  = auth.split(' ')[1];
 const result = await User.findOne({resetPasswordToken: token});
 if(!result){
    return res.status(200).json({
        message: "Token is Expires "
    })
 }
 result.password = bcrypt.hashSync(req.body.password, 9);
 result.save();
 res.status(200).json({
    message: "Password is Reset "
 })
    }catch(err){
        console.log(err);
    }
}
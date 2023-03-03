const OTP = require('otp-generators')
const jwt = require('jsonwebtoken')
const customers = require('../models/user_models');
const sales = require('../models/sales_models');
const product = require('../models/product_model');
const User = require('../models/web_user_models');

const { create } = require('../models/user_models');


exports.getCuestomer = async(req,res) => {
    try{
    const data = await customers.find({role: "cuestomer"});
    res.status(200).json({
        details: data
    })
    }catch(err){
        console.log(err);
        res.status(400).json({
            message: err.message
        })
    }
}


exports.getSupplier = async(req,res) => {
    try{
    const data =  await sales.find();
    console.log(data)
    res.status(200).json({
        details: data
    })
    }catch(err){
        console.log(err);
        res.status(400).json({
            message: err.message
        })
    }
}


exports.SalesData = async(req,res) =>{
    try{
    const data = await sales.find();
    res.status(200).json({
        details: data
    })
    }catch(err){
        console.log(err);
        res.status(400).json({
            message: err.message
        })
    }
}

exports.SalesDataOpen = async(req,res) => {
    try{
    const data = await sales.find({status: req.params.status});
    res.status(200).json({
        details: data
    })
    }catch(err){
        console.log(err);
        res.status(400).json({
            message: err.message
        })
    }
}

exports.Signup = async(req,res) => {
    try{
    const data = User.find({
        $and: [
            {phone: req.body.phone}, 
            {email: req.body.email}
        ]
    })
    console.log(data)
    if((await data).length === 0 ){
        const otp = OTP.generate(4, { alphabets: false, upperCase: false, specialChar: false });
        const Data = {
            phone: req.body.phone, 
            email: req.body.email, 
            otp: otp
        }
        const newuser = await User.create(Data);
        return res.status(200).json({
            details: newuser
        })
    }else{
        return res.status(500).json({
            message: "Email and phone number already register "
        })
    }
    }catch(err){
        console.log(err);
        res.status(400).json({
            message: err.message
        })
    }
}

exports.login = async(req,res) => {
    try{
        const UserData = await User.findOne({phone: req.body.phone})
        const userDetails = await User.findOne({email: req.body.email});
        console.log(userDetails)
        if(!userDetails ||!UserData){
           return  res.status(401).send({message: "Email or phoneis not register "});
        }
            const token = jwt.sign({id: UserData._id ||  userDetails._id}, process.env.SECRET,{
                expiresIn: "1d"
            })
            console.log(token);
            res.status(200).json({
                accesstoken : token,
                data: UserData,
                data : userDetails
            })
    }catch(err){
        console.log(err);
        res.status(200).json({
            message: err.message
        })
    }
}


exports.verifyOtp = async(req,res) => {
    try{
    const data = await User.findOne({otp: req.body.otp});
    if(!data){
        return res.status(200).json({
            message: "Invalid Otp"
        })
    }
    res.status(200).json({
        message: "Login Done"
    })
    }catch(err){
        console.log(err);
        res.status(400).json({
            message: err.message
        })
    }
}

exports.getAllProduct = async(req,res) => {
    try{
        const productData = await product.find();
        res.status(200).json({data: productData})
        }catch(err){
            console.log(err);
            res.status(400).json({message: err.message});
        }
}
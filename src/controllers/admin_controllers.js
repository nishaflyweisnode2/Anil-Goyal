const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const admin = require('../models/admin_model');
const user = require('../models/user_models');
const sales = require('../models/sales_models')



exports.CreateAdmin = async(req,res) => {
    try{
    const data = {
        name: req.body.name, 
        email: req.body.email, 
        password: bcrypt.hashSync(req.body.password, 8)
    }
    console.log(data);
    const adminsignup = await admin.create(data);
    console.log(adminsignup);
    res.status(200).json({message: "Done", details : adminsignup})
}catch(err){
    console.log(err);
    res.status(400).json({message: err.message});
}
}



exports.signIn = async(req,res) =>{
try{
   const adminDetails = await admin.find({email: req.body.email});
   console.log(adminDetails);
   if(adminDetails.length ==0){
    res.status(400).json({message: "Email is not register for admin "})
   }else{
    const isPasswordValid = bcrypt.compareSync(req.body.password, adminDetails[0].password);
    if(!isPasswordValid){
     res.status(401).json({message: "Password is not Match retry "})
    }
    const token = jwt.sign({id: adminDetails[0]._id}, process.env.SECRET, {
     expiresIn: "1d"
    })
    res.status(200).json({accessToken : token});
   }
  
}catch(err){
    res.status(400).json({message: err.message});
}
}





exports.GetAllSuplier = async(req,res) => {
    try{
const userData = await user.find({role: "supplier"})
res.status(200).json({
    details: userData
})
    }catch(err){
        console.log(err);
    }
}

exports.GetAllCuestomer = async(req,res) => {
    try{
const userData = await user.find({role: "cuestomer"})
res.status(200).json({
    details: userData
})
    }catch(err){
        console.log(err);
    }
}


exports.GetAllSales = async(req,res) => {
    try{
    const data = await sales.find();
    res.status(200).json({details: data})
    }catch(err){
        res.status(400).json({message: err.message})
    }
}
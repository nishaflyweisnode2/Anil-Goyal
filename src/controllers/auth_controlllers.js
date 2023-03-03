const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs')

const user = require('../models/user_models');


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
        role: req.body.role
    }
    console.log(data)
    
 const  details =   await user.create(data);
    res.status(200).send({details : details._id});
    }catch (err){
        console.log(err);
        res.status(400).send({message: err.message});
    }
}


exports.signin = async (req,res) => {
    try{
    const userDetails = await user.findOne({email: req.body.email});
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
        const UserData   = await user.findByIdAndUpdate({_id: req.params.id},{
            lastname: req.body.lastname, 
            firstname: req.body.firstname, 
            mobile: req.body.mobile, 
            email: req.body.email, 
            address: req.body.address,
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
    const cuestomerData = await user.find({role: "cuestomer"})
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
    const cuestomerData = await user.find({role: "supplier"})
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


exports.GetAllSuplier = async(req,res) => {
    try{
const userData = await user.find({role: "cuestomer"})
res.status(200).json({
    details: userData
})
    }catch(err){
        console.log(err);
    }
}



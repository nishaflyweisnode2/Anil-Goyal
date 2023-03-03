const bcrypt = require('bcryptjs')
const comapny = require('../models/company_models');


exports.AddCompany = async(req,res) => {
    try{
    if(!req.body.name && !req.body.email && !req.body.mobile && !req.body.password && !req.body.country && !req.body.state){
        return res.status(401).json({
            message: "All Filds are required"
        })
    }
    const data = {
        name:req.body.name, 
        email: req.body.email,
        mobile: req.body.mobile,
        password:bcrypt.hashSync(req.body.password, 8), 
        country: req.body.country,
        state: req.body.state
    }
    const Data = await comapny.create(data);
    res.status(200).json({
        message: "ok",
        data: Data
    })
    }catch(err){
        console.log(err);
        res.status(400).json({
            message: err.message
        })
    }
}

// exports.CompanyLogin = async(req,res) => {
//     try{
//     if(!req.body.email && !req.body.password){
//         return res.status(500).json({
//             message: "Email or password required  "
//         })
//     }
//     const data = await comapny.findOne({email: req.body.email});
//     if(!data){
//     return res.status(401).json({
//         message: "Email not registerd yet "
//     })
//     }
//     const isPassword = await comapny
//     }catch(err){
//         console.log(err);
//         res.status(400).json({
//             message: err.message
//         })
//     }
// }
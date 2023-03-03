const { default: axios } = require('axios');
const busniess = require('../models/business_model');
const Business = require('../models/business_model');



exports.addBusniessDetails = async(req,res) => {
    try{
    const data = {
        Name: req.body.Name,
        businessaddress: req.body.businessaddress,
        aadhaarNumber:req.body.aadhaarNumber,
        busniessnumber: req.body.busniessnumber,
        gst: req.body.gst
    }
    const Data = await axios({
        method: "post", 
        url: "https://commonapi.mastersindia.co/oauth/access_token", 
        data: {
            "username":"hunnygoyal789@gmail.com",
            "password": "Masters@123",
            "client_id":"LHJLsVnxUIyoaJgMSV",
            "client_secret":"Z0He404Llhmlc18a4ZGpptRb",
            "grant_type":"password"
        }
    })
    console.log(Data)
    const header = {
        Authorization: Data.data.token_type +" " + Data.data.access_token,
        "client_id":"LHJLsVnxUIyoaJgMSV",
    }
    console.log(header)
    const verifyGst = await axios({
        method: "get", 
        url: `https://commonapi.mastersindia.co/commonapis/searchgstin?gstin=${req.body.gst}`,
        headers: {
            Authorization: "Bearer " + Data.data.access_token,
            "client_id":"LHJLsVnxUIyoaJgMSV",
        }
    })
    console.log(verifyGst.data)
    if(verifyGst.data.error == true){
        return res.status(500).json({
            message: verifyGst.data
        })
    }else{
    console.log(data);
   const details = await Business.create(data);
   console.log(details);
    res.status(200).json({
      details: details._id,
      verify: verifyGst.data
    })
}
}catch(err){
    console.log(err);
    res.status(400).send({message: err.message});
}
}

exports.getBusniessDetails = async(req,res) => {
    try{
    const details = await busniess.findById({_id: req.params.id});
    if(!details){
        res.status(201).json({message: "No Busniess added here fir this ID "})
    }else{
        console.log(details);
        res.status(200).json({
            details: details
        })
    }
   
}catch(err){
    console.log(err);
    res.status(400).send({message: err.message});
}
}


exports.updateBusniessDetails = async(req,res) => {
    console.log(req.body);
    const data = req.body;
    await Business.updateOne({_id: req.params.id}, data, (err, response) => {
        if(err){
            console.log(err);
            res.status(400).send({message: err.message})
        }
        res.status(200).send({
            details: response
        })
    })
}

exports.DeleteBusinessDetails = async (req,res) =>{
    try {
    await Business.findByIdAndDelete({_id: req.body.id})
    res.status(200).send({message: "Business Deleted "})
    }catch(err){
        console.log(err);res.status(400).send({message: err.message});
    }
}



exports.getBusniessDetailsAll = async(req,res) => {
    try{
    const details = await busniess.find();
    if(!details){
        res.status(201).json({message: "No Busniess added here fir this ID "})
    }else{
        console.log(details);
        res.status(200).json({
            details: details
        })
    }
   
}catch(err){
    console.log(err);
    res.status(400).send({message: err.message});
}
}



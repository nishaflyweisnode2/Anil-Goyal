const busniess = require('../models/business_model');
const Business = require('../models/business_model');



exports.addBusniessDetails = async(req,res) => {
    try{
    const data = {
        Name: req.body.Name,
        businessaddress: req.body.businessaddress,
        aadhaarNumber:req.body.aadhaarNumber,
        busniessnumber: req.body.businessaddress,
        gst: req.body.gst
    }
    console.log(data);
    const details = await Business.create(data);
    console.log(details);
    res.status(200).json({
        details: details._id
    })
}catch(err){
    console.log(err);
    res.status(400).send({message: err.message});
}
}

exports.getBusniessDetails = async(req,res) => {
    try{
    const details = await busniess.findById({_id: req.params.id});
    console.log(details);
    res.status(200).json({
        details: details
    })
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






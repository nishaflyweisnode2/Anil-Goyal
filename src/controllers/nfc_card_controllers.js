const card = require('../models/nfc_cardModel');


exports.AddCard = async(req,res) => {
    try{
        if(!req.body.userId){
            return res.status(501).json({
                message: "UserId is required "
            })
        }
    const data = {
        userId: req.body.userId,
        name: req.body.name, 
        card: parseInt(req.body.cardNumber),
        month: parseInt(req.body.month),
        year: parseInt(req.body.year),
        cvv:  parseInt(req.body.cvv)
    }
    const Data = await card.create(data);
    res.status(200).json({
        success: true,
        message: Data
    })
    }catch(err)
    {
        res.status(400).json({
            message: err.message
        })
    }
}


exports.UpdateCard = async(req,res) => {
    try{
        if(!req.params.id){
            return res.status(501).json({
                message: "Id  is required "
            })
        }
    const Data = await card.findByIdAndUpdate({_id: req.params.id}, {
        name: req.body.name, 
        card: parseInt(req.body.cardNumber),
        month: parseInt(req.body.month),
        year: parseInt(req.body.year),
        cvv:  parseInt(req.body.cvv)
    } ,{new: true},);
    res.status(200).json({
        success: true,
        message: Data
    })
    }catch(err)
    {
        res.status(400).json({
            message: err.message
        })
    }
}

exports.getCardByUserId = async(req,res) => {
    try{
    if(!req.params.id){
        return res.status(500).json({
            message: "UserId is require"
        })
    }else{
    const data  = await card.findOne({userId: req.params.id});
    res.status(200).json({
        details: data
    })
}
    }catch(err){
        res.status(200).json({
            message: err.message
        })
    }

}

exports.DeleteCard = async(req,res) => {
    try{
    await card.findByIdAndDelete({_id: req.params.id});
    res.status(200).json({
        message: "Card is Deleted "
    })
    }catch(err){
        res.status(400).json({
            message: err.message
        })
    }
}
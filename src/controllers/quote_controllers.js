const quotes = require('../models/Quotes');



exports.AddQuotes = async(req,res) => {
    try{
        if(!req.body.userId){
            return res.status(500).json({
                message: "User ID os Required "
            })
        }
        const data = {
            userId: req.body.userId,
            qnoteNo: req.body.quotes, 
            version : req.body.version, 
            Qdate: new Date(req.body.qdate), 
            account: req.body.account
        }
        const Data = await quotes.create(data);
        res.status(200).json({
            message: "Added ", 
            data : Data  
        })
    }catch(err){
        res.status(400).json({message: err.message})
    }
}

exports.getQuotes = async(req,res) => {
    try{
        const data = await quotes.find();
        res.status(200).json({
            message: "All Details ", 
            data : data 
        })
    }catch(err){
        res.status(400).json({message: err.message})
    }
}


exports.getById = async(req,res) => {
    try{
    const Id = req.params.id;
    const data = await quotes.findById(Id);
    res.status(200).json({
        data: data
    })
    }catch(err){
        console.log(err);
        res.status(400).json({
            message: err.message
        })
    }
}

exports.updateQuotes = async(req,res) => {
    try{
    await quotes.findByIdAndUpdate({_id: req.params.id}, {
            qnoteNo: req.body.quotes, 
            version : req.body.version, 
            qdate: req.body.qdate, 
            account: req.body.account
    });
    res.status(200).json({
        message: "Quotes Updated "
    })
    }catch(err){
        res.status(400).json({message: err.message})
    }
}

exports.DeleteQuotes = async(req,res) => {
    try{
        await quotes.findByIdAndDelete({_id: req.params.id});
        res.status(200).json({
            message: "Quotes  Data is Deleted "
        })
    }catch(err){
        res.status(400).json({
            message: err
        })
    }
}
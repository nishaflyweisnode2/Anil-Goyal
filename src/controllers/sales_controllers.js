const sales = require('../models/sales_models');
const user = require('../models/user_models');


exports.AddSales = async(req,res) => {
    try{
    const data = {
        userId : req.body.userId , 
        productId: req.body.productId,
        totalSales : req.body.total, 
        name:  req.body.name, 
        salesNumber: req.body.salesNumber, 
        salesType: req.body.salesType,
        revison: req.body.revison,
        date: req.body.date , 
        amount: req.body.amount,
        due: req.body.due, 
        remark : req.body.remark,  
        status: req.body.status,
        discount: req.body.discount, 
        tax: req.body.tax
    }
    console.log(data);
    const SalesData = await sales.create(data);
    console.log(SalesData);
    res.status(200).json({
        message : "Sales Data is Added ",
        details : SalesData
    })
}catch(err){
    console.log(err);
    res.status(400).json({message: err.message});
}
}
 

exports.GetSalesById = async(req,res) => {
    try{ 
    const data = await sales.findById({_id: req.params.id});
    console.log(data);
    res.status(200).json({
       details : data
    })
    }catch(err){
        console.log(err); 
        res.status(400).json({message: err.message})
    }
}


exports.UpdateSalesById = async(req,res) => {
    try{
    const Sales = await sales.findByIdAndUpdate({_id: req.params.id},{
        totalSales : req.body.total, 
        name:  req.body.name, 
        salesNumber: req.body.salesNumber, 
        salesType: req.body.salesType, 
        date: req.body.date , 
        amount: req.body.amount,
        due: req.body.amount, 
        remark : req.body.remark,  
        status: req.body.status
    });
    console.log(Sales);
    res.status(200).json({message: "Sales Data is Updated "})
    }catch(err){
        console.log(err);
        res.status(401).json({message: err.message});

    }
}


exports.DeleteSalesById = async(req,res) => {
    try{
    await sales.findByIdAndDelete({_id: req.params.id});
    res.status(200).json({
        message: "Sales Data is Deleted "
    })
    }catch(err){
        console.log(err);
        res.status(400).json({
            message: err.message
        })
    }
}


exports.getSalesDue = async(req,res) =>{
    try{
    const SalesDues = await sales.find();
    SalesDues.forEach(data => {
        const due = data.due
        if(due >= 1){
            console.log("Get Dues ")
            res.status(200).json({details: data})
        }
    })  
    }catch(err){
        console.log(err)
        res.status(400).json({
            err: err.message
        })
    }
}


exports.getSupplierwithDues = async(req,res) => {
    try{
    const data = await user.find({role: "supplier"});
    data.forEach(d => {
      const DuesData =  sales.find({userId: d._id})
      DuesData.then((da => {
        if(da.length == 0){
            res.json({details: "No Supplier Dues Data here "})
        }else{
        da.forEach(DueData => {
            const dues = DueData.due;
            if(dues >=1 ){
                res.status(200).json({details: DueData});
            }
        })
    }
      }))
    })
    }catch(err){
        console.log(err);
    }
}


exports.getCuestomerwithDues = async(req,res) => {
    try{
    const data = await user.find({role: "cuestomer"});
    data.forEach(d => {
      const DuesData =  sales.find({userId: d._id})
      DuesData.then((da => {
        if(da.length == 0){
            console.log("Added")
            res.json({details: "No Cuestomer Dues Data here "});
          }else{
        da.forEach(DueData => {
            console.log(DueData.due)
            const dues = DueData.due;
            if(dues >=1 ){
                res.status(200).json({details: DueData});
            }
        })
    }
      }))
    })
    }catch(err){
        console.log(err);
        res.status(400).json({message: err.message})
    }
}


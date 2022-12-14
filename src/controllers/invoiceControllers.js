const Invoice = require('../models/Invoices_models');

const grandTotal = (total) => {
    let sum =0 ;
    for(let i=0 ; i<total.length; i++){
     sum += total[i];
    }
    return sum;
}
const Total = (price, quantity) => {
  const result = [];
  for(let i=0 ; i< price.length; i++){
    result.push(price[i]* quantity[i])
  }
  return result
}

exports.createInvoice = async(req,res) => {
    try{
        const Add = Total(req.body.price, req.body.quantity)
    const data = {
        appName: "Accounting App", 
        amount: req.body.amount, 
        address : req.body.address, 
        Mobile: req.body.mobile, 
        date: new Date(), 
        Status : req.body.Status, 
        productId: req.body.productId, 
        productname: req.body.productname, 
        price: req.body.price, 
        total: Total(req.body.price, req.body.quantity),
        quantity: req.body.quantity,
       GrandTotal: grandTotal(Add)
    }
    console.log(data)
    const InvoiceData = await Invoice.create(data);
    res.status(200).json({
        details: InvoiceData, 
    })
}catch(err){
    console.log(err)
    res.status(400).json({
        message: err.message
    })
}
}

exports.GetAllInvoice = async(req,res) => {
    try{
    const InvoiceData = await Invoice.find();
    res.status(200).json({
        details: InvoiceData
    })
    }catch(err){
        res.status(400).json({
            message: err.message
        })
    }
}

exports.GetInvoice = async(req,res) => {
    try{
        const Data = await Invoice.findById({_id: req.params.id})
        res.status(200).json({
            message: Data
        })
    }catch(err){
        res.status(400).json({
            message:err.message
        })
    }
}

exports.UpdateInvoice = async(req,res) => {
    try{
        const Add = Total(req.body.price, req.body.quantity)
    await Invoice.findByIdAndUpdate({_id: req.params.id}, {
        amount: req.body.amount, 
        address : req.body.address, 
        Mobile: req.body.mobile, 
        date: new Date(), 
        Status : req.body.Status, 
        productId: req.body.productId, 
        productname: req.body.productname, 
        price: req.body.price, 
        total: Total(req.body.price, req.body.quantity),
        quantity: req.body.quantity,
       GrandTotal: grandTotal(Add)
    })
    res.status(200).json({
        message: "Invoiced Data Updated "
    })
    }catch(err){
        res.status(400).json({
            message: err.message
        })
    }
}

exports.DeleteInvoice = async(req,res) => {
    try{
    await Invoice.findByIdAndDelete({_id: req.params.id})
    res.status(200).json({
        message: "Invocied Deleted "
    })
    }catch(err){
        res.status(400).json({
            message: err.message
        })
    }
}
const settings = require('../models/setting')



exports.AddSettings  = async(req,res) => {
    try{
        const data = {
            payroll: req.body.payroll,
            salesorder: req.body.salesorder,
            dateformat: req.body.dateformat,
            decimalpalce: req.body.decimalpalce, 
            quotesNumber: req.body.quotesNumber,
            orderNmber: req.body.orderNmber,
            invoiceNumber: req.body.invoiceNumber,
            terms: req.body.terms,
            unitMeasurment: req.body.unitMeasurment,
            supplierCode : req.body.supplierCode, 
            salesreturn: req.body.salesreturn,
            salesreturndate: req.body.salesreturndate, 
            purchaseReturn: req.body.purchaseReturn,
            Auth: req.body.Auth,
            fingerPrint: req.body.fingerPrint
        }
        const Data = await settings.create(data);
        res.status(200).json({
            message: Data
        })
    }catch(err){
        res.status(400).json({message: err.message})
    }
}


exports.UpdateSettrings = async(req,res) => {
    try{
   await settings.findByIdAndUpdate({_id: req.params.id}, {
    payroll: req.body.payroll,
    salesorder: req.body.salesorder,
    dateformat: req.body.dateformat,
    decimalpalce: req.body.decimalpalce, 
    quotesNumber: req.body.quotesNumber,
    orderNmber: req.body.orderNmber,
    invoiceNumber: req.body.invoiceNumber,
    terms: req.body.terms,
    unitMeasurment: req.body.unitMeasurment,
    supplierCode : req.body.supplierCode, 
    salesreturn: req.body.salesreturn,
    salesreturndate: req.body.salesreturndate, 
    purchaseReturn: req.body.purchaseReturn,
    Auth: req.body.Auth,
    fingerPrint: req.body.fingerPrint
   })
    }catch(err){
        res.status(400).json({
            message: err.message
        })
    }
}
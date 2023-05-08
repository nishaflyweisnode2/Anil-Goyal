const razerpay = require('razorpay');
const crypto = require('crypto')
const uuid = require('uuid')
const id = uuid.v4();
const payment = require('../models/payment_module');




const Razorpay = new razerpay({
    key_id: 'rzp_live_xhEiJ4uMcMKT1r',
    key_secret: 'JSwRiz3kcqggnJSTohP1pJPy'
})

// InvoiceDataCreateInvioce = async(req,res) => {
//     const InvoiceData = {
//     type: "invoice",
//     description: req.body.desc,
//     partial_payment: true,
//     line_items: [
//         {
//           name: req.body.name,
//           description: req.body.Itemdesc,
//             amount: req.body.amount,
//           currency: "INR",
//           quantity: 1
//         }
//       ],
//       customer: {
//         name: req.body.name,
//         email: req.body.email,
//         billing_address: {
//           line1: req.body.line1,
//           line2: req.body.line2,
//           zipcode: req.body.zipcode,
//           city:  req.body.city,
//           state: req.state.state,
//           country: req.body.country
//         },
//     }
// }
// const Invoice = await Razorpay.invoices.create(InvoiceData)
// return Invoice
// }

exports.CreatePaymentOrder = async (req, res) => {
    const data = {
        amount: req.body.amount,
        currency: 'INR',
        receipt: id,
        partial_payment: false,
    }
    console.log(data)
    try {
        const result = await Razorpay.orders.create(data);
        console.log(result)
        if(!req.body.userId){
            return res.status(500).json({
                message: "UserId is required"
            })
        }else{

        const DBData = {
            userId: req.body.userId,
            name: req.body.name,
            invoice :"123" + req.body.name,
            payment_Id: result.id, 
            amount: result.amount, 
            amount_paid: result.amount, 
            receipt: result.receipt, 
            product : req.body.product, 
            orderStatus : req.body.orderStatus
        }
        console.log(DBData)
        const AmountData = await payment.create(DBData);
        res.status(200).json({
            details: AmountData
        })
    }
    } catch (err) {
        console.log(err);
        res.status(400).send({ message: err.message })
    }
}




exports.getAllPayments = async(req,res) => {
    try{
    const Data = await payment.find(); 
    res.status(200).json({details: Data })
    }catch(err){
        console.log(err);
        res.state(400).json({
            message: err.message
        })
    }
}

exports.GetPaymentsById = async(req,res) => {
    try{
    const Data = await payment.findById({_id: req.params.id});
    console.log(Data)
    res.status(200).json({details: Data , total : Data.length})
    }catch(err){
        res.status(400).json({message: err.message})
    }
}

exports.getPaymentByUserId = async(req,res) => {
    try{
    const result = await payment.find({userId: req.params.id});
    if(result.length ==0){
        return res.status(401).json({
            message: " No Transctions Found this User"
        })
    }
    res.status(200).json({
        message: "ok",
        result: result
    })
    }catch(err){
        console.log(err);
        res.status(200).json({
            message: "not ok",
            error: err.message
        })
    }
}

exports.Getalltransctions = async(req,res) => 
{
    try{
        const Data = await payment.findById({_id: req.params.id});
        console.log(Data)
        res.status(200).json({details: Data , total : Data.length})
    }catch(err){
        res.status(400).json({
            message: err.message
        })
    }
}




















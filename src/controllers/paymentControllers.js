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
        const DBData = {
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
    res.status(200).json({details: Data })
    }catch(err){
        res.status(400).json({message: err.message})
    }
}




















const axios = require('axios')
const mediaInvoice = require('../models/mediaInvoice_model');
const User = require('../models/user_models')


const GenerateEInvoices = async(req,res, token) => {
    try{
   
    }catch(err){
        console.log(err);
    }
}



exports.AddMediaInvoice = async(req,res) => {
    try{
        // const option ={
        //     "username":"hunnygoyal789@gmail.com",
        //     "password": "Masters@123",
        //     "client_id":"LHJLsVnxUIyoaJgMSV",
        //     "client_secret":"Z0He404Llhmlc18a4ZGpptRb",
        //     "grant_type":"password"
        //     }
        // const accessToken = await axios.post("https://pro.mastersindia.co/oauth/access_token", option)
        // console.log(accessToken.data)
        // const token = accessToken.data.access_token
        // console.log(token)
        const UserData = await User.findById({_id: req.body.user})
        console.log(UserData)
               const option1 ={
                "username":"testeway@mastersindia.co",
                "password": "!@#Demo!@#123",
                "client_id":"fIXefFyxGNfDWOcCWnj",
                "client_secret":"QFd6dZvCGqckabKxTapfZgJc",
                "grant_type":"password"
    
                }
            const accessToken1 = await axios.post("https://clientbasic.mastersindia.co/oauth/access_token", option1)
            console.log(accessToken1.data)
            const token = accessToken1.data.access_token
        console.log(token)
        console.log("Generate E-Invoices ")
         const option ={
              "access_token":token,
                "user_gstin": "09AAAPG7885R002",
                "data_source": "erp",
                "transaction_details": {
                "supply_type": "B2B",
                "charge_type": "N",
                "igst_on_intra": "N",
                "ecommerce_gstin": ""
                },
                // "document_details": {
                // "document_type": "INV",
                // "document_number": "MIPL/101",
                // "document_date": req.body.document_date
                // },
                "seller_details": {
                "gstin": "09AAAPG7885R002",
                "legal_name": "MastersIndia UP",
                "trade_name": "MastersIndia UP",
                "address1": "Vila",
                "address2": "Vila",
                "location": "Noida",
                "pincode": req.body.pincode,
                "state_code": req.body.state_code,
                "phone_number": req.body.phone_number,
                "email": req.body.email,
                },
                "buyer_details": {
                "gstin": "05AAAPG7885R002",
                "legal_name": "MastersIndia UT",
                "trade_name": "MastersIndia UT",
                "address1": req.body.address1,
                "address2": req.body.address2,
                "location": req.body.location,
                "pincode": req.body.pincode,
                "place_of_supply": req.body.item,
                "state_code": req.body.state,
                "phone_number": req.body.phone,
                "email": req.body.email
                },
                "dispatch_details": {
                "company_name": req.body.company_name,
                "address1": req.body.address1,
                "address2": req.body.address2,
                "location": req.body.location,
                "pincode": req.body.pincode,
                "state_code": req.body.state
                },
                // "ship_details": {
                // "gstin": "05AAAPG7885R002",
                // "legal_name": "MastersIndia UT",
                // "trade_name": "MastersIndia UT",
                // "address1": "Kila",
                // "address2": "Kila",
                // "location": "Nainital",
                // "pincode": 263001,
                // "state_code": "UTTARAKHAND"
           //     },
                // "export_details": {
                // "ship_bill_number": "",
                // "ship_bill_date": req.body.date,
                // "country_code": "IN",
                // "foreign_currency": "INR",
                // "refund_claim": "N",
                // "port_code": "",
                // "export_duty": 2534.34
                // },
                "payment_details": {
                "bank_account_number": "Account Details",
                "paid_balance_amount": req.body.balance,
                "credit_days": 2,
                "credit_transfer": "Credit Transfer",
                "direct_debit": "Direct Debit",
                "branch_or_ifsc": "KKK000180",
                "payment_mode": "CASH",
                "payee_name": "Payee Name",
                "outstanding_amount": req.body.outstanding_amount,
                "payment_instruction": "Payment Instruction",
                "payment_term": "Terms of Payment"
                },
                "reference_details": {
                "invoice_remarks": "Invoice Remarks",
                "document_period_details": {
                "invoice_period_start_date": req.body.invoice_period_start_date,
                "invoice_period_end_date": req.body.invoice_period_end_date
                },
                "preceding_document_details": [{
                "reference_of_original_invoice": "CFRT/0006",
                "preceding_invoice_date": "07/03/2020",
                "other_reference": "2334"
                }],
                "contract_details": [{
                "receipt_advice_number": "aaa",
                "receipt_advice_date": "07/03/2020",
                "batch_reference_number": "2334",
                "contract_reference_number": "2334",
                "other_reference": "2334",
                "project_reference_number": "2334",
                "vendor_po_reference_number": "233433454545",
                "vendor_po_reference_date": "07/02/2020"
                }]
                },
                "additional_document_details": [{
                "supporting_document_url": "asafsd",
                "supporting_document": "india",
                "additional_information": "india"
                }],
                "value_details": {
                // "total_assessable_value": 4,
                // "total_cgst_value": 0,
                // "total_sgst_value": 0,
                // "total_igst_value": 0.2,
                // "total_cess_value": 0,
                // "total_cess_value_of_state": 0,
                "total_discount": req.body.totalamoumt,
                "total_other_charge": req.body.tax,
                // "total_invoice_value": 4.2,
                // "round_off_amount": 0,
                // "total_invoice_value_additional_currency": 0
                },
                // "ewaybill_details": {
                // "transporter_id": "05AAABB0639G1Z8",
                // "transporter_name": "Jay Trans",
                // "transportation_mode": "1",
                // "transportation_distance": "0",
                // "transporter_document_number": "1230",
                // "transporter_document_date": "12/08/2020",
                // "vehicle_number": "PQR1234",
                // "vehicle_type": "R"
              //  },
    //             "item_list": [{
    //             "item_serial_number": "501",
    //             "product_description": "Wheat desc",
    //             "is_service": "N",
    //             "hsn_code": "1001",
    //             "bar_code": "1212",
    //             "quantity": 1,
    //             "free_quantity": 0,
    //             "unit": "KGS",
    //             "unit_price": 4,
    //             "total_amount": 4,
    //             "pre_tax_value": 0,
    //             "discount": 0,
    //             "other_charge": 0,
    //             "assessable_value": 4,
    //             "gst_rate": 5,
    //             "igst_amount": 0.2,
    //             "cgst_amount": 0,
    //             "sgst_amount": 0,
    //             "cess_rate": 0,
    //             "cess_amount": 0,
    //             "cess_nonadvol_amount": 0,
    //             "state_cess_rate": 0,
    //             "state_cess_amount": 0,
    //             "state_cess_nonadvol_amount": 0,
    //             "total_item_value": 4.2,
    //             "country_origin": "",
    //             "order_line_reference": "",
    //             "product_serial_number": "",
    //             "batch_details": {
    //             "name": "aaa",
    //             "expiry_date": "31/10/2020",
    //             "warranty_date": "31/10/2020"
    //             },
    //             "attribute_details": [{
    //             "item_attribute_details": "aaa",
    //             "item_attribute_value": "147852"
    //             }]
    // }]
                }
            const accessToken = await axios.post("https://clientbasic.mastersindia.co/generateEinvoice", option)
            console.log(accessToken)
    //     if(!req.body.user){
    //         return res.status(500).json({
    //             message: "UserId required "
    //         })
    //     }
    // const data = {
    //     user: req.body.user,
    //     invoiceNo: req.body.invoiceNo, 
    //     date: req.body.date, 
    //     amount: req.body.amount, 
    //     item: req.body.item, 
    //     discount: req.body.discount, 
    //     totalamoumt: req.body.totalamoumt, 
    //     tax: req.body.tax, 
    //     doc: req.body.doc
    // }
    // const Data = await mediaInvoice.create(data);
    // res.status(200).json({
    //     message: Data
    // })
    }catch(err){
        console.log(err);
        res.status(400).json({
            message: err.message
        })
    }
}


exports.getByUserId  = async(req,res) => {
    try{
    const data = await mediaInvoice.find({user: req.params.id});
    res.status(200).json({
        message: data
    })
    }catch(err){
        console.log(err);
        res.status(200).json({
            message: err.message
        })
    }
} 

exports.GetByIdInvoice = async(req,res) => {
    try{
    const data = await mediaInvoice.findById({_id: req.params.id});
    res.status(200).json({
        message: data
    })
    }catch(err){
        console.log(err);
        res.status(400).json({
            message: err.message
        })
    }
}

exports.DeleteMediaInvoice = async(req,res) => {
    try{
    await mediaInvoice.deleteOne({_id: req.body.id})
    res.status(200).json({
        message: "Media Invoice Deleted "
    })
    }catch(err){
        console.log(err);
        res.status(400).json({

        })
    }
}

exports.GetAllMediaInvoice = async(req, res) =>{
    try{
    const data = await mediaInvoice.find();
    res.status(200).json({
        message: data
    })
    }catch(err){
        console.log(err);
        res.status(400).json({
            message: err.message
        })
    }
}
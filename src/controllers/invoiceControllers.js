const axios = require('axios')
const Invoice = require('../models/Invoices_models');
const payment = require('../models/payment_module');

const grandTotal = (total) => {
    let sum = 0;
    for (let i = 0; i < total.length; i++) {
        sum += total[i];
    }
    return sum;
}
const Total = (price, quantity) => {
    const result = [];
    for (let i = 0; i < price.length; i++) {
        result.push(price[i] * quantity[i])
    }
    return result
}

exports.createInvoice = async (req, res) => {
    try {
        // const Add = Total(req.body.price, req.body.quantity)

        const option1 = {
            "username": "testeway@mastersindia.co",
            "password": "!@#Demo!@#123",
            "client_id": "fIXefFyxGNfDWOcCWnj",
            "client_secret": "QFd6dZvCGqckabKxTapfZgJc",
            "grant_type": "password"

        }
        const accessToken1 = await axios.post("https://clientbasic.mastersindia.co/oauth/access_token", option1)
        const token = accessToken1.data.access_token
        const DataGST = req.body
        const getData = {
            "access_token": token,
        }
        const option = {
            "access_token": token,
            "user_gstin": "09AAAPG7885R002",
            "data_source": "erp",
            "transaction_details": {
                "supply_type": "B2B",
                "charge_type": "N",
                "igst_on_intra": "N",
                "ecommerce_gstin": ""
            },
            "document_details": {
                "document_type": "INV",
                "document_number": DataGST.document_number,
                "document_date": DataGST.document_date
            },
            "seller_details": {
                "gstin": DataGST.seller_gstin,
                "legal_name": DataGST.seller_legal_name,
                "trade_name": DataGST.seller_trade_name,
                "address1": DataGST.seller_address1,
                "address2": DataGST.seller_address2,
                "location": DataGST.seller_location,
                "pincode": DataGST.seller_pincode,
                "state_code": DataGST.seller_state,
                "phone_number": DataGST.seller_phone_number,
                "email": DataGST.email,
            },
            "buyer_details": {
                "gstin": DataGST.buyer_gstin,
                "legal_name": DataGST.legal_name,
                "trade_name": DataGST.trade_name,
                "address1": DataGST.buyer_address1,
                "address2": DataGST.buyer_address2,
                "location": DataGST.buyer_location,
                "pincode": DataGST.buyer_pincode,
                "place_of_supply": DataGST.place_of_supply,
                "state_code": DataGST.buyer_state,
                "phone_number": DataGST.buyer_mobile,
                "email": DataGST.buyer_Email
            },
            "dispatch_details": {
                "company_name": DataGST.company_name,
                "address1": DataGST.company_address1,
                "address2": DataGST.company_address2,
                "location": DataGST.company_loction,
                "pincode": DataGST.company_pincode,
                "state_code": DataGST.company_state
            },
            "ship_details": {
                "gstin": DataGST.ship_gstin,
                "legal_name": DataGST.ship_legal_name,
                "trade_name": DataGST.ship_trade_name,
                "address1": DataGST.address1,
                "address2": DataGST.address2,
                "location": DataGST.location,
                "pincode": DataGST.ship_code,
                "state_code": DataGST.state_code
            },
            "export_details": {
                "ship_bill_number": DataGST.ship_bill_number,
                "ship_bill_date": DataGST.ship_bill_date,
                "country_code": "IN",
                "foreign_currency": "INR",
                "refund_claim": "N",
                "port_code": DataGST.port_code,
                "export_duty": DataGST.export_duty
            },
            "payment_details": {
                "bank_account_number": DataGST.bank_account_number,
                "paid_balance_amount": DataGST.paid_balance_amount,
                "credit_days": DataGST.credit_days,
                "credit_transfer": DataGST.credit_days,
                "direct_debit": DataGST.direct_debit,
                "branch_or_ifsc": DataGST.branch_or_ifsc,
                "payment_mode": DataGST.payment_mode,
                "payee_name": DataGST.payee_name,
                "outstanding_amount": DataGST.outstanding_amount,
                "payment_instruction": DataGST.payment_instruction,
                "payment_term": "Terms of Payment"
            },
            "reference_details": {
                "invoice_remarks": DataGST.invoice_remarks,
                "document_period_details": {
                    "invoice_period_start_date": DataGST.invoice_period_start_date,
                    "invoice_period_end_date": DataGST.invoice_period_end_date
                },
                "preceding_document_details": [{
                    "reference_of_original_invoice": DataGST.reference_of_original_invoice,
                    "preceding_invoice_date": DataGST.preceding_invoice_date,
                    "other_reference": DataGST.reference
                }],
                "contract_details": [{
                    "receipt_advice_number": DataGST.receipt_advice_number,
                    "receipt_advice_date": DataGST.receipt_advice_date,
                    "batch_reference_number": DataGST.batch_reference_number,
                    "contract_reference_number": DataGST.contract_reference_number,
                    "other_reference": DataGST.other_reference,
                    "project_reference_number": DataGST.project_reference_number,
                    "vendor_po_reference_number": DataGST.vendor_po_reference_number,
                    "vendor_po_reference_date": DataGST.vendor_po_reference_date
                }]
            },
            //  "additional_document_details": [{
            //  "supporting_document_url": DataGST.supporting_document_url,
            //  "supporting_document": ,
            //  "additional_information": "india"
            //  }],
            "value_details": {
                "total_assessable_value": DataGST.total_assessable_value,
                "total_cgst_value": DataGST.total_cgst_value,
                "total_sgst_value": DataGST.total_sgst_value,
                "total_igst_value": DataGST.total_igst_value,
                "total_cess_value": DataGST.total_cess_value,
                "total_cess_value_of_state": DataGST.total_cess_value_of_state,
                "total_discount": DataGST.total_discount,
                "total_other_charge": DataGST.total_other_charge,
                "total_invoice_value": DataGST.total_other_charge,
                "round_off_amount": DataGST.round_off_amount,
                "total_invoice_value_additional_currency": DataGST.total_invoice_value_additional_currency
            },
            "ewaybill_details": {
                "transporter_id": DataGST.transporter_id,
                "transporter_name": DataGST.transporter_name,
                "transportation_mode": DataGST.transportation_mode,
                "transportation_distance": DataGST.transportation_mode,
                "transporter_document_number": DataGST.transportation_mode,
                "transporter_document_date": DataGST.transporter_document_date,
                "vehicle_number": DataGST.transporter_document_date,
                "vehicle_type": DataGST.vehicle_type
            },
            "item_list": [{
                "item_serial_number": DataGST.item_serial_number,
                "product_description": DataGST.product_description,
                "is_service": "N",
                "hsn_code": DataGST.hsn_code,
                "bar_code": DataGST.hsn_code,
                "quantity": DataGST.quantity,
                "free_quantity": 0,
                "unit": DataGST.unit,
                "unit_price": DataGST.unit_price,
                "total_amount": DataGST.total_amount,
                "pre_tax_value": 0,
                "discount": DataGST.discount,
                "other_charge": 0,
                "assessable_value": 4,
                "gst_rate": 5,
                "igst_amount": 0.2,
                "cgst_amount": 0,
                "sgst_amount": 0,
                "cess_rate": 0,
                "cess_amount": 0,
                "cess_nonadvol_amount": 0,
                "state_cess_rate": 0,
                "state_cess_amount": 0,
                "state_cess_nonadvol_amount": 0,
                "total_item_value": 4.2,
                "country_origin": "",
                "order_line_reference": "",
                "product_serial_number": "",
                "batch_details": {
                    "name": "aaa",
                    "expiry_date": DataGST.expiry_date,
                    "warranty_date": DataGST.warranty_date
                },
                "attribute_details": [{
                    "item_attribute_details": DataGST.item_attribute_details,
                    "item_attribute_value": DataGST.item_attribute_value
                }]
            }]
        }
        const accessToken = await axios.post("https://clientbasic.mastersindia.co/generateEinvoice", option)
        console.log(accessToken)
        const path = accessToken.data.results.message
        const data = {
            user: req.body.user,
            AckNo: path.AckNo,
            AckDt: path.AckDt,
            Irn: path.Irn,
            SignedInvoice: path.SignedInvoice,
            SignedQRCode: path.SignedQRCode,
            EwbValidTill: path.EwbValidTill,
            EwbNo: path.EwbNo,
            EwbDt: path.EwbDt,
            QRCodeUrl: path.QRCodeUrl,
            EinvoicePdf: path.EinvoicePdf,
            Status: path.Status,
            requestId: path.requestId
        }
        const InvoiceData = await Invoice.create(data);
        res.status(200).json({
            details: InvoiceData,
        })
    } catch (err) {
        console.log(err)
        res.status(400).json({
            message: err.message
        })
    }
}

exports.GetAllInvoice = async (req, res) => {
    try {
        const InvoiceData = await Invoice.find().populate('user')
        res.status(200).json({
            details: InvoiceData
        })
    } catch (err) {
        res.status(400).json({
            message: err.message
        })
    }
}

exports.GetInvoice = async (req, res) => {
    try {
        const Data = await Invoice.findById({ _id: req.params.id })
        res.status(200).json({
            message: Data
        })
    } catch (err) {
        res.status(400).json({
            message: err.message
        })
    }
}

exports.UpdateInvoice = async (req, res) => {
    try {
        const Add = Total(req.body.price, req.body.quantity)
        await Invoice.findByIdAndUpdate({ _id: req.params.id }, {
            user: req.body.user,
            amount: req.body.amount,
            address: req.body.address,
            Mobile: req.body.mobile,
            date: new Date(),
            Status: req.body.Status,
            name: req.body.name,
            productname: req.body.productname,
            price: req.body.price,
            total: Total(req.body.price, req.body.quantity),
            quantity: req.body.quantity,
            GrandTotal: parseInt(grandTotal(Add)),
            invoiceNo: req.body.invoiceNo
        }, { new: true })
        res.status(200).json({
            message: "Invoiced Data Updated "
        })
    } catch (err) {
        res.status(400).json({
            message: err.message
        })
    }
}

exports.DeleteInvoice = async (req, res) => {
    try {
        await Invoice.findByIdAndDelete({ _id: req.params.id })
        res.status(200).json({
            message: "Invocie Deleted "
        })
    } catch (err) {
        res.status(400).json({
            message: err.message
        })
    }
}



exports.GenerateEInVoice = async (req, res) => {
    try {
        const data = Invoice.find({ user: req.params.id });
        const paymentData = payment.find({ userId: req.params.id });

        const Data = await axios({
            method: "post",
            url: "https://commonapi.mastersindia.co/oauth/access_token",
            data: {
                "username": "hunnygoyal789@gmail.com",
                "password": "Masters@123",
                "client_id": "LHJLsVnxUIyoaJgMSV",
                "client_secret": "Z0He404Llhmlc18a4ZGpptRb",
                "grant_type": "password"
            }
        })


    } catch (err) {
        res.status(400).json({
            message: err.message
        })
    }
}
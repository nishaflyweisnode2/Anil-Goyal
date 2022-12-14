const express = require("express");
const InvoiceControllers = require('../controllers/invoiceControllers');

const router = express();

router.post('/invoice', InvoiceControllers.createInvoice);
router.get('/invoice', InvoiceControllers.GetAllInvoice);
router.put('/invoice/:id', InvoiceControllers.UpdateInvoice);
router.delete('/invoice/:id', InvoiceControllers.DeleteInvoice);
router.get('/invoice/:id', InvoiceControllers.GetInvoice)




module.exports = router ; 

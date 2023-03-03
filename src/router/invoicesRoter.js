const express = require("express");
const InvoiceControllers = require('../controllers/invoiceControllers');
const mediaControllers = require('../controllers/mediaInvoice_controllers')
const router = express();

router.post('/invoice', InvoiceControllers.createInvoice);
router.get('/invoice', InvoiceControllers.GetAllInvoice);
router.put('/invoice/:id', InvoiceControllers.UpdateInvoice);
router.delete('/invoice/:id', InvoiceControllers.DeleteInvoice);
router.get('/invoice/:id', InvoiceControllers.GetInvoice)


//MediaInvice Router 
router.post('/media', mediaControllers.AddMediaInvoice);
router.get('/media/user/:id', mediaControllers.getByUserId);
router.get('/media/:id', mediaControllers.GetByIdInvoice);
router.delete('/media', mediaControllers.DeleteMediaInvoice);
//router.get('/media', mediaControllers.GetAllMediaInvoice);

module.exports = router ; 

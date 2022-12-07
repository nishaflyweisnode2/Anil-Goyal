const express = require('express');
const SalesControllers = require('../controllers/sales_controllers');


const router = express();


router.post('/sales', SalesControllers.AddSales);
router.get('/sales/:id', SalesControllers.GetSalesById);
router.put('/sales/:id', SalesControllers.UpdateSalesById)
router.delete('/sales/:id', SalesControllers.DeleteSalesById);
router.get('/sales', SalesControllers.getSalesDue);
router.get('/saless', SalesControllers.getSupplierwithDues);
router.get('/scuestomer', SalesControllers.getCuestomerwithDues);


module.exports = router;
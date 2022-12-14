const express = require('express');
const SalesControllers = require('../controllers/sales_controllers');


const router = express();


router.post('/', SalesControllers.AddSales);
router.get('/:id', SalesControllers.GetSalesById);
router.put('/:id', SalesControllers.UpdateSalesById)
router.delete('/:id', SalesControllers.DeleteSalesById);


module.exports = router;
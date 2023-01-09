const express =  require('express');

const SalesControllers = require('../controllers/sales_controllers');



const router = express();


router.get('/due', SalesControllers.getSalesDue);
router.get('/supplier', SalesControllers.getSupplierwithDues)
router.get('/cuestomer', SalesControllers.getCuestomerwithDues);
router.get('/chart', SalesControllers.getMonthwieseSales);







module.exports = router;
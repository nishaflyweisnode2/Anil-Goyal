const express =  require('express');
const adminControllers = require('../controllers/admin_controllers');
const SalesControllers = require('../controllers/sales_controllers');
const paymentControllers = require('../controllers/paymentControllers');



const router = express();


router.get('/due', SalesControllers.getSalesDue);
router.get('/supplier', SalesControllers.getSupplierwithDues)
router.get('/cuestomer', SalesControllers.getCuestomerwithDues);

router.post('/admin/signup', adminControllers.CreateAdmin);
router.post('/admin/login', adminControllers.signIn);
router.get('/admin/supplier', adminControllers.GetAllSuplier);
router.get('/admin/cuestomer', adminControllers.GetAllCuestomer)
router.get('/admin/sales/all', adminControllers.GetAllSales)
router.get('/admin/payment', paymentControllers.getAllPayments)
router.get('/admin/all', adminControllers.GetAllUsers);
router.delete('/admin/delete/:id', adminControllers.DeleteUsers);




module.exports = router ;
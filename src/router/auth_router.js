const express = require('express');
const authControllers = require('../controllers/auth_controlllers');
const verifySignup = require('../middleware/verifySignup');
const  payment = require('../controllers/paymentControllers')

const router = express();



router.post('/users/signup', [verifySignup.validationSignUp, authControllers.signup])
router.post('/users/login', authControllers.signin);
router.put('/users/update/:id', authControllers.UpdateUser);
router.get('/users/cuestomer', authControllers.cuestomerCout);
router.get('/users/supplier', authControllers.supplierCout);
router.post('/users/payment', payment.CreatePaymentOrder),
router.get('/users/payment/:id', payment.GetPaymentsById)

module.exports = router;
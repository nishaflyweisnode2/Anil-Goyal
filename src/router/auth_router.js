const express = require('express');
const authControllers = require('../controllers/auth_controlllers');
const verifySignup = require('../middleware/verifySignup');
const  payment = require('../controllers/paymentControllers')
const UserSettings = require('../controllers/User_setting')
const router = express();



router.post('/users/signup', [verifySignup.validationSignUp, authControllers.signup])
router.post('/users/login', authControllers.signin);
router.put('/users/update/:id', authControllers.UpdateUser);
router.get('/users/cuestomer', authControllers.cuestomerCout);
router.get('/users/supplier', authControllers.supplierCout);
router.post('/users/payment', payment.CreatePaymentOrder),
router.get('/users/payment/:id', payment.GetPaymentsById)
router.post('/users/settings/', UserSettings.AddSettings);
router.put('/users/settings/:id', UserSettings.UpdateSettrings)
module.exports = router;
const express = require('express');
const authControllers = require('../controllers/auth_controlllers');
const verifySignup = require('../middleware/verifySignup')

const router = express();



router.post('/users/signup', [verifySignup.validationSignUp, authControllers.signup])
router.post('/users/login', authControllers.signin);
router.put('/users/update', authControllers.UpdateUser);
router.get('/users/cuestomer', authControllers.supplierCout);
router.get('/users/supplier', authControllers.supplierCout);


module.exports = router;
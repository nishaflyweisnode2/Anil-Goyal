const expresss = require('express');
const web_Controllers = require('../controllers/web_controllers');


const router = expresss();

router.post('/signup', web_Controllers.Signup);
router.post('/login', web_Controllers.login);
router.post('/verify', web_Controllers.verifyOtp);
router.get('/customer', web_Controllers.getCuestomer);
router.get('/supplier', web_Controllers.getSupplier);
router.get('/sale', web_Controllers.SalesData);
router.get('/product/:status', web_Controllers.SalesDataOpen);
router.get('/product/all', web_Controllers.getAllProduct)




module.exports = router;
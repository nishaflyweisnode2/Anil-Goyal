const express =  require('express');
const adminControllers = require('../controllers/admin_controllers');


const router = express();

router.post('/admin/signup', adminControllers.CreateAdmin);
router.post('/admin/login', adminControllers.signIn);




module.exports = router ;
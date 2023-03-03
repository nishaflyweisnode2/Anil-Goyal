const express = require('express');
const generateInvoice = require('../controllers/generateInvoice')

const router = express();

router.post('/access-token', generateInvoice.GetAccessToken)



module.exports = router;
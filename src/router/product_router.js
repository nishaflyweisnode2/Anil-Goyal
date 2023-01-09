const express = require('express');
const productContrllers = require('../controllers/product_controllers');
const veriftToken = require('../middleware/auth_check');


const router = express();


router.post('/product', [veriftToken.veriftToken, productContrllers.AddProduct ]);
router.get('/product/:id',[veriftToken.veriftToken, productContrllers.GetProductByID]);
router.put('/product/:id',[ veriftToken.veriftToken, productContrllers.updateProduct]);
router.delete('/product/:id',[veriftToken.veriftToken, productContrllers.DeleteProductById]);
router.get('/product',[ veriftToken.veriftToken, productContrllers.getAllProduct]);
router.get('/product/count', [veriftToken.veriftToken, productContrllers.getAllProductlength]);

module.exports = router ; 



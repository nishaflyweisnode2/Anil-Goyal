const express = require('express');
const quotes = require('../controllers/quote_controllers');


const router = express();




router.post('/quotes', quotes.AddQuotes);
router.get('/quotes', quotes.getQuotes);
router.get('/quotes/:id', quotes.getById);
router.put('/quotes/:id', quotes.updateQuotes);
router.delete('/quotes/:id', quotes.DeleteQuotes);



module.exports = router;
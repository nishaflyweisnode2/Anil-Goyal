const express = require('express');
const expenseControllers = require('../controllers/expenses_controllers');




const router = express();

router.post('/expenses', expenseControllers.AddExpenses);
router.get('/expenses', expenseControllers.getExpensesById);
router.put('/expenses', expenseControllers.UpdateExpenses);
router.delete('/expenses', expenseControllers.DeleteExpenses);


module.exports = router;
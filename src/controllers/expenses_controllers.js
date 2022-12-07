const expense = require('../models/expenses_model');




exports.AddExpenses = async(req,res) => {
    try{
    const data = {
        category: req.body.category, 
        amount: req.body.amount, 
        split: req.body.split, 
        paymentMethod: req.body.paymentMode, 
        transactionDate: req.body.transactionDate, 
        description: req.body.desc, 
        status: req.body.status, 
        billerName: req.body.billername
    }
    const ExpensesData = await expense.create(data);
    console.log(ExpensesData)
    res.status(200).json({details: ExpensesData});
}catch(err){
    console.log(err);
    res.status(400).json({message: err.message});
}

}

exports.getExpensesById = async(req,res) => {
    try{
    const expenseData = await expense.find();
    console.log(expenseData);
    res.status(200).json({details: expenseData});
    }catch(err){
        console.log(err);
        res.status(400).json({message: err.message})
    }

}

exports.UpdateExpenses = async(req,res) => {
    try{
  await expense.findByIdAndUpdate({_id:req.params.id}, {
    category: req.body.category, 
    amount: req.body.amount, 
    split: req.body.split, 
    paymentMethod: req.body.paymentMode, 
    transactionDate: req.body.transactionDate, 
    description: req.body.desc, 
    status: req.body.status, 
    billerName: req.body.billername
  });
  res.status(200).json({message: "Expenses Data is Updated "})
    }catch(err){
        console.log(err);
        res.status(400).json({message: err.message});
    }
}


exports.DeleteExpenses = async(req,res) =>{
    try{
    await expense.findByIdAndDelete({_id: req.params.id});
    res.status(200).json({message: "Expenses Deleted "});
    }catch(err){
        console.log(err);
        res.status(400).json({
            message: err.message
        })
    }
}
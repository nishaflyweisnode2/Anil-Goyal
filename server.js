const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();
const authRouter = require('./src/router/auth_router');
const businessRouter = require('./src/router/business_router');
const SalesRouter = require('./src/router/sales_router');
const productRouter = require('./src/router/product_router')
const adminRouter = require('./src/router/admin_router');
const expensesRouter = require('./src/router/expenses_router');


const app = express();

app.use(cors());
app.use(bodyParser.json());




app.get('/', (req,res) => {
    console.log("Started ")
    res.status(200).send({message: "App Started "})
});

app.use('/api/v1/', authRouter);
app.use('/api/v1/', businessRouter);
app.use('/api/v1/', SalesRouter);
app.use('/api/v1/', productRouter);
app.use('/api/v1/', adminRouter);
app.use('/api/v1/', expensesRouter);


mongoose.connect(process.env.DB, (err) => {
    if(err){
        console.log(err);
    }
    console.log("DB is connected")
})





app.listen(process.env.PORT || 4000, () => {
    console.log("Server is Start" , `${process.env.PORT}`);
} )
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
const InvoiceRouter = require('./src/router/invoicesRoter');
const quotes = require('./src/router/quotes');
const card = require('./src/router/nfc_router');
const generate_router = require('./src/router/generateInvoice');
const web_router = require('./src/router/web_router')
//const dues = require('./src/router/duesapi');


const app = express();

app.use(cors());
app.use(bodyParser.json());




app.get('/', (req,res) => {
    console.log("Started ")
    res.status(200).send({message: "App Started "})
});

app.use('/api/v1', authRouter);
app.use('/api/v1', businessRouter);
app.use('/api/v1/sales', SalesRouter);
app.use('/api/v1', productRouter);
app.use('/api/v1', adminRouter);
app.use('/api/v1', expensesRouter);
app.use('/api/v1', InvoiceRouter);
app.use('/api/v1', quotes);
app.use('/api/v1/card', card);
app.use('/api/v1/generate', generate_router);
app.use('/api/v1/web', web_router)

//app.use('/api/v1/dues',dues)


mongoose.connect(process.env.DB || "mongodb+srv://anil:anil1@anil.1b2tq8y.mongodb.net/?retryWrites=true&w=majority", (err) => {
    if(err){
        console.log(err);
    }
    console.log("DB is connected")
})





app.listen(process.env.PORT || 4000, () => {
    console.log("Server is Start" , `${process.env.PORT}`);
} )


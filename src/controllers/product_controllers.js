const product = require('../models/product_model');


exports.AddProduct =  async(req,res) => {
    try{
    const data = {
        productName: req.body.name, 
        quantity: req.body.qty, 
        unitprice: req.body.unitprice, 
        amount: req.body.amount
    }
    const productData = await product.create(data);
    console.log(productData);
    res.status(200).json({message: "Product Data is Added ", details : productData});
}catch(err){
    console.log(err);
    res.status(200).json({message: err.message});
}
}


exports.GetProductByID = async(req,res) => {
    try{
    const Productdata = await product.findById({_id: req.params.id});
    console.log(Productdata);
    res.status(200).json({
        details: Productdata
    })
    }catch(err){
        console.log(err)
        res.status(400).json({message: err.message})
    }
}

exports.updateProduct = async(req,res) => {
    try{
        const ProductData  = await product.findByIdAndUpdate({_id: req.params.id},{
            productName: req.body.name, 
            quantity: req.body.qty, 
            unitprice: req.body.unitprice, 
            amount: req.body.amount
        });
        console.log(ProductData);
        res.status(200).json({message: " Product  Data is Updated "})
    }catch(err){
        console.log(err);
        res.status(400).json({message: err.message})
    }
}



exports.DeleteProductById = async(req,res) => {
    try{
    await product.findByIdAndDelete({_id: req.params.id});
    res.status(200).json({
        message: "Product  Data is Deleted "
    })
    }catch(err){
        console.log(err);
        res.status(400).json({
            message: err.message
        })
    }
}


exports.getAllProduct = async(req , res) => {
    try{
    const productData = await product.find();
    res.status(200).json({data: productData})
    }catch(err){
        console.log(err);
        res.status(400).json({message: err.message});
    }
}


exports.getAllProductlength = async(req , res) => {
    try{
    const productData = await product.find();
    if(!productData.length){
        return res.status(500).json({
            message: "No Product Found "
        })
    }
    res.status(200).json({data: productData.length})
    }catch(err){
        console.log(err);
        res.status(400).json({message: err.message});
    }
}
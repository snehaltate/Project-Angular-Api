const { Router } = require('express');

module.exports=app=>{
    const express=require('express');
    const Router=express.Router();
    const ProductController=require('./product-controller');
    
    
    //GET url: http://localhost:3000/app/product
    Router.get('/product',ProductController.findAll);
    //GET url: http://localhost:3000/app/product/:id
    Router.get('/product/:id',ProductController.findByPk);
    // //POST url: http://localhost:3000/app/product/add
    // Router.post('/product/add',ProductController.create);
    // //PUT url: http://localhost:3000/app/product/update/:id
    // Router.put('/product/update/:id',ProductController.update);
    // //DELETE url: http://localhost:3000/app/product/delete/:id
    // Router.delete('/product/delete/:id',ProductController.update);  
    //Main url: http://localhost:3000/app/
    app.use('/app',Router);   
}
const express = require("express");
const productRouter = express.Router();

const {model} = require("./model");

productRouter.post('/add', async(req, res)=>{
    const payload = req.body;
    console.log(payload)
    try{
        const data = await model.insertMany(payload);
        model.save();
        res.send("data is added")
    }catch(err){
        res.status(500).send({error: err.message})
    }
})

productRouter.put('/update/:id', async(req, res)=>{
    const payload = req.params.id;
    console.log(payload)
    try{
        await model.findByIdAndUpdate({payload})
        res.send("product data is updated")
    }catch(err){
        res.status(500).send({error: err.message})
    }
})

productRouter.delete('/delete/:id', async(req, res)=>{
    const payload = req.params.id;
    console.log(payload)
    try{
        await model.findOneAndDelete({payload})
        res.send("data is deleted")
    }catch(err){
        res.status(500).send({error: err.message})
    }
})
module.exports = {productRouter};
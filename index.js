const express = require("express");
const { connection } = require("mongoose");
require("dotenv").config();

const app = express();
const {productRouter} = require("./router");

// app.get('/', (req, res)=>{
//     res.send("Welcome")
// })
app.use('/', productRouter)
app.listen(process.env.PORT, async ()=>{
    try{
        connection;
        console.log("connection is successful!")
    }catch(err){
        console.log("connection is failed!")
    }
})

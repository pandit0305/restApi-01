const mongoose = require("mongoose");

const schema = mongoose.Schema({
    productId:Number,
    quantity:Number,
    operation:String
})

const model = mongoose.model('productsData', schema);

module.exports = {model};
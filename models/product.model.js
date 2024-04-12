const { timeStamp } = require('console');
const mongoose = require('mongoose');
const { type } = require('os');

const ProductSchema = mongoose.Schema(
    {
        name:{
            type:String,
            required:[true, "Please enter product name"]
        },
        quantity:{
            type:Number,
            required:[true, "Please enter product quantity"]
        },
        image:{
            type:String,
            required: false
        }
     },
     {
        timestamps: true,
     }
);

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
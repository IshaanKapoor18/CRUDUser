const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema(
    {
        firstName: {
            type: String,
           required: true
        },
        lastName: {
            type:String,
            required: true
        },
        age: {
            type: Number,
            required: true
        },
        gender:{
            type: String,
            required: true
        },

        image:{
            type: String,
            required: true
        },
        createdBy:{
            type:String,
            
        },
        updatedBy:{
            type:String,
            
        },
        deletedBy:{
            type:String,
           
        },
        deletedAt:{
            type:Date,
            
        },
        createdAt:{
            type:Date,
            default: Date.now,
            
        },
        updatedAt:{
            type:Date,
            default: Date.now,
            
        }, 
        status:{
            type:Number,
            default: 1
        }
    }
)

const Product = mongoose.model("Product", ProductSchema);
module.exports=Product;
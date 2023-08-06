const mongoose = require("mongoose");
const Product = require("../model/usermodel");


// adding the user 
const AddUser =  async(req, res)=>{
    console.log("add"+req.body);

    // giving the data for creaded by attribute
    req.body.createdBy =  req.body.firstName + " " +  req.body.lastName;
    // last updated user
    req.body.updatedBy =  req.body.firstName + " " +  req.body.lastName;
    
    
    // creating user through Product Schema
    try {
        const product = await Product.create(req.body);
        // creating user through Product Schema
        res.json(product);
    } catch (error) {
            console.log("Error in adding user ");
            res.status(400).send(error);
    }

};


const GetAllUser = async(req, res)=>{
    console.log("Request for Get all User");

   try {
    // getting the user by find query
    const product = await Product.find();
    // giving the response 
    res.json(product);

   } catch (error) {
    // Catch any error
    console.log("Error found in getting the data");
    res.status(400).send(error);
   }
}

const GetUserId = async(req, res)=>{
    const id = req.params.id;
    // getting user by id and getting params into id var 
    try {
        const product = await Product.findById(id);
        // call for findById
        console.log(`User Found With Id ${id}`);
        res.json(product);

    } catch (error) {
        console.log("Error in geting the data by id ");
        res.status(400).send(error);
    }
}

const UpdateById = async(req, res)=>{
    try {
        const id = req.params.id;

        // updated current time 
        req.body.updatedAt = Date.now();
        // last updated user  
        req.body.updatedBy =  req.body.firstName + " " +  req.body.lastName;
        // callibg the data by id and updating 
        const product = await Product.findByIdAndUpdate(id, req.body);
        if(!product)
        console.log("No data found!! Add user or Incorrect Id");
        const product1 = await Product.findById(id);
        res.json(product1);

    } catch (error) {
         res.status(400).send(error);
    }
}


const UpdateStatus = async(req, res)=>{
    try {
                const id = req.params.id;
        //   changing status auto 

        // fetching the current status of the user 
            const product1 = await Product.findById(id);
            if(product1.status == 1)
                product1.status = 2;
            else
                product1.status = 1;

            // updating the status 
            const product = await Product.findByIdAndUpdate(id, product1);

            if(!product)
            console.log("No data found!!");

            const product2 = await Product.findById(id);
            console.log("Status Changed !!");
            res.json(product2);

    } catch (error) {
        res.status(400).send(error);
    }
}


const DeleteSingleUser = async(req, res)=>{
    try {
        console.log("del");
        const id = req.params.id;
        // deleting by id 
        const product = await Product.findByIdAndDelete(id, req.body);
        // giving the current date and deletedby user 
        product.deletedAt = Date.now();
        product.deletedBy = product.firstName+" "+product.lastName;
        console.log("User Deleted Successfully!");
        res.send(product)

    } catch (error) {
        res.status(400).send(error);
    }
}


const DeleteAllSeletectedUser = async(req, res)=>{
    try {
            console.log("del");
        const id = req.body.DeleteArray;
        const result = []

        for(let i = 0;i<id.length;i++){
            let product = await Product.findByIdAndDelete(id, req.body)
            product.deletedAt = Date.now();
              // giving the current date and deletedby user 
            product.deletedBy = product.firstName+" "+product.lastName;
            result[i] = product;
            console.log("Deleted");
        }

        // sending the response in an array format which has json data for each index
        res.send(result)

    } catch (error) {
         res.status(400).send(error);
    }
}

module.exports = {AddUser, GetAllUser, GetUserId, UpdateById, UpdateStatus, DeleteSingleUser, DeleteAllSeletectedUser};


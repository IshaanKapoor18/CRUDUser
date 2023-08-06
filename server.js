const express = require("express");
const Product = require("./model/usermodel");
const app = express();
const mongoose = require("mongoose");
const { AddUser, GetAllUser, GetUserId, UpdateById, UpdateStatus, DeleteSingleUser, DeleteAllSeletectedUser } = require("./routes/UserRoutes");



app.use(express.json())

app.get("/", (req, res)=>{
    res.send({message: "Into User-Root get"})
})

// Adding the data http://localhost:3000/add

app.post("/add", AddUser);

// Getting all the data http://localhost:3000/get

app.get("/get", GetAllUser);

// getting data by id http://localhost:3000/get/:id

app.get("/get/:id", GetUserId);

// update the user- http://localhost:3000/update/:id

app.put("/update/:id", UpdateById)

// statsus change -  http://localhost:3000/statusChange/:id
app.put("/statusChange/:id", UpdateStatus)


// deleting the user single (id) http://localhost:3000/del/:id
app.delete("/del/:id", DeleteSingleUser)


// multiple deletion http://localhost:3000/deleteMuti

app.delete("/deleteMuti", DeleteAllSeletectedUser)


mongoose.connect("mongodb+srv://ishaankpr12345:123@cluster0.u0ggr6u.mongodb.net/BACKEND-CRUD?retryWrites=true&w=majority")
.then(()=>{
    console.log("connected To Database");
})
app.listen(3000, ()=>{
    console.log("Port: 3000");
})
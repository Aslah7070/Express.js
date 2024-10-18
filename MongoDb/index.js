const express=require("express");
const app=express()

const MongoClient = require('mongoose')

MongoClient.connect('mongodb://localhost:27017') .then(()=>{
  console.log("connected");
  
}).catch((err)=>{
console.log(err);

})
app.get("/",(req,res)=>{
    res.send("hello world")
})

app.listen(3000,()=>{
    console.log("started");
    
})
const express=require("express");
const route=express.Router();
route.get("/",(req,res)=>{
    res.send("get the users")
})

route.post("/",(req,res)=>{
    res.send("post the users")
})

route.put("/",(req,res)=>{
    res.send("put the users")
})

route.delete("/",(req,res)=>{
    res.send("delete the users")
})

module.exports=route
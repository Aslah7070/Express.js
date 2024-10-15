const express=require("express");
let path=require("path")
let app=express()
app.get("/",(req,res)=>{
    // res.send("hedfnv")
    res.sendFile(path.join(__dirname,"index1.html"))
})
app.get("/about",(req,res)=>{
    res.send("about page")
})
app.get("*",(req,res)=>{
    res.send("page not found")
})

app.listen(3000,()=>{
    console.log("server started");
    
})
const express=require("express");
const path=require("path")

const app=express()
app.get("/",(req,res)=>{
res.download(path.join(__dirname,"sample.txt"))
})
app.use(express.static(path.join(__dirname,"Public")))

app.get("/content",(req,res)=>{
    console.log("dfajd");
    
    res.sendFile(path.join(__dirname,"index.html"))
    })
app.listen(3001,()=>{
    console.log("hello world");
    
})
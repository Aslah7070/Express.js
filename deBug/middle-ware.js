let express=require("express");
 const app=express();
 const Token=require("./middleWare/token")
 const validation=require("./middleWare/validatioln")
 let middleWres=[Token,validation]


 app.use(DateGenerator)
 app.get("/home",middleWres,(req,res)=>{
    console.log("home page");
    
    res.send("home page")
 })
 app.get("/second",(req,res)=>{
    // console.log("home page");
    
    res.send("second page")
 })
function DateGenerator(req,res,next){
console.log(new Date());
next()

}

 

 app.listen(3000,()=>{
    console.log("server started");
    
 })
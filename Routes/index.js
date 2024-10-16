
const express=require("express");
const app=express();
const productRoutes=require("./products-rout")
const userRoutes=require("./user-Routes")

app.use("/products",productRoutes)
app.use("/users",userRoutes)
app.listen(3000,()=>{
    console.log("server started");
    
})
let express=require("express");
let app=express()

app.get("/product",(req,res)=>{
 res.send("all products")
})
app.get("/product/laptop",(req,res)=>{
    res.send("laptops")
   })

   app.get("/product/mobiles",(req,res)=>{
    res.send("mobiles")
   })

app.get("/product/:category/:brand",(req,res)=>{
    const {category,brand}=req.params;

    res.send(`product${category} and brand ${brand}`)
    if(category==="laptop"){
        res.send("laptops")
    }else if(category==="mobiles"){
        res.send("mobiles")
    }else {
        res.send("othre")
    }

    

})

app.get("/flights/:from-:to",(req,res)=>{
    const {from,to}=req.params
    console.log(from,to);
    
    res.send(`flight from ${from} to ${to}`)
})
app.get("/place/:state.:dis",(req,res)=>{
    const {state,dis}=req.params
     console.log(`I from ${dis} in ${state}`);
    
    res.send(`I from ${dis} in ${state}`)
})


   



app.listen(3001,()=>{
    console.log("started");
    
})
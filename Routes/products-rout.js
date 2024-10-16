const express=require("express");
const router=express.Router()


router.get("/",(req,res)=>{
    res.send("all productsssss")
})
router.get("/details",(req,res)=>{
    res.send("all details")
})
router.put("/",(req,res)=>{
    res.send("all products put update")
})
router.post("/",(req,res)=>{
    res.send("all products post update")
})
router.delete("/",(req,res)=>{
    res.send("all products deleted")
})

module.exports=router
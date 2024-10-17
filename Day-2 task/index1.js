const express=require("express");
const app=express();
app.use(express.json())
let array=[]
app.get("/users",(req,res)=>{
 res.send(array)
   
})

app.post("/users",(req,res)=>{
const a=req.body
console.log(a);
const {name,place,email}=req.body

let obj={
id:array.length+1,
name,
place,
email
}

array.push(obj);

res.status(201).json({message:"user added",user:obj})
})
app.put("/users/:id",(req,res)=>{
    const userID=parseInt(req.params.id);
    console.log(userID);
    const {name,place,email}=req.body
    
   const userIndex= array.findIndex((data)=>data.id===userID);
   if(array.length===-1){
    return res.status(404).json({message:"user not found"})
    
   }
   const updatedData={ id: userID, name, place, email }
   array[userIndex] = updatedData;
   res.json({ message: 'User updated successfully',array:updatedData})

})

app.delete("/users/:id",(req,res)=>{
   const userID= parseInt(req.params.id);
   console.log(userID);
   
   const userIndex=array.findIndex((data)=>data.id===userID);

   if(array.length==-1){
    res.status(404,{message:"page not found"})
   }

   array.splice(userIndex,1);
   res.send("removed success fully")

})


app.get("/users/:id",(req,res)=>{
  const userID=  parseInt(req.params.id);
 const user= array.find((data)=>data.id===userID);
 if(!user){
   return res.status(404,{message:"page not found"})
 }
 res.json(user)

})
app.listen(3000,()=>{
    console.log("server started");
    
})
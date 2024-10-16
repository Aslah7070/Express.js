function Token(req,res,next){
    console.log("token created");
   //  console.log(req);
    
    setInterval(()=>{
       const TOKEN="123"
       req.token=Token;
       // console.log(req.token);
       
     next() 
    },2000)    
}
module.exports=Token
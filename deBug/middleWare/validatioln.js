function validation(req,res,next){
    if(req.token){
console.log("Token aproved");
next()
return 

    }
    console.log("token created");
     next()     
}
module.exports=validation
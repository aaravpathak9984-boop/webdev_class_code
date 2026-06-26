const gold=(req,res,next)=>{
    console.log("client is using premimum gold services");
    next();
}

module.exports=gold;
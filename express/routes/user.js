const { Router }=require("express");
const userRouter=Router()

userRouter.post("/signup",(req,res)=>{
    res.json("Signing you up");
})
userRouter.post("/signin",(req,res)=>{
    res.json({ message:"Signing in"})
})
userRouter.get("/purchase",(req,res)=>{
    res.json("these are the purchased courses");
})

module.exports={
    userRouter:userRouter
}

const {Router}=require("express");
const adminRouter=Router();
const {userModel,adminModel,courseModel,purchaseModel}=require("../db")

adminRouter.post("/signup",(req,res) =>{
    const {email, password,firstName,lastName}=req.body;

    adminModel.create({
        email:email,
        password:password,
        firstName:firstName,
        lastName:lastName

    })
    res.json({
        message:"SignUp Completed"
    })

})
adminRouter.post("/signin",(req,res) =>{
    const {email, password}=req.body;

   const admin= adminModel.findOne({
        email:email,
        password:password
    })
    if(admin)
    {
        res.json({message:"you are logged in"})
    }

})
adminRouter.put("/course",(req,res) =>{
    res.json("courses")

})
adminRouter.get("/courses/bulk",(req,res) =>{
    res.json("all course")

})

module.exports={
    adminRouter:adminRouter
}
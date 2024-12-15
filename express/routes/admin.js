const {Router}=require("express");
const adminRouter=Router();

adminRouter.post("/signup",(req,res) =>{
    res.json("SignUp")

})
adminRouter.post("/signin",(req,res) =>{
    res.json("Signin")

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
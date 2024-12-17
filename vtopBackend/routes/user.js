const { Router} = require("express");
const UserRouter=Router();
const {UserModel,coursesModel,regCoursesModel}=require("../db");

UserRouter.post("/signup",async (req,res)=>{
    const {email,password,firstName,lastName}=req.body;

    await UserModel.create({
        email:email,
        password:password,
        firstName:firstName,
        lastName:lastName
    });

    res.json({
        message:"User is created"
    });


});

UserRouter.post("/signin",async (req,res)=>{
    const{email,password}=req.body;
    const user=await UserModel.findOne({
        email:email,
        password:password
    })
    if(user)
    {
        res.json({message:"user is signed in"});
    }
    else
    {
        res.json({message:"credentials invalid"});
    }
});

UserRouter.post("/registerCourse",async (req,res)=>{
    const {userId,courseId}=req.body;
   await regCoursesModel.create({
        userId:userId,
        courseId:courseId
    })
    res.json("course is registered");
})

UserRouter.get("/courses",(req,res)=>{
    const courses=coursesModel.find({})
    res.json(courses);
})

UserRouter.get("/attendence",async (req,res)=>{
    const {courseId,userId}=req.body;
    const course=await regCoursesModel.findOne({
        userId:userId,
        courseId:courseId
    })

    const noOfAttendedClasses=course.noOfAttendedClasses;
    const noOfClasses=course.noOfClasses;

    res.json({
        noOfAttendedClasses,
        noOfClasses
    })
})

module.exports({
    UserRouter:UserRouter
})


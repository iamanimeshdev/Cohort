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

UserRouter.get("/courses",async (req,res)=>{
    const courses=await coursesModel.find({})
    res.json(courses);
})

UserRouter.get("/registeredCourses",async (req,res)=>{
    const {userId}=req.body;
   const courses=await regCoursesModel.find({
        userId:userId
    })
    res.json(courses);
})

UserRouter.get("/attendence",async (req,res)=>{
    const {courseId,userId}=req.body;
    const course=await regCoursesModel.findOne({
        userId:userId,
        courseId:courseId
    })

    // const noOfAttendedClasses=course.attendence.noOfAttendedClasses;
    // const noOfClasses=course.attendence.noOfClasses;

    res.json(course.attendence)
})

module.exports={
    UserRouter:UserRouter
}


const { Router} = require("express");
const facultyRouter=Router();
const {UserModel,coursesModel,regCoursesModel}=require("../db");

facultyRouter.post("/signup",async (req,res)=>{
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

facultyRouter.post("/signin",async (req,res)=>{
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


facultyRouter.get("/courses",async (req,res)=>{
    const courses= await coursesModel.find({})
    res.json(courses);
})

facultyRouter.put("/updateAttendence",async (req,res)=>{
    const { courseId, userId, noOfAttendedClasses, noOfClasses } = req.body;
    const updatedCourse = await regCoursesModel.updateOne(
        { courseId: courseId, userId: userId }, 
        {
                "attendence.noOfAttendedClasses": noOfAttendedClasses,
                "attendence.noOfClasses": noOfClasses,
    
        }
    )
    res.json({
        message:"attendence is updated"
    })
})

module.exports={
    facultyRouter:facultyRouter
}


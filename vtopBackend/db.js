const mongoose =require("mongoose");
const Schema=mongoose.Schema;

const ObjectId=mongoose.Types.ObjectId;


const userSchema=new Schema({
    email:String,
    password:String,
    firstName:String,
    lastName:String,

});

const courses=new Schema({
    courseName:String,
    courseId:String,
    facultyName:String
});

const regCourses=new Schema({
    courseId:String,
    userId:ObjectId,
    attendence:
    {
        noOfClasses:Number,
        noOfAttendedClasses:Number

    }
});

const UserModel=mongoose.model("user",userSchema);
const coursesModel=mongoose.model("courses",courses);
const regCoursesModel=mongoose.model("regCourse",regCourses);

module.exports={
    UserModel,coursesModel,regCoursesModel
}


const express = require("express")
const app=express()
app.use(express.json());

const { userRouter } = require("./routes/user");
const { courseRouter } = require("./routes/course");
const { adminRouter } = require("./routes/admin");


app.use("/api/v1/user",userRouter);
app.use("api/v1/course",courseRouter);
app.use("api/v1/admin",adminRouter)

app.get("/",(req,res)=>
{
    res.json({message:"This is the landing page"});
})

app.listen(3000);
console.log("listening on port 3000")
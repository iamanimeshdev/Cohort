const express=require("express");
const app=express();
app.use(express.json());
const mongoose=require("mongoose");

const{ UserRouter}=require("./routes/user");
const{facultyRouter}=require("./routes/faculty");

app.use("/vtop/user",UserRouter);
app.use("/vtop/faculty",facultyRouter);

async function main()
{
    await mongoose.connect("mongodb+srv://iamanimeshdev:@cluster0.tbloq.mongodb.net/");
    console.log("Db connected");
    app.listen(3000);
    console.log("app is listening on 3000")


}

main()

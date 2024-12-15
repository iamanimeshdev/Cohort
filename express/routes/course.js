const { Router }=require("express");
const courseRouter=Router();

courseRouter.post("/purchase",(req,res)=>
{
    res.json("courses purchased");
})
courseRouter.get("/preview",(req,res)=>
    {
        res.json("courses preview");
    })

    module.exports=
    {
        courseRouter:courseRouter
    }
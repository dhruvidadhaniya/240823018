const express=require('express');
const app=express();

app.get("/",(req,res)=>{
    res.send("hello ,mac class!");
});
app.listen(80,()=>{
    console.log("server is running at http://localhost:80/");
});
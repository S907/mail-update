const express= require('express');
const path=require('path');
const app =express();

app.use(express.static(path.join(__dirname,"..", "dist")));

app.all("*", (req,res)=>{
    res.sendFile(path.join(__dirname,"..","dist","index.html"));
})
console.log('Working');
module.exports=app;
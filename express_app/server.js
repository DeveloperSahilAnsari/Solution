const express=require("express");
var app=express();
var path=require("path");


app.get('/',(req,resp)=>{
    resp.send("welcome to my world");


});


app.listen(3000);
console.log("Server started at port no 3000");
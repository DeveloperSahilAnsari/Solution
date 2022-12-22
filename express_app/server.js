const express=require("express");
var app=express();
var path=require("path");


app.get('/',(req,resp)=>{
    resp.send("welcome to my world");


});

app.get('/sahil',(req,resp)=>{
resp.send("this is Sahil")
});

app.get('/arbaj',(req,resp)=>{
    resp.send("this is arbaj shaikh website of express.js iacsd web development")
    });


app.listen(3000);
console.log("Server started at port no 3000");
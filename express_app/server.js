const express=require("express");
const { dirname } = require("path");
var app=express();
var path=require("path");



app.get('/',(req,resp)=>{
    resp.send("welcome to my world");


});
app.get('/form',(req,resp)=>{
    resp.sendFile("public/index.html",{root:__dirname});

});

app.get('/hello',(req,resp)=>{
    resp.sendFile("public/hello.html",{root:__dirname})
}
)



app.listen(3000);
console.log("Server started at port no 3000");
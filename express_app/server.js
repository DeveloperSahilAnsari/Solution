const express=require("express");
const { dirname } = require("path");
var app=express();
var path=require("path");



app.get('/',(req,resp)=>{
    resp.send("welcome to my sufiyan");


});
app.get('/form',(req,resp)=>{
    resp.sendFile("public/index.html",{root:__dirname});

});

app.get('/hello',(req,resp)=>{
    resp.sendFile("public/hello.html",{root:__dirname})
}
)


app.get('/sahil',(req,resp)=>{
resp.send("this is Sahil")
});

app.get('/arbaj',(req,resp)=>{
    resp.send("this is arbaj shaikh website of express.js iacsd web development")
    });

    app.get('/parth',(req,resp)=>{
        resp.send("this is parth")
        });

         app.get('/dhruv',(req,resp)=>{
        resp.send("this is Dhruv")
        });
    
        app.get('/shubham',(req,resp)=>{
            resp.send("this is Shubham")
            });
        

app.listen(3000);
console.log("Server started at port no 3000");
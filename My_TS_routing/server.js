// import dependency module
var express=require('express');
var bodyParser=require('body-parser');
var path=require('path');


const app=express();
//configure HTTP pipeline 

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

var routes=require("./router");
routes(app);

var staticFolder=express.static(path.join(__dirname,"public"));
app.use(staticFolder);

app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname + '/index.html'));
});

// app.get("/timesheet", (req, res)=>{
//     res.sendFile(path.join(__dirname + '/form.html'));
// });

app.listen(3000);
console.log("ShoppingCart Web App is listening on port 3000");
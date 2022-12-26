//import dependency module
var express = require('express');
var session =require('express-session');
var bodyParser=require('body-parser');
var parseurl=require('parseurl');
var path=require('path');
const app = express();

// //configure HTTP pipeline 
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

 var routes=require("./router");
routes(app);

var staticFolder=express.static(path.join(__dirname,"public"));
app.use(staticFolder);

app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname + '/welcome.html'));
});


app.listen(3001);
console.log("timesheet is running on port 3001");
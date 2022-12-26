var path=require('path');

exports.login=function(req,res){

    console.log("timesheet login page");
    res.sendFile("login.html" , {root:__dirname});
};
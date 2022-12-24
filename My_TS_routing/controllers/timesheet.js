
var path=require('path');

exports.hello=function (req, res){
    console.log("timesheet form");
    res.sendFile("form.html" , {root:__dirname});

    };
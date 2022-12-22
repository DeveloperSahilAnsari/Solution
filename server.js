var http = require('http');
//create a server object
 http.createServer(function(req,res)
 {
    res.write('<h1>hello world!!!</h1>');
    res.end();
 }).listen(8000);
 console.log("welcome to my website of express js");
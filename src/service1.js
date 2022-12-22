var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('parent company of genzchain chain is genflow and sister of genzchain is Rp acquisitions .');
}).listen(8080);
console.log("i am founder of genzchain pvt ltd ");
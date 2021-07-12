const http = require("http");
 const routes= require('./routes')
// function reqListner(req, res) {}

const server = http.createServer(routes);
  // console.log(req);
  // console.log(req.url, req.method, req.headers);
  // console.log("this is serer by ashu");
  // process.exit();

  //setting response


 


server.listen(7000);

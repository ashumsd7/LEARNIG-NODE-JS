// const http = require("http");
//importing express
const express = require("express");

//calling express function and having all
//properties inside app value
const app = express();

//First Middle Ware
app.use((req, res, next) => {
  console.log("FIRST MIDDLEWARE: server is started using express js :MIDDLEWARE");
  next()
})

//2nd Middle ware
app.use((req, res, next) => {
  console.log(":2nd MIDDLEWARE : server is started using express js ");
  res.send('<h1>Hello from express</h1>')
});



// const server = http.createServer(app);
// server.listen(7000);

app.listen(700)

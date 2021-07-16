const path = require('path')
//importing express
const express = require("express");
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');
 const shopRoutes = require("./routes/shop");






app.use(express.urlencoded({ extended: true }));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

// app.use('/', (req, res, next) => {
//   res.send("<h1>This is home page</h1>")
// })

app.use( (req, res, next) => {
  // res.status(404).send('<h2>Page Not Found</h2>')
  res.sendFile(path.join(__dirname,'views', '404.html'));
})

 


app.listen(700)

const path = require ('path')
const express = require('express')

const rooDir= require('../util/path')
const router = express.Router();

//app.post or app.get for GET and 
router.get("/add", (req, res, next) => {
  console.log(":1st MIDDLEWARE : server is started using express js ");
//   res.send(
//     '<form action="/admin/products" method="POST" ><input type="text" name="my-input" /> <button type="submit">Sumbit</button></form>'
//   );
    
    res.sendFile(path.join(rooDir, "views", "add-product.html"));
});







// app.use()

router.post("/products", (req, res, next) => {
    console.log(req.body);
    console.log("working,,,,,,,,");
    console.log("redirectinggggg");
  res.redirect("/");
});




module.exports = router;
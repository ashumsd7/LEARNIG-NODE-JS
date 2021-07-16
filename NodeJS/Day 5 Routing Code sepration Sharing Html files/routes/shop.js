const path = require('path')
const express = require('express')


const router = express.Router();

// Middle ware
router.use("/", (req, res, next) => {
  console.log(":2nd MIDDLEWARE : server is started using express js ");
//   res.send("<h1>Hello from Express5</h1>");
    // res.sendFile('../views/shop.html')

    res.sendFile(path.join(__dirname,'../','views', 'shop.html'))
});


module.exports = router;

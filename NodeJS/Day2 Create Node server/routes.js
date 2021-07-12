const fs = require("fs");

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Enter Message</title></head>");
    res.write(
      "<head><form method='POST' action='/message'><input name='msg' type='text'><button type='submit'>Submit</button></form></head>"
    );
    res.write("</html>");
    return res.end();
  }

  if (url === "/message" && method == "POST") {
    // console.log(hello);

    //concept of streams and buffers
    const body = [];
    //when node start parsing data
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    //when node ends parsing data and buffering starts
    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const sentMsg = parsedBody.split("=")[1];
      console.log(sentMsg);
      // fs.writeFileSync("message.txt", sentMsg);
      fs.writeFile("YOUR_FILE_NAME", sentMsg, (err) => {
        res.statusCode = 302;
        res.setHeader("Location", " / ");
        return res.end();
      });
    });
    // res.writeHead(302,{})
  }

  //free code if no conditions met

  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>This is from server side</title></head>");
  res.write("<body><h1>Hello My name is Jack</h1></body>");
  res.write("</html>");
  res.end();
};
    
// _____different ways to rxport modules___


module.exports = requestHandler;
// module.exports = {
//   handler: requestHandler,
//   // otherProp: OtherValue
// }


// module.exports.handler= requestHandler
// exports.handler = requestHandler;
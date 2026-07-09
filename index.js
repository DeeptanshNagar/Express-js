// this file will act like a server
const express = require("express");
const app = express();

// console.dir(app);

let port = 8080;

app.listen(port, () => {
  // webserver is open for taking requests at port no 3000 but it wont respond as of now.
  console.log(`app listening on port ${port}`);
});

app.use((req, res) => {
  //   console.log(req); // returns an object
  console.log("request recieved");
  //   res.send("this is a basic response");
  //   res.send({
  // 	name: "apple",
  // 	color: "red",
  //   });
  let code = "<h1>FRUITS</h1> <ul> <li>apple</li> <li>orange</li> </ul>";
  res.send(code);
});

// some points that matter -
// When you send a request to an API through a URL, it is initially in text format (an HTTP request). Express automatically converts this text into a JavaScript object using its built-in parsing features, making it easier to work with in your code.

// to send response we use : res.send()
// It sends the HTTP response.
// we can send a buffer object, a string, an object, Boolean or an Array in response. (response is generated in json format)
// we can also send a HTML response inside a string structure.

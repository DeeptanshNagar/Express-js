// this file will act like a server
const express = require("express");
const app = express();

// console.dir(app);
app.use(express.json());

let port = 8080;

app.listen(port, () => {
  // webserver is open for taking requests at port no 3000 but it wont respond as of now.
  console.log(`app listening on port ${port}`);
});

/*
// app.use
app.use((req, res) => { // listens for all type of requests
  //   console.log(req); // returns an object
  console.log("request recieved");
  //   res.send("this is a basic response");
  //   res.send({ // express converts these objects into json representation while sending response.
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
*/

// app.get
// if a request comes from a particular path then you can't send multiple responses on that same path.

app.get("/", (req, res) => {
  res.send("you contacted root path");
});

app.get("/:username/:id", (req, res) => {
  //   console.log(req.params);
  let { username, id } = req.params;
  let htmlStr = `<h1>welcome to the page of @${username}!</h1>`;
  res.send(htmlStr);
});

app.get("/search", (req, res) => {
	// console.log(req.query);
	let {q} = req.query;
	if(!q) {
		res.send(`<h1>Nothing searched</h1>`);
	}
	res.send(`<h1>search results for query: ${q}</h1>`);
});

/*
app.get("/apple", (req, res) => {
  res.send("you contacted apple path");
});

app.get("/orange", (req, res) => {
  res.send("you contacted orange path");
});

// app.post
app.post("/", (req, res) => {
  res.send("hello, I am root");
});
*/
//----------------------------------------------------------------
/*
// In Express 5, "*" is no longer a valid path pattern.
app.get("*", (req, res) => { // error
	res.send("this path does not exist");
});
*/

/*
// Also
app.all("*", (req, res) => { // error
  res.send("this path does not exist");
});
 //This is happening because you're using Express 5 (or a newer router version), where "*" is no longer a valid route pattern due to changes in path-to-regexp.
 */

// Use a fallback middleware instead of "*"
// app.use((req, res) => {
//   res.status(404).send("this path does not exist");
// }); // This works perfectly as a catch-all for unknown routes

// Nodemon : to automatically restart server with code changes

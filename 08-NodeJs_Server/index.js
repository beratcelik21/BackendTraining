"use strict";

/*
NodeJs SERVER
*/

require("dotenv").config();
const PORT = process.env.PORT || 8000;
const HOST = process.env.HOST || "127.0.0.1";
// console.log("welcome")
const http = require("node:http");
//*http.createServer((param1, param2) => {});
//*http.createServer((request, response) => {});
/*http
  .createServer((req, res) => {
    res.end("<h1>WELCOME TO NODEJS SERVER </h1>");
  }).listen(8000, () => console.log(`server runned :http://${HOST}:${PORT}`))*/
//   .listen(8000, () => console.log("server runned :http://127.0.0.1:8000"));

const app = http.createServer((req, res) => {
  /*
  console.log(req.method);
  console.log(req);
 
  console.log("**************");
  console.log(req.url);
  */
  //? end points home: /, list: /list, test: /test
  /*if (req.url == "/"){
    res.end("<h1>Home Page</h1>")
  } else if (req.url == "/list"){
    res.end("<h1>List Page</h1>")
  } else if (req.url == "/test"){
    res.end("<h1>Test Page</h1>")
  }*/

  /*if (req.url == "/"){
    res.write("This ")
    res.write("is ")
    res.write("My ")
    res.write("Home ")
    res.write("Page")
    res.end()
  } else if (req.url == "/list"){
    res.end("<h1>List Page</h1>")
  } else if (req.url == "/test"){
    res.end("<h1>Test Page</h1>")
  }*/

  if (req.url == "/") {
    console.log();

    if (req.method == "GET") {
      res.write("This ");
      res.write("is ");
      res.write("My ");
      res.write("Home ");
      res.write("Page");
      res.end();
    } else if (req.method == "POST") {
      res.statusCode = 400;
      res.statusMessage = "Post Yapilamaz";
      res.end(" Can Not Use this Method");
    } else if (req.method == "DELETE") {
      res.writeHead(405, "Silme islemi yapilamaz.", {
        "Content-Type": "text/html",
        "another-header": "anothercontent",
      });
      res.end(" Can Not Use this Method");
    } else res.end(" Can Not Use this Method");
  } else if (req.url == "/list") {
    const obj = {
      error: false,
      message: "This is list page",
      Deneme: "Deneme",
    };
    res.end(JSON.stringify(obj));
  } else if (req.url == "/test") {
    res.end("<h1>Test Page</h1>");
  }
});
app.listen(8000, () => console.log(`server runned :http://${HOST}:${PORT}`));

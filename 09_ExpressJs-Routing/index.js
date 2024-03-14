"use strict";
/*--------------------------------------------- 
          ExpressJs ROUTING
/*--------------------------------------------- */
require("dotenv").config();

const PORT = process.env?.PORT || 8000;
const HOST = process.env?.HOST || "127.0.01";

const express = require("express");

const app = express(); //express uzerinde bir server olusturduk

/*--------------------------------*
app.get("/",(req,res)=>{
    res.write("hello")
    res.end()
    
})
/*--------------------------------*
app.get("/", (req, res) => {
  res.write(JSON.stringify({ message: "hello" }));
  res.end();
});
/*--------------------------------*
app.get("/",(req,res)=>{
  
   
     res.send({"message":"Helo"})
})

app.listen(PORT, HOST, () =>
  console.log(`Server runned http://${HOST}:${PORT}`)
);
/*--------------------------------*
app.post("/", (req, res) => {res.send({ message: "Post method called" });});
app.put("/", (req, res) => {res.send({ message: "Put method called" });});
app.delete("/", (req, res) => {res.send({ message: "Delete method called" });});

app.all("/", (req, res) => {res.send({ message: "Delete method called" });})

app.listen(PORT, HOST, () => console.log(`Server runned http://${HOST}:${PORT}`));
/*--------------------------------*
//? Butun methodları calıstırır
app.all("/", (req, res) => {res.send({ message: "Delete method called" });})

app.listen(PORT, HOST, () => console.log(`Server runned http://${HOST}:${PORT}`));
/*--------------------------------*
app.get("/drive1/drive2", (req, res) => {res.send({ message: "Get method called" });});
app.listen(PORT, HOST, () => console.log(`Server runned http://${HOST}:${PORT}`));
/*--------------------------------*
//?Joker Characters
// app.get("/", (req, res) => {res.send({ message: "Get method called" });});
//Araya karakter ne olursa
app.get("/ab(*)?12", (req, res) => {
  res.send({ message: "Get method called" });
});
app.listen(PORT, HOST, () =>
  console.log(`Server runned http://${HOST}:${PORT}`)
);
/*--------------------------------*
//? Sonuna ne gelirse gelsin
app.get("/ab*", (req, res) => {
    res.send({ message: "Get method called" });
  });
  app.listen(PORT, HOST, () =>
    console.log(`Server runned http://${HOST}:${PORT}`)
  );
/*--------------------------------*
//!Regex
//? İki / arasında regex kabul edilir. kullanma
//* app.get("/abc$/", (req, res) => { res.send({ message: "end with any" }); });//Sonu ne olursa olsun
//* app.get(/abc/, (req, res) => { res.send({ message: "start with any" }); });//Bası ve sonu ne olursa ne olursa olsun
//* app.get(/\/*abc/, (req, res) => { res.send({ message: "start with any" }); });//Bası ne olursa olsun
app.get(/abc/, (req, res) => { res.send({ message: "find abc in path" }); });
app.listen(PORT, HOST, () =>
    console.log(`Server runned http://${HOST}:${PORT}`)
  );
/*--------------------------------*
//!URL PAREMETERS
app.get("/:blogId/location/:location", (req, res) => {
  res.send({ 
    params: req.params,
    blogId: req.params.blogId});
});

app.listen(PORT, HOST, () =>
  console.log(`Server runned http://${HOST}:${PORT}`)
);
/*--------------------------------*
app.get("/:blogId/location/:location", (req, res) => {
  res.send({
    params: req.params,
    blogId: req.params.blogId,
    url: {
      protocol: req.protocol,
      domain: req.hostname,
      method: req.method,
      url: req.url,
      path: req.path,
      params: req.params,
      body: req.body,
      query: req.query,
      header: req.headers,
    },
  });
});

app.listen(PORT, HOST, () =>
  console.log(`Server runned http://${HOST}:${PORT}`)
);
/*--------------------------------*
// app.get("/:userId", (req, res) => {
// app.get("/:userId[0-9]", (req, res) => {//? sadece rakamlardan id olsun
// app.get("/:userId[\\d]+", (req, res) => {
// app.get("/:userId[\\D]+", (req, res) => {
app.get("/:userId-:username", (req, res) => { //? Birden fazla parametre koyma


  res.send({
    userId: req.params.userId,
    username:req.params.username,
    body: req.body,

    url: {
      protocol: req.protocol,
      domain: req.hostname,
      method: req.method,
      url: req.url,
      path: req.path,
      params: req.params,
      query: req.query,
      header: req.headers,
    },
  });
});

app.listen(PORT, HOST, () =>
  console.log(`Server runned http://${HOST}:${PORT}`)
);
/*--------------------------------*
app.get("/", (req, res) => {

  res.status(200).send({
      message:"Tebriklr uye olmussunuz."
  });
});
app.post("/", (req, res) => {res.status(201).send({ message: "Post method called" });});
app.put("/", (req, res) => {res.status(202).send ({ message: "Put method called" });});
app.delete("/", (req, res) => {res.status(202).send({ message: "Delete method called" });});


app.listen(PORT, HOST, () =>
  console.log(`Server runned http://${HOST}:${PORT}`)
);
/*--------------------------------*
//! Redirect   //* Sadece 300 lu kodlar
app.get("/", (req, res) => {
  res.redirect(301, "");
  // res.redirect(302, "/about");
});

app.listen(PORT, HOST, () =>
  console.log(`Server runned http://${HOST}:${PORT}`)
);
/*--------------------------------*
//!Show file content

app.get("/file", (req, res) => {
  res.sendFile(__dirname + "/package.json");
});

app.listen(PORT, HOST, () =>
  console.log(`Server runned http://${HOST}:${PORT}`)
);
/*--------------------------------*
//!File download
app.get("/download", (req, res) => {
  res.download("readme.md", "express routing");
});

app.listen(PORT, HOST, () =>
  console.log(`Server runned http://${HOST}:${PORT}`)
);
// /*--------------------------------*/
//!File download
app.get("/download", (req, res) => {
  res.download("./test/abouttest.md", "express routing");
});

app.listen(PORT, HOST, () =>
  console.log(`Server runned http://${HOST}:${PORT}`)
);
/*--------------------------------*/

const express = require("express");
const app =express();
const PORT=4000;
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
  app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/index.html");
  });
     
  app.get("/curcle",(req,res)=>{
    res.sendFile(__dirname + "/curcle.html");
  });

  app.get("/triangle",(req,res)=>{
    res.sendFile(__dirname + "/triangle.html");
  });
  app.post("/triangle",(req,res)=>{
    const height = req.body. height;
    const base = req.body. base;
    const area = 0.5 *base * height;
    res.send ('<h2>Area of triangle is : {area} </h2>');
  });

  app.post("/curcle",(req,res)=>{
    const radius = req.body. radius;
    const area = Math.PI*radius*radius;
    res.send ('<h2>Area of curcle is : ${curcle} </h2>');
  });











app.listen(PORT,()=>{
    console.log("server is server");
});
const express = require("express");
const http = require("http");

const bodyParser = require('body-parser')

const app = express();


app.use(bodyParser.urlencoded());//this will parse the form with this ,here automatically next 

app.use("/", (req, res, next) => {
// console.log("This always runs");
next();
});

app.use("/add-product", (req, res, next) => {
  // console.log("Inside add-product routes");
  res.send(`<form action='/product' method="POST"><input type='text' name='title'><button type='submit'>Add Product</button></form>`);
});
  
app.use('/product',(req,res,next)=>{
  // getting the body of my incoming request  so extracting what the user sents me  and for this express.js now have convinience features for that
  console.log(req.body);
  // we will get the value undefined ,but by default request doesn't try to parse the incoming request body to do that we need to register parser and to do that by adding new middleware, and u typically do that before your route handling middlewares because the parsing of the middleware done no matter where ur request ends up for that weneed to install the package npm i --save body-parser
  
  res.redirect('/'); //i can redirect to anything
})

app.use("/", (req, res, next) => {
  // console.log("In the middleware ");
  res.send("<h1>Hello from express!</h1>");
});

app.listen(3000, () => {
  console.log("Server listening");
});

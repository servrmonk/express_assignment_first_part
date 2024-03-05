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
  
// app.use('/product',(req,res,next)=>{
   // getting the body of my incoming request  so extracting what the user sents me  and for this express.js now have convinience features for that
//   console.log(req.body);
   // we will get the value undefined ,but by default request doesn't try to parse the incoming request body to do that we need to register parser and to do that by adding new middleware, and u typically do that before your route handling middlewares because the parsing of the middleware done no matter where ur request ends up for that weneed to install the package npm i --save body-parser
  
//   res.redirect('/'); //i can redirect to anything
// })
// we can use app.get also , app.get allows u to filter for get request, that u can also use app.post
// instead of using use we can also use post and get which is usee to filter
app.post('/product',(req,res,next)=>{
  console.log(req.body);
  res.redirect('/');
})

// app.get('/product',(req,res,next)=>{
//   console.log(req.body);
//   res.redirect('/')
// })

app.use("/", (req, res, next) => {
  // console.log("In the middleware ");
  res.send("<h1>Hello from express!</h1>");
});

app.listen(3000, () => {
  console.log("Server listening");
});

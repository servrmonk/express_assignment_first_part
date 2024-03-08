// what the user see
const express = require("express");
const router = express.Router(); //router object

const path  = require('path')

router.get("/", (req, res, next) => {
  // res.send("<h1>Hello from express!</h1>");
  // instead of sending the text we will send the file
  // res.sendFile('./views/shop.html')//see from the view of app.js. this will refer to our operating system not to the project folder
  // whatever we try upper one will not work we will have to use path from nodejs,so in order to construct the folder to this directory or this path ultimately we can use the feature provided by node js and that is path, we have to import path

  // res.sendFile(path.join(__dirname,'views','shop.html')) //we call join method  , joins return a paths but it constructs the path by concating the different segments. __dirname will holdthe absolute paths on our operating system to this project folder and now we can add commma and addd views folder and than file name, here  __dirname gives us the path to the routes folder  ,dirname gives us the path to the file which we use this we will add ../ one new segment that means go up  one label from here

  res.sendFile(path.join(__dirname,'../','views','shop.html'))


});
module.exports = router;

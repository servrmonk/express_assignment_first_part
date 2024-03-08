const express = require("express");
const router = express.Router();
const path = require("path");

const roodDir = require('../util/path')
// console.log("Inside the rootDir",roodDir); just giving me  res.sendFile(path.join(__dirname, "../", "views", "add-product.html"));

router.get("/add-product", (req, res, next) => {
  // res.sendFile(path.join(__dirname, "../", "views", "add-product.html")); //we can also use .. instead of ../ . but there is even nicer way we can implement this we could also get the parent directory with the help of a little helper function 
  // i am creating the helper fun in util folder path.js

  res.sendFile(path.join(roodDir, "views", "add-product.html"));
});

router.post("/add-product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});
module.exports = router;

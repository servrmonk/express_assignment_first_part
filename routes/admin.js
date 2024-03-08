const express = require("express");
const router = express.Router();
const path = require('path')


router.get("/", (req, res, next) => {
  // res.send(
  //   `<form action='/admin/add-product' method="POST"><input type='text' required name='title'><input type='number' required name='size'><button type='submit' />Add Product</button></form>`
  // );

  res.sendfile(path.join(__dirname,'../','views','add-product.html'));

});

router.post("/add-product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});
module.exports = router;

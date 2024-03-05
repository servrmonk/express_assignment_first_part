// because this should handle the creation of the product which the admin of the shop can do

const express = require("express");
// the feature is router
const router = express.Router(); //this router is like a mini express app tied to the other express app which we can export here

router.get("/add-product", (req, res, next) => {
  res.send(
    `<form action='/product' method="POST"><input type='text' required name='title'><input type='number' required name='size'><button type='submit' />Add Product</button></form>`
  );
});

router.post("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});
module.exports = router;

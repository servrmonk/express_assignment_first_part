// because this should handle the creation of the product which the admin of the shop can do

const express = require("express");
// the feature is router
const router = express.Router(); //this router is like a mini express app tied to the other express app which we can export here

// admin/add-product => GET request

router.get("/add-product", (req, res, next) => {
  res.send(
    `<form action='/admin/add-product' method="POST"><input type='text' required name='title'><input type='number' required name='size'><button type='submit' />Add Product</button></form>`
  );
});

// admin/add-product => POST request

router.post("/add-product", (req, res, next) => { //instead of adding /admin in this page again and again we can dirctly add in app.ja
    // router.post("/admin/add-product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});
module.exports = router;

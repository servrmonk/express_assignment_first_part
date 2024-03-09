const express = require("express");
const router = express.Router();
const path = require("path");

const roodDir = require("../util/path");

router.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(roodDir, "views", "add-product.html"));
});

router.post("/add-product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});
module.exports = router;

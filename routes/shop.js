// what the user see
const express = require("express");
const router = express.Router(); //router object

const path = require("path");

router.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "shop.html")); //we can also use .. instead of ../
});
module.exports = router;

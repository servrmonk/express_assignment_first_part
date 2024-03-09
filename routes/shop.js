// what the user see
const express = require("express");
const router = express.Router();
const path = require("path");

const roodDir = require("../util/path");

router.get("/", (req, res, next) => {
  res.sendFile(path.join(roodDir, "views", "shop.html")); 
});
module.exports = router;

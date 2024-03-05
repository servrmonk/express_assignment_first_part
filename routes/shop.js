// what the user see
const express = require("express");
const router = express.Router(); //router object

router.get("/shop-page", (req, res, next) => {
  res.send("<h1>Hello from express!</h1>");
});
module.exports = router;

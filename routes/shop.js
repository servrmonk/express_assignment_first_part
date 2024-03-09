// what the user see
const express = require("express");
const router = express.Router();

const shopGetController = require("../controllers/products");

router.get("/", shopGetController.shopGet);
module.exports = router;

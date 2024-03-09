const express = require("express");
const router = express.Router();

const getAddProductController = require("../controllers/products");
const postAddProductController = require("../controllers/products");

router.get("/add-product", getAddProductController.getAddProduct);

router.post("/add-product", postAddProductController.postAddProduct);
module.exports = router;

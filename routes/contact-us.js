// what the user see
const express = require("express");
const router = express.Router();
const path = require("path");

const roodDir = require("../util/path");

const contactUsController = require('../controllers/contactUs')

router.get("/",contactUsController.contactUs);
module.exports = router;

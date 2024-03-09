// what the user see
const express = require("express");
const router = express.Router();

const contactUsController = require("../controllers/contactUs");

router.get("/", contactUsController.contactUs);
module.exports = router;

const path = require("path");
const rootDir = require("../util/path.js");

exports.contactUs = (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "contact-us.html"));
};

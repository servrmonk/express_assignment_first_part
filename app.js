const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

const rootDir = require("./util/path.js");

const adminRoutes = require("./routes/admin.js");
const shopRoutes = require("./routes/shop.js");
const contactRoutes = require("./routes/contact-us.js");

const errorController = require('./controllers/404.js')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);
app.use("/shop", shopRoutes);
app.use("/contact", contactRoutes);

app.use(errorController.error);

app.listen(3000, () => {
  console.log("Server listening");
});

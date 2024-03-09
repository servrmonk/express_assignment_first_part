const express = require("express");
const bodyParser = require("body-parser");
const path = require('path')


const app = express();

const rootDir = require('./util/path.js')


const adminRoutes = require("./routes/admin.js");
const shopRoutes = require("./routes/shop.js");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname,'public'))) //express object itself and static  method this is the built in middleware as u can read , here u serve content statically for css ,it serves static files, we will giving the acces to the public folder so we have written the dirnameis public

app.use("/admin", adminRoutes);
app.use("/shop", shopRoutes);

app.use((req, res, next) => {
  
  // res.status(404).send("<h1>Page not found</h1>");
  res.status(404).sendFile(path.join(rootDir,'views','404.html'))
});

app.listen(3000, () => {
  console.log("Server listening");
});

const express = require("express");
const bodyParser = require("body-parser");
// const http = require("http");
const app = express();

const adminRoutes = require("./routes/admin.js");
const shopRoutes = require("./routes/shop.js");

app.use(bodyParser.urlencoded({ extended: false }));

app.use(adminRoutes);
app.use(shopRoutes);

// app.use("/", (req, res, next) => {
// console.log("This always runs");
//   next();
// });
//outsourcing routing: in routes folder

// app.use("/add-product", (req, res, next) => {
//   res.send(
//     `<form action='/product' method="POST"><input type='text' required name='title'><input type='number' required name='size'><button type='submit' />Add Product</button></form>`
//   );
// });

// app.post("/product", (req, res, next) => {
//   console.log(req.body);
//   res.redirect("/");
// });

// app.use("/", (req, res, next) => {
//   res.send("<h1>Hello from express!</h1>");
// });

app.listen(3000, () => {
  console.log("Server listening");
});

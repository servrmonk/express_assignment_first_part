const express = require("express");
const bodyParser = require("body-parser");
// const http = require("http");
const app = express();

const adminRoutes = require("./routes/admin.js");
const shopRoutes = require("./routes/shop.js");

// the request goes from top to buttom 

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/admin',adminRoutes); //starting with admin will go into admin routes file so to say and not only that
app.use('/shop',shopRoutes);

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


// to add a 404 page we simply add a catch all middleware at the bottom where we not need the path  filter but we could add slash, app.use handle all http method not just get request 
app.use((req,res,next)=>{
  
res.status(404).send("<h1>Page not found</h1>") //404 for page no found
})

app.listen(3000, () => {
  console.log("Server listening");
});

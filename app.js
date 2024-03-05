const express = require("express");
const http = require("http");

const app = express();
app.use((req, res, next) => {
  //use allows us to add a new middleware function,use method is preety flexible
  console.log("In the middleware ");
  // use next for next middleware
  next()//allows the request to continue to the next middleware in line
});
app.use((req, res, next) => {
  console.log("In the second middleware ");
  // instead of doing res.write we will use res.send this allows us to add a body which is of type any
  res.send('<h1>Hello From Express</h1>')
});
app.use((req,res,next)=>{
  console.log("In third middleware")
  res.send({ key1: value });
})


// const server = http.createServer(app);
// server.listen(3000,()=>console.log("Server is listening"));

app.listen(3000,()=>{console.log("Server listening");})

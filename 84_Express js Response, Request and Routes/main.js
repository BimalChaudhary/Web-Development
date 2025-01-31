const express = require("express");
const blog = require('./routes/blog')
const shop = require('./routes/shop')

const app = express();
const port = 3000;

app.use(express.static("public"))
app.use('/blog', blog)
app.use('/shop', shop)

app.get("/", (req, res) => {
  console.log("Hey its a get request");
  res.send("Hello World21!");
}).post("/", (req, res) => {
  console.log("Hey its post request");
  res.send("Hello World post!");
}).put("/", (req, res) => {
  console.log("Hey its put request");
  res.send("Hello World put!");
}).delete("/", (req, res) => {
  console.log("Hey its delete request");
  res.send("Hello World delete!");
}).get("/index",(req, res)=>{
  console.log("Hey its get request for index");
  res.sendFile('templates/index.html',{root: __dirname});
})

app.get("/api",(req, res)=>{
  
  res.json({a:1, b:2, c:3, name: ["Bimal", "Dhamlauwha"], Address : ["Bhimdatta-02", "Kanchanpur"]})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

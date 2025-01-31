const express = require("express");
const app = express();
const port = 3000;

app.use(express.static('public'))

// app.get or app.post or app.put or app.delete(path , handler)
app.get("/", (req, res) => {
  res.send("Hello World2!");
});

app.get("/about", (req, res) => {
  res.send("Hello About");
});

app.get("/contect", (req, res) => {
  res.send("Hello Contect");
});

app.get("/blog", (req, res) => {
  res.send("Hello Bolg");
});

app.get("/blog/:slug", (req, res) => {
    // Logic to fetch intro to js from the db
    // For URL: http://localhost:3000/blog/intro-to-hero?mode=dark&region=in
    console.log(req.params); // will output {slug: 'intro-to-hero}
    console.log(req.query); // will output { mode: 'dark', region: 'in' }
  res.send(`hello ${req.params.slug}`);
});

// app.get("/blog/intro-to-js", (req, res) => {
//     // Logic to fetch intro to js from the db
//   res.send("Hello into-to-js");
// });

// app.get("/blog/intro-to-python", (req, res) => {
//     // Logic to fetch intro to js from the db
//   res.send("Hello into-to-python");
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

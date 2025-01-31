const express = require('express')
const app = express()
const port = 3000
const blog = require('./routes/blog')
const fs = require("fs")

// ...

app.use('/blog', blog)

// app.use(express.static('public')) 

// Middleware 1 Logger for a Application
  app.use((req, res, next) => {
    console.log(req.headers)
    req.bimal = "I am Bimal2 Dhamlauwha";
    fs.appendFileSync("logs.txt",`${Date.now()} is ${req.method}\n`)
    console.log(`${Date.now()} is a ${req.method}`)
    // res.send("Hacked by Middleware 1")
    next()
  })
  //Middleware 2
  app.use((req, res, next) => {
    console.log('m2')
    next()
  })

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req, res) => {
  res.send('Hello About!'+ req.bimal)
})

app.get('/contact', (req, res) => {
  res.send('Hello Contact!')
})

app.get('/card', (req, res) => {
  res.send('Hello Crad!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    let siteName = "Adidas";
    let searchText = "Search Now"
    let arr = [5,6,9,"Bimal",55,66]
    res.render("index",{siteName: siteName, searchText: searchText, arr}) 
})

app.get('/blog/:slug', (req, res) => {
    let blogTitle = "adidas why and when";
    let blogContent = "It's very good brand"
    res.render("blogPost",{blogTitle: blogTitle, blogContent: blogContent}) 
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
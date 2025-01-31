const express = require('express')
const router = express.Router()

// define the home page route
router.get('/', (req, res) => {
  res.send('Shop home page')
})
// define the about route
router.get('/about', (req, res) => {
  res.send('About shop')
})

// define the about route
router.get('/blogpost/:bimal', (req, res) => {
    res.send(`Fetch shop blogpost for ${req.params.bimal}`)
  })


module.exports = router
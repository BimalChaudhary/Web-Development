console.log("Hello World");

var slugify = require('slugify')

const a = slugify('some string') // some-string
console.log(a)

// if you prefer something other than '-' as separator
const b = slugify('some string', '_')  
console.log(b)
const { error } = require("console");
const fs = require("fs");
const { config } = require("process");

console.log(fs)

console.log("starting");
// fs.writeFileSync("bimal.text","Harry is a good boy");
fs.writeFile("bimal2.text","Bimal is good boy. And he is good.",()=>{
    console.log("done")
    fs.readFile("bimal2.text",(error,data)=>{
        console.log(error, data.toString())
    })
});
fs.appendFile("bimal2.text","bimal123",(e,d)=>{
    console.log(d)
})
console.log("ending")

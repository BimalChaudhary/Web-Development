console.log("Bimal is a Hacker")
console.log("Chakra is a Hecker")

setTimeout(() =>{
    console.log("I am insider setTimeout")
},6000)

setTimeout(() =>{
    console.log("I am inside setTimeout 2")
},2000)

console.log("The End")

const callback = (arg) => { 
    console.log(arg);
 }

const loadScript = (src, callback) => { 
    let sc = document.createElement("script");
    sc.src = src;
    sc.onload = callback();
    document.head.append(sc)
 }

 loadScript("")
let a = prompt("Enter a first number");
let b = prompt("Enter a second number");
if (isNaN(a) || isNaN(b)) {
  throw SyntaxError("Sorry this is not alloweded at !");
}
let sum = parseInt(a) + parseInt(b);

let x = 1;
try {
    
    console.log(`Sum of a and b is ${sum*x}`);
} catch (error) {
    console.log("Error aagel bimal zee");
}
finally{
    console.log("finally");
}
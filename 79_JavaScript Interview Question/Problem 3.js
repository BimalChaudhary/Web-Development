// The Minor Mirror: Imagine you have a string , and you need to create a new string that is a mirror image of the original. Write a function that append the reversed version of the original string to itself.

function mirrorString(str){
    // return str + str.split("").reverse("").join("");
    return  str.split("").reverse("").join("");

}

const originalString = "Chakra";
const mirroredString = mirrorString(originalString)
console.log(mirroredString);
console.log(mirroredString.toUpperCase())
console.log(mirroredString[2].toUpperCase())
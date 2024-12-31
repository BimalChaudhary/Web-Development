let arr = [22,33,44,55];

let newArr = arr.map((e)=>{
    return e**3;
})
console.log(newArr);

console.log(arr.filter((e)=>{
    if(e>35){
        return true;
    }
    return false;
}))

let arr2 = [1,2,3,4,5];
let sum = (a,b)=>{
    return a+b;
}
console.log(arr2.reduce(sum));
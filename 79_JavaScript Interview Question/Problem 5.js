// The Sum Selector. You are working on function on a function that should sum all numbers in an array until it encounters a negative number. Write a function that performs this summation

function sumSelector(numbers){
    let sum = 0;
    for(let x of numbers){
        if(x < 0){
            break;
        }
        sum = sum + x;
    }
    return sum;
}
    let numbers1 = [1,5,9,-5,-8,10];
    console.log(sumSelector(numbers1));


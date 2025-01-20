// The Double Trouble: You are tasked with writing a function that doubles each element in an array. However, there's a catch: if the array contains consecutive duplicate elements, only double one of them.

  function doubleTrouble(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        // Always push the current element
        result.push(arr[i]);

        // Push the current element again only if it is not a consecutive duplicate
        if (i === 0 || arr[i] !== arr[i - 1]) {
            result.push(arr[i]);
        }
    }
    return result;
}

const originalArray = [4, 4, 4, 4];
const doubledArray = doubleTrouble(originalArray);
console.log(doubledArray); // Output: [4, 4, 4, 4, 4, 4]

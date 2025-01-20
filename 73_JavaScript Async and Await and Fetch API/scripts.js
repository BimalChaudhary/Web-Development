// function getData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(455);
//     }, 3500);
//   });
// }

async function getData() {
 let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
 let data = await x.json()
 console.log(data);
 
  // .then(response => response.json())
  // .then(json => console.log(json))
}

async function main() {
  console.log("Loading Moduels");

console.log("Do somthing else");

console.log("Load data");

let data = await getData();

    console.log(data);
    
    console.log("process data");
    
    console.log("Task 2");

}

main();
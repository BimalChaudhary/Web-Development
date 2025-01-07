console.log("This is Promises")

let prom1 = new Promise ((resolve, reject) =>{
    let a = Math.random();
    if(a<0.5){
        reject("No random number was not supported !");
    }
    else{
        setTimeout(() => {
            console.log("Yes I am done");
            resolve("Bimal");
           
        }, 3000);
    }
})

let prom2 = new Promise((resolve, reject)=>{
    let a = Math.random();
    if(a<0.5){
        reject("No random number was not supported 2");
    }
    else{
        setTimeout(()=>{
            console.log("Yes I am done 2");
            resolve("Bimal 2");
        },1000)
    }
})

// let p3 = Promise.all([prom1,prom2])
// p3.then((a)=>{
//     console.log(a);
// }).catch((err)=>{
//     console.log(err);
// })

// let p3 = Promise.allSettled([prom1,prom2])
// p3.then((a)=>{
//     console.log(a);
// }).catch((err)=>{
//     console.log(err);
// })

// let p3 = Promise.race([prom1,prom2])
// p3.then((a)=>{
//     console.log(a);
// }).catch((err)=>{
//     console.log(err);
// })

let p3 = Promise.any([prom1,prom2])
p3.then((a)=>{
    console.log(a);
}).catch((err)=>{
    console.log(err);
})

// let obj = {
//     a:1,
//     b:3,
//     c:"Bimal"
// }
// console.log(obj)

// let animal = {
//     eats : true
// };

// let rabbit ={
//     jumps : true
// };

// rabbit.__proto__= animal;

class animal{
    constructor(name){
        this.name = name;
        console.log("Objective is created...");
    }
    eats(){
        console.log("kaeto mae");
    }
    jumps(){
        console.log("kudgha to");
    }
}

class Lion extends animal{
    constructor(name){
        super(name)
        
        console.log("Object is created and he is Lion..")
    }
    rore(){
        console.log("Rore");
    }
    hair(){
        console.log("Heavy hair");
    }
    eats(){
        super.eats();
        console.log("Kha tae")
    }
}

let a = new animal("Bunny");
console.log(a)

let b = new Lion("Sher");
console.log(b)

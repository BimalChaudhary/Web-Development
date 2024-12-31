let rand = Math.random();
let first, second, third;

// First 
if(rand < 0.33){
    first = "Crazy";
}
else if(rand>=0.33 && rand<0.66){
    first = "Amazing";
}
else{
    first = "Fire";
}

// Second
rand = Math.random();
if(rand < 0.33){
    second = "Engine";
}
else if(rand >=0.33 && rand<0.66){
    second = "Foods";
}
else{
    second = "Garments";
}

// Trhird
rand = Math.random();
if(rand < 0.33){
    third = "bors";
}
else if(rand >=0.33 && rand<0.66){
    third = "Limited";
}
else{
    third = "Hub";
}
console.log(`${first} ${second} ${third}`)
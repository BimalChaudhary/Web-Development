import fs from "fs/promises";

let a = await fs.readFile("bimal.text");

let b = await fs.appendFile("bimal.text","\n\n This is amazing promeses");

console.log(a.toString(), b);

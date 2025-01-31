import fs from "fs/promises"
import fsn from "fs"
import path from "path"
 
let files =await fs.readdir("D:\\Pratice\\Web Development\\86_Express js Clear the Clutter Exercise 15")
// console.log(files)

for (const item of files) {
    let ext = item.split(".")[item.split(".").length-1] 
    // console.log(ext)
    if(fsn.existsSync(ext)){
        fs.rename(item, path.join(ext, item))
    }
    else{
        fsn.mkdir(ext)
    }
    console.log(item)
}
import fs from "fs/promises";
import fsn from "fs";
import path from "path";

const basePath =
  "D:\\Pratice\\Web Development\\86_Express js Clear the Clutter Exercise 15";

let files = await fs.readdir(basePath);

for (const item of files) {
  let ext = item.split(".")[item.split(".").length - 1];
  console.log(ext);
  if (fsn.existsSync(path.join(basePath, ext))) {
    fs.rename(item, path.join(ext, item));
  } else {
    fsn.mkdir(ext);
  }
  console.log(item);
}

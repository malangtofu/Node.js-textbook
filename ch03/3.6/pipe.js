const fs = require("fs");

const readStream = fs.createReadStream(__dirname + "/readme4.txt");
const writeStream = fs.createWriteStream(__dirname + "/writeme3.txt");
readStream.pipe(writeStream);
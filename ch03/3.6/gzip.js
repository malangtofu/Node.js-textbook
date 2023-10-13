const zlib = require("zlib");
const fs = require("fs");

const readStream = fs.createReadStream(__dirname + "/readme4.txt");
const zlibStream = zlib.createGzip();
const writeStream = fs.createWriteStream(__dirname + "/readme4.txt.gz");
readStream.pipe(zlibStream).pipe(writeStream);
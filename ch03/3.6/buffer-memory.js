const fs = require("fs");

console.log("before: ", process.memoryUsage().rss);

const data1 = fs.readFileSync(__dirname + "/big.txt");
fs.writeFileSync(__dirname + "/big2.txt", data1);
console.log("before: ", process.memoryUsage().rss);
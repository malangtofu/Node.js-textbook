const path = require("path");

const string = __filename;

console.log("path.sep:", path.sep);
console.log("path.delimiter:", path.delimiter);
console.log("------------------------------");
console.log("path.dirname():", path.dirname(string));
console.log("path.extname():", path.extname(string));
console.log("path.basename():", path.basename(string));
console.log("path.basename - extname:", path.basename(string, path.extname(string)));
console.log("------------------------------");
console.log("path.parse():", path.parse(string));
console.log("path.format():", path.format(path.parse(string)));
console.log("path.normalize():", path.normalize("//Users/tofu/Documents/nodejs-book//ch03///3.5"));
console.log("------------------------------");
console.log("path.isAbsolute(/Documents/nodejs-book/):", path.isAbsolute("/Documents/nodejs-book/"));
console.log("path.isAbsolute(../nodejs-book/):", path.isAbsolute("../nodejs-book/"));
console.log("------------------------------");
console.log("path.relative():", path.relative("/Users/tofu/Documents/nodejs-book/ch03/3.5/path.js", "/"));
console.log("path.join():", path.join(__dirname, "..", "..", "/Users", '.', "/tofu"));
console.log("path.resolve():", path.resolve(__dirname, "..", "Users", '.', "/tofu"));
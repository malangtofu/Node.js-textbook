const url = require("url");

const { URL } = url;
const myURL = new URL("https://github.com/malangtofu/Node.js-textbook.git");
console.log("new URL():", myURL);
console.log("url.format()", url.format(myURL));
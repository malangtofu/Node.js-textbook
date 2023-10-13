const fs = require('fs');

console.log('before: ', process.memoryUsage().rss);

const readStream = fs.createReadStream(__dirname + '/big.txt');
const writeStream = fs.createWriteStream(__dirname + '/big3.txt');
readStream.pipe(writeStream);
readStream.on('end', () => {
  console.log('stream: ', process.memoryUsage().rss);
});

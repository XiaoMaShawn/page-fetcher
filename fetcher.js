// get two command line arguments, the first is the URL and the second is a local file path
let arg = process.argv.slice(2);
const request = require('request');
const fs = require('fs');

request(arg[0], (error, response, body) => {
  console.log(`Downloaded and saved ${body.length} bytes to ${process.argv[1]}`);
  fs.writeFile(arg[1], body, err => {
    if (err) {
      console.log(err);
      return;
    }
  })
});
#!/usr/bin/node
const fs = require('fs');
const util = require('util');

function readAndPrintFileContent (filePath) {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(util.inspect(err, false, null, true));
      return;
    }
    console.log(data);
  });
}

const filePath = process.argv[2];
readAndPrintFileContent(filePath);

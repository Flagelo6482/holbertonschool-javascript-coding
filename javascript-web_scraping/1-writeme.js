#!/usr/bin/node
// Argumento: archivo para escribir
const path = process.argv[2];
// Argumento: cadena para pasar al archivo
const str = process.argv[3];

const fs = require('fs');
const util = require('util');

fs.writeFile(path, str, 'utf8', (err) => {
  if (err) {
    console.log(util.inspect(err, false, null, true));
  }
});

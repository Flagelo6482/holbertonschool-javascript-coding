#!/usr/bin/node
const URL = process.argv[2];
const request = require('request');

request.get(URL, (err, response) => {
  if (err) {
    console.error(`code: ${err}`);
  }
  console.log(`code: ${response.statusCode}`);
});

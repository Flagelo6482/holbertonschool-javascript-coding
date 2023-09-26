#!/usr/bin/node
const request = require('request');
const fs = require('fs');

//URL
const URL = process.argv[2];
//file
const file = process.argv[3];


request.get(URL, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
  }

  fs.writeFile(file, body, { encoding: 'utf-8' }, (err) => {
    if (err) {
      console.error('Error:', err);
    }
  });
});

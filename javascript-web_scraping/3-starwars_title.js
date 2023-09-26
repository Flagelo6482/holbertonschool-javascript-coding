#!/usr/bin/node
const request = require('request');
const title = process.argv[2];
const URL = `https://swapi-api.hbtn.io/api/films/${title}`;

request(URL, (error, response, body) => {
  if (error) {
    console.error(error);
  } else {
    const movie = JSON.parse(body);
    console.log(movie.title);
  }
});

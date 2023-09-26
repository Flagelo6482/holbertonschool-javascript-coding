#!/usr/bin/node
const request = require('request');

const apiUrl = process.argv[2];
const characterId = 18;

request(apiUrl, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
  } else if (response.statusCode !== 200) {
    console.error('Status:', response.statusCode);
  } else {
    const films = JSON.parse(body).results;
    const moviesWithWedge = films.filter(film => film.characters.includes(`https://swapi-api.hbtn.io/api/people/${characterId}/`));
    console.log(moviesWithWedge.length);
  }
});

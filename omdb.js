const fs= require('fs');
const fetch= require('node-fetch')

async function movie(arg) {
    const url=`https://www.omdbapi.com/?apikey=trilogy&t=${arg}`;
    let response= await fetch(url)
    let results= await response.json()
  console.log(results)
     
 }
 exports.movie=movie

require("dotenv").config();
const Spotify= require('node-spotify-api');
const fs= require('fs');
const keys= require('./keys.js');
const client= new Spotify(keys.spotify);

async function spotifySearch(arg) {
   let results = await client.search({query: encodeURIComponent(arg.trim()), type:'track', limit:1});
    if (results.tracks.items.length <1){
        return console.log("nothing found");
    } 
    else {
        console.log(results.tracks.items[0])
    }
}
exports.spotifySearch=spotifySearch

let fs = require("fs");
let twitter= require("./twitter.js")
let spotify= require("./spotify.js")
let omdb= require("./omdb.js")
console.log(process.argv[2])

let args = process.argv.slice(2);

function switcher(arg, arg2) {
  if (args[1] !== undefined) {
    arg2 = args[1];
  };

switch(process.argv[2]) {
    case "my-tweets":
    return twitter.tweets()
    case "spotify-this-song":
    return spotify.spotifySearch(process.argv[3])
    case "movie-this":
    return omdb.movie(process.argv[3])
    case "do-what-it-says":
    let randomTxt = function() {
        const data = fs.readFileSync("./random.txt", 'utf8');
        let cmdArr;
        if (data.includes(',')) {
          cmdArr = data.trim().split(',');
          process.argv.push(cmdArr[1]);
          switcher(cmdArr[0], cmdArr[1]);
        } else {
          cmdArr = [data.trim()];
          switcher(cmdArr[0]);
        }
      };
      return randomTxt();
      break;
    }
  
}
switcher(args[0]);

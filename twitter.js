require("dotenv").config();
const keys= require("./keys.js");
const fs= require('fs');
const Twitter= require('twitter');
const client= new Twitter(keys.twitter);

let tweetGet = function() {
    return client.get('statuses/user_timeline', {screen_name: 'taylorswift13', count: 20}, function (error, tweets){
      let arr=tweets.map(function(each) {
          return `${each.user.name} ${each.text}`
      })
      return console.log(arr)
        })
    };
exports.tweets=tweetGet

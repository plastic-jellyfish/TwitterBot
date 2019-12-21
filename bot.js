//START OF TWITTER BOT  Save as bot.js
console.log("RT bot is starting");
var Twit = require('twit');
var fs = require('fs');

var rt = new Twit({
	consumer_key:         'rMnkhDkZpD3I1excl8G8kR7Jj',
  	consumer_secret:      'FIZDGySRVW6saY40iHMfnGt1vCoIwcCwgXrxxxGteUYZWC8SeE',
  	access_token:         '1201085674096431105-7bUK5F5G0o91eUcvS78gMc74vQ6Ga7',
  	access_token_secret:  'kH52eOPCQa5qaGhx3E36PsLxsi54Xrr17v8zllc5ZTrXG',
}
);

var tag =["IndiaAgainstNRC", "StopCommunalPolitics", "rejectCAA", "SaveIndianConstitution", 
		"CAAProtest", "IndiaAgainstCAA", "rejectBJP", "ShameOnDelhiPolice", "section144",
		"JamaMasjid", "CABAgainstConstitution", "BoycottCAA", "sec144", "CAA_NRC_Protests"]

tweetrt();
setInterval(tweetrt, 2*60*1000); //set to every 2 minutes (60 sec 1000 millisec) change the number 2

function tweetrt(){
	var randomTag = randIndex(tag);
	rt.get('search/tweets',{q:'#'+randomTag, tweet_mode: 'extended',count: 100},gotData);
	function gotData(err,data, response){
		var tweets 	 = data.statuses;
		var randomTweet = randIndex(tweets);
		var tid = randomTweet.id_str;
		rt.post('statuses/retweet/:id', { id: tid }, retweeted);
		function retweeted(err, data, response){
			if(err){ console.log(data); } 
			else{ console.log('Retweeted!'); }
		}
	}
};

function randIndex(arr){
    var min = 0;
    var max = (arr.length);
    var randIndex1 = Math.floor(Math.random() * (max - min)) + min;
    return arr[randIndex1];
}

// end of Twitter Bot 
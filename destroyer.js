console.log('Tweet Destroyer Is Running')

const Twit = require('Twit')

const configs = require('./TDSettings')

var T = new Twit(configs)

T.get('search/tweets', { q: 'from:mr_mc_BOT' }, function(err, data, response) {
  data = data.statuses
  for(let i = 0; i<data.length; i++){
    console.log(data[i].id)
  }
})
console.log('Tweet Destroyer Is Running')

const Twit = require('Twit')

const configs = require('./TDSettings')

var T = new Twit(configs)

T.get('search/tweets', { q: 'from:mr_mc_BOT' }, (err,data)=>{
  data = data.statuses
  for(let i = 0; i<data.length; i++){
    T.post('statuses/destroy/:id', { id: data[i].id_str }, err=>{
      if(err) console.log('ERROR with: '+data[i].id +'   '+ err)
    })
  }
})
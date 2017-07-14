console.log('Tweet Destroyer Is Running')

const Twit = require('Twit')

const configs = require('./TDSettings')

var T = new Twit(configs)

    T.post('statuses/update',{status:"test"},(err)=>{
    if(err) console.log('ERROR')
    else console.log('Succesful Post!')
    })
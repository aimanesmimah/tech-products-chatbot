const API_TOKEN = 'c9e72eb5dc774ffa9a53d0038e00fab2' ;
var apiai = require('apiai')(API_TOKEN);
var conversation = require('./conversationState');


module.exports = function (message,callback) {


    let apiaiReq = apiai.textRequest(message,{
        sessionId : 'aymanSessionId'
    });

    apiaiReq.on('response',(response)=>{
        console.log('api ai response event');
        console.log('response api : ' + response.result.fulfillment.speech);

        conversation.changeState(response);


        callback(response.result.fulfillment.speech);

    });


    apiaiReq.on('error',(error)=>{
        console.log("api.ai error" + error);
        callback("some system error occured. Try again!");

    });

    console.log("apiai end");
    apiaiReq.end();


}


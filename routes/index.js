var express = require('express');
var apiaiSDK = require('../apiai/apiai_sdk');
var router = express.Router();
//var conversation = require('../webhook/conversationState');
var dataSentToBrowser = require('./dataSendToBrowser');



var helpers = require('../data/helpers');


/* GET home page. */
router.get('/', function(req, res, next) {
  //console.log(helpers.getBrandsOfCategory('computing'));
  //console.log(helpers.getCategoriesOfBrand('apple'));
  console.log(helpers.getAllCategories());
  res.render('index', { title: 'Express' });
});


router.post('/test',function (req,res) {
   res.json({success:true,method:"POST method",response:"success"});
});


router.post('/chatbotMessage',function (req,res) {
    //console.log('reached');
    var userMessage = req.body.user_message;


    apiaiSDK(userMessage,function (response) {
        let data = dataSentToBrowser(conversationState.currentState);
        res.json({success : true , botResponse : response? response : "no response",data : data});
    });

});

router.get('/chatbotMessage/:message',function (req,res) {
    //console.log('reached');
    var userMessage = req.params.message;


    apiaiSDK(userMessage,function (response,conversation) {
        let data = dataSentToBrowser(conversation);
        res.json({success : true ,
            botResponse : response? response : "it seems that network problems occured. Try again please!",
            data : data,currentState : response?  conversation.currentState : "nothing"});
    });

});

module.exports = router;

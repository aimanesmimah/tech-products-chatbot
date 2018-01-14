var express = require('express');
var router = express.Router();


router.post('/',function(req,res){
    var response = req.body.result.parameters ? req.body.result.parameters.option : "";
    console.log("response : " + response);
});

module.exports = router;
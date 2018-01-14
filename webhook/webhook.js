var express = require('express');
var router = express.Router();

var helpers = require('../data/helpers');


router.post('/',function(req,res){

    let speech ;

    if(req.body.result && req.body.result.parameters) {



        if (req.body.result.parameters.presentStore) {
            let response = req.body.result.parameters.option ;

            if (response === "yes") {
                speech = "Nice! so I'm gonna introduce you " +
                    "to the categories of products we have";

            }
            else if (response === "no") {
                speech = "ok! we can do it for another time. Good bye";
            }
            else {
                speech = "Sorry! something went wrong";

            }

        }
        else if(req.body.result.parameters.defineCategory){
            let category = req.body.result.parameters.Category.toString();

            let brands = helpers.getBrandsOfCategory(category.toLowerCase());

            if(brands.length) {
                speech = "the brands we have for " + category + " " +
                    "are : ";

                for(let i=0 ; i < brands.length ; i++){
                    if(i === brands.length - 1)
                        speech += brands[i] + ".";
                    else
                        speech += brands[i] + "," ;
                }

                speech = " May you choose one ?";
            }
            else
                speech = "unfortunately, we have currently any brand for " + category + " category" ;


        }

        else{
            speech = "sorry! something bad happened";
        }



    }
    else{
      speech = "sorry! something bad happened";
    }

    res.json({
        speech: speech,
        displayText: speech,
        source: 'products-bot'
    });
});



module.exports = router;
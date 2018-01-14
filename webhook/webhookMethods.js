var state = require('./conversationState');
var helpers = require('../data/helpers');


module.exports.readyToStartConfirmation = function (req) {
    let response = req.body.result.parameters.option ;
    let speech ;

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

    return speech ;
}

module.exports.defineCategoryMethod = function (req) {
    let category = req.body.result.parameters.Category.toString().toLowerCase();

    state.currentCategory = category;

    let brands = helpers.getBrandsOfCategory(category);

    let speech;

    if(brands.length) {
        speech = "the brands we have for " + category + " " +
            "are : ";

        for(let i=0 ; i < brands.length ; i++){
            if(i === brands.length - 1)
                speech += brands[i] + ".";
            else
                speech += brands[i] + ", " ;
        }

        speech += " May you choose one ?";
    }
    else
        speech = "unfortunately, we have currently any brand for " + category + " category" ;

    return speech ;
}

module.exports.defineBrandMethod = function (req) {

    let brand = req.body.result.parameters.Brand.toString().toLowerCase();
    state.currentBrand = brand;


    let prods = helpers.getProductsOfCategoryAndBrand(state.currentCategory,brand);

    let speech ;

    speech = "this is all " +state.currentCategory+ " products we have for " + brand + " brand." ;
    speech += " we have : " ;



    for(let i=0 ; i < prods.length ; i++){
        if(i === prods.length - 1)
            speech += prods[i] + ".";
        else
            speech += prods[i] + ", " ;
    }

    speech += " Did you like one of them ?";

    return speech ;
}

module.exports.productionConfirmationMethod = function (req) {
    let option = req.body.result.parameters.option ;
    let speech;

    if(option === "yes"){
        speech = "So which one do you want to subscribe to ?";
    }
    else if(option === "no"){
        speech = "really do you want to look at other options ?" ;
    }
    else{
        speech = "sorry! something bad happened" ;
    }

    return speech;
}



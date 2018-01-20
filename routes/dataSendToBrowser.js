var helpers = require('../data/helpers');


module.exports = function (conversation) {
    let data = {};

    switch (conversation.currentState){
        case 'nothing' :
            data.message = "no data";
            break;
        case 'categories' :
            data.message = "categories";
            data.payload = {
                name : "store",
                items : helpers.getAllCategories()
            }
            break;
        case 'category' :
            data.message = "category";
            data.payload = {
                name : conversation.currentCategory,
                items : helpers.getBrandsOfCategory(conversation.currentCategory)
            }
            break;
        case 'brand' :
            data.message = "brand";
            data.payload = {
                name : conversation.currentBrand,
                items :
                    helpers.getProductsOfCategoryAndBrand(conversation.currentCategory,conversation.currentBrand)
            }

            break;
        case 'product' :
            data.message = "product";
            data.payload = {
                name : conversation.currentProduct,
                items : helpers.getMatchedProducts(conversation.currentProduct)
            }
            break;
        default :
            data.message = "no data";
    }

    return data ;
}
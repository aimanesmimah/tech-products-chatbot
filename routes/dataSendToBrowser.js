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
        case 'brandFallsOutside' :
            data.message = "brand_falls_outside";
            data.payload = {
                name : conversation.currentBrand,
                items : helpers.getCategoriesOfBrand(conversation.currentBrand)
            }
            break;
        case 'categoryFallsOutside' :
            data.message = "category_falls_outside";
            data.payload = {
                name : conversation.currentBrand,
                items : helpers.getCategoriesOfBrand(conversation.currentBrand)
            }
            break;
        case 'productFallsOutside' :
            data.message = "product_falls_outside";
            data.payload = {
                name : conversation.currentCategory,
                items : helpers.getProductsOfCategoryAndBrand(conversation.currentCategory,conversation.currentBrand)
            }
            break;
        case 'product' :
            data.message = "product";
            data.payload = {
                name : conversation.currentProduct,
                items : helpers.getMatchedProducts(conversation.currentProduct)
            }
            break;
        case 'dreamProduct' :
            data.message = "dreamProduct";
            data.payload = {
                name : conversation.currentProduct,
                items : helpers.getMatchedProducts(conversation.currentProduct)
            }
            break;
        default :
            console.log('default');
            data.message = "no data";
    }

    return data ;
}



module.exports = function (conversationState) {
    let data = {};

    switch (conversationState){
        case 'nothing' :
            data.message = "no data";
            break;
        case 'categories' :
            data.message = "categories";
            data.categories = helpers.getAllCategories();
            break;
        case 'category' :
            data.message = "category";
            data.category = {
                name : conversationState.currentCategory,
                brands : helpers.getBrandsOfCategory(conversationState)
            }
            break;
        case 'brand' :
            data.message = "brand";
            data.brand = {
                name : conversationState.currentBrand,
                products :
                    helpers.getProductsOfCategoryAndBrand(conversationState.currentCategory,conversationState.currentBrand)
            }

            break;
        case 'product' :
            data.message = "product";
            data.product = {
                name : conversationState.currentProduct,
                products : helpers.getMatchedProducts(conversationState.currentProduct)
            }
            break;
        default :
            data.message = "no data";
    }

    return data ;
}
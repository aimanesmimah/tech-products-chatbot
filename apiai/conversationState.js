



module.exports = {
    currentState : "nothing",
    currentCategory : "",
    currentBrand : "",
    currentProduct : "",
    currentMoreInfos : "",
    changeState : function (response) {
        if (response.result.parameters.presentStore) {
            //speech = webhookMethods.readyToStartConfirmation(req);
            if(response.result.parameters.option === "yes"){
                this.currentState = "categories";
            }
        }
        else if(response.result.parameters.defineCategory){
            //speech = webhookMethods.defineCategoryMethod(req);
            let category = response.result.parameters.Category.toString().toLowerCase();

            this.currentState = "category";
            this.currentCategory = category;
        }
        else if(response.result.parameters.defineBrand){
            //speech = webhookMethods.defineBrandMethod(req);
            let brand = response.result.parameters.Brand.toString().toLowerCase();

            this.currentState = "brand";
            this.currentBrand = brand;
        }
        else if(response.result.parameters.productConfirmation){
            //speech = webhookMethods.productionConfirmationMethod(req);
        }
        else if(response.result.parameters.defineProduct){
            //speech = webhookMethods.defineProducts(req);
            let productName = response.result.parameters.productName.toString().toLowerCase();
            this.currentState = "product";
            this.currentProduct = productName;
        }
        else if(response.result.parameters.defineMoreAbout){
            //speech = webhookMethods.defineMoreAboutMethod(req);

            let info = response.result.parameters.specificationNumber.toString();

            this.currentState = "product";
            this.currentMoreInfos = info ;
        }
        else{
            this.currentState = "nothing";
        }
    }
}
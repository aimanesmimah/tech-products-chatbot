



module.exports = {
    currentState : "nothing",
    currentCategory : "",
    currentBrand : "",
    currentProduct : "",
    currentMoreInfos : "",
    changeState : function (response) {
        if(response.result && response.result.parameters) {
            if (response.result.parameters.presentStore) {
                //speech = webhookMethods.readyToStartConfirmation(req);
                this.currentState = "nothing";

                if (response.result.parameters.option === "yes") {
                    this.currentState = "categories";

                }
            }
            else if (response.result.parameters.defineCategory) {
                //speech = webhookMethods.defineCategoryMethod(req);
                let category = response.result.parameters.Category.toString().toLowerCase();

                this.currentState = "category";
                this.currentCategory = category;
            }
            else if (response.result.parameters.defineBrand) {
                //speech = webhookMethods.defineBrandMethod(req);
                let brand = response.result.parameters.Brand.toString().toLowerCase();

                this.currentState = "brand";
                this.currentBrand = brand;
            }
            else if (response.result.parameters.productConfirmation) {
                //speech = webhookMethods.productionConfirmationMethod(req);
            }
            else if (response.result.parameters.defineProduct) {
                //speech = webhookMethods.defineProducts(req);
                let productName = response.result.parameters.productName.toString();
                this.currentState = "product";
                this.currentProduct = productName;
            }
            else if (response.result.parameters.defineMoreAbout) {
                //speech = webhookMethods.defineMoreAboutMethod(req);

                let info = response.result.parameters.specificationNumber.toString();

                this.currentState = "product";
                this.currentMoreInfos = info;
            }
            else if(response.result.parameters.brandFallsOutside){
                this.currentState = "brandFallsOutside";
                this.currentBrand = response.result.parameters.Brand.toString().toLowerCase()
            }
            else if(response.result.parameters.brandFallsOutsideConfirmation){
                this.currentState = "nothing";
            }
            else if(response.result.parameters.chooseCategoryBrandFallOutside){
                this.currentState = "category";
                this.currentBrand = response.result.parameters.Brand.toString().toLowerCase()
            }
            else if(response.result.fulfillment.speech === "sorry! something bad happened. Try again!"){
                this.currentState = "nothing";
            }
            else {
                this.currentState = "nothing";
                console.log('dkhaal nothing');
            }

        }
        else{
            this.currentState = "nothing";
        }
    }
}
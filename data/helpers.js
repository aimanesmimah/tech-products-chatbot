var data = require('./products.json');


function removeDuplicates(array) {
    return array.filter((elem, pos, arr) => arr.indexOf(elem) == pos);
}

module.exports.getBrandsOfCategory = category => {
    let products = data.products;

    const result = products.filter(prod => prod.category === category).map(prod => prod.brand);

    return removeDuplicates(result);
}


module.exports.getCategoriesOfBrand = brand => {
    let products = data.products;
    const result = products.filter(prod => prod.brand === brand).map(prod => prod.category);

    return removeDuplicates(result);
}


var express = require('express');
var router = express.Router();

var helpers = require('../data/helpers');

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(helpers.getBrandsOfCategory('computing'));
  console.log(helpers.getCategoriesOfBrand('apple'));
  res.render('index', { title: 'Express' });
});

module.exports = router;

import productModel from "../models/product.model";
module.exports = {
    getProducts: function(req, res) {
        let result = productModel.getProducts();
    },
    createProduct:  function(req, res) {
        let result = productModel.createProduct(req.body);
    },
    createProductDefault:  function(req, res) {
        let result = productModel.createProductDefault();
    }
}
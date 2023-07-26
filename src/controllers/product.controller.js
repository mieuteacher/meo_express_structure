import productModel from "../models/product.model";
module.exports = {
    getProducts: function(req, res) {
        let result = productModel.getProducts();
    }
}
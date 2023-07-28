import express from 'express';
const router = express.Router();

import categoryApi from './apis/category.api';
router.use('/categories', categoryApi)

import productApi from './apis/product.api';
router.use('/products', productApi)

module.exports = router;
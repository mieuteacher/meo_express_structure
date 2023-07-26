import express from 'express';
const router = express.Router();
import productController from '../../controllers/product.controller';
router.get('/', productController.getProducts);

module.exports = router;
import express from 'express';
const router = express.Router();

import categoryModel from '../models/category.model'

router.use('/', async (req, res) => {
   let result = await categoryModel.update(1, {deleted: true});
   console.log("đã vào!", result);
})

module.exports = router;
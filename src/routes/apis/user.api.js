import express from 'express';
const router = express.Router();

import userController from '../../controllers/user.controller';
import userMiddleware from '../../middlewares/user.middleware';
// tạo ra middleware validate tất cả query, params trước khi userController.getUsers được gọi.
router.get('/', userMiddleware.getUserValidate, userController.getUsers);
router.post('/', userController.createUser);
router.delete('/:userId', userController.deteleUserById);

module.exports = router;
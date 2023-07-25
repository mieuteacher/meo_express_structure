import express from 'express';
const router = express.Router();

import userController from '../../controllers/user.controller';

router.get('/', userController.getUsers);
router.post('/', userController.createUser);

module.exports = router;
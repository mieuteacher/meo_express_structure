import express from 'express';
const router = express.Router();

import userController from '../../controllers/user.controller';

router.get('/', userController.getUsers);

module.exports = router;
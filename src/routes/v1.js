import express from 'express';
const router = express.Router();

import userApi from './modules/user.api';

router.use('/users', userApi)

module.exports = router;
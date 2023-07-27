import express from 'express';
const router = express.Router();

import apiV1 from './v1';
router.use('/v1', apiV1);

import testApi from './test'
router.use('/test', testApi);

import adminMiddleware from '../middlewares/admin.middleware';
import adminApi from './admin';
router.use('/admin',adminMiddleware.checkAdmin ,adminApi);

module.exports = router;
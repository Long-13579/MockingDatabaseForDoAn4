// routes/index.js
const express = require('express');
const router = express.Router();

const userRoutes = require('./userRoutes');
const exerciseRoutes = require('./exerciseRoutes');
const planRoutes = require('./planRoutes');
const sessionRoutes = require('./sessionRoutes');
const setRoutes = require('./setRoutes');
const bodyTrackRoutes = require('./bodyTrackRoutes');

// Mount each route with a base path
router.use('/users', userRoutes);
router.use('/exercises', exerciseRoutes);
router.use('/plans', planRoutes);
router.use('/sessions', sessionRoutes);
router.use('/sets', setRoutes);
router.use('/bodytracks', bodyTrackRoutes);

module.exports = router;

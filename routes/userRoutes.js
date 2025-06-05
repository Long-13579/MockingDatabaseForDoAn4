// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Routes
router.get('/', userController.get);
router.post('/', userController.create);
router.put('/', userController.update);
router.delete('/:id', userController.delete);

module.exports = router;

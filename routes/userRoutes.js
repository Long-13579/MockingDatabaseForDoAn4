// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Routes
router.get('/', userController.get);
router.post('/', userController.create);
router.post('/login', userController.login);
router.put('/', userController.update);
router.delete('/:id', userController.delete);
router.put('/reset-password', userController.resetPassword);

module.exports = router;

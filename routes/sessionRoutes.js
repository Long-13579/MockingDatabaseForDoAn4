const express = require('express');
const router = express.Router();
const controller = require('../controllers/sessionController');

router.get('/', controller.get);
router.post('/', controller.create);
router.put('/', controller.update);
router.delete('/:id', controller.delete);

module.exports = router;
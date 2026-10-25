const express = require('express');
const router = express.Router();
const busesController = require('../controller/busesController');

router.post('/', busesController.createBus);
router.get('/available/:seats', busesController.getAvailableBuses);

module.exports = router;

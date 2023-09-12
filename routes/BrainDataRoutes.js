const express = require('express');
const router = express.Router();
const BrainDataController = require('../controllers/BrainDataController')

router.route('/').post(BrainDataController.fetchBrainLog)

module.exports = router
const express = require('express');
const router = express.Router();
const GameLogController = require('../controllers/GameLogController')

router.route('/').post(GameLogController.fetchGameLog)

module.exports = router
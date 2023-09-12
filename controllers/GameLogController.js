const GameLog = require('../models/GameLogModel');

exports.fetchGameLog = async (req, res, next) => {
    const { gameSession } = req.body;
    const foundCurrentSession = await GameLog.findbyId(gameSession).exec();
    res.status(200).json(foundCurrentSession);
}
const BrainData = require('../models/BrainData');

exports.fetchBrainLog = async (req, res, next) => {
    const { gameSession } = req.body;
    const foundBrainData = await BrainData.findOne({ session: gameSession }).exec()
    res.status(200).json(foundBrainData);
}
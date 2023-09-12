const mongoose = require('mongoose');

const GameLogSchema = mongoose.Schema({
    Score: {
        type: Number,
        default: 0
    }, 
    Depression: {
        type: Number,
        default: 0
    },
    Progress: {
        type: Number, 
        default: 0
    },
    GameLog : {
        type: [String]
    }
        
})

module.exports = mongoose.model('Game Log', GameLogSchema)
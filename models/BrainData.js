const mongoose = require('mongoose');

const BrainSchema = mongoose.Schema({
    dataLabel: {
        type: "String",
        required: true
    },
    dataset : [
        {
            yAxis: Number,
            xTime: Date,
        }
    ],
    session: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Game Log",
    }
})

module.exports = mongoose.model('Brain Data', BrainSchema)
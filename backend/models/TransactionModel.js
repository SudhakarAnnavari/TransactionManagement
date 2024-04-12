const Mongoose = require('mongoose')

const Transcation = Mongoose.Schema({
    CustomerName: {
        type: String
    },
    TranscationDate: {
        type: Date,
    },
    Amount: {
        type: Number
    },
    Status: {
        type: String
    }
})

module.exports = Mongoose.model("Transcations", Transcation);

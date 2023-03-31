const mongoose = require('mongoose');

const accountSchema = new mongoose.Schema({
    costName: {
        type: String,
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    date: {
        type: String,
        required: true,
    }
}, {
    timestamps: true
})

const accountDB = mongoose.model('accountCost', accountSchema);
module.exports = accountDB;
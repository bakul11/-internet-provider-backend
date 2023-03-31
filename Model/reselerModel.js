const mongoose = require('mongoose');

const reselerSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
    },
    nid: {
        type: Number,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true

    },
    phone: {
        type: Number,
        required: true,
    },
    address: {
        type: String,
        required: true,
    }
}, {
    timestamps: true
})

const reselerDB = mongoose.model('reseler', reselerSchema);
module.exports = reselerDB;
const mongoose = require('mongoose');

const staffSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
    },
    salary: {
        type: Number,
        required: true,
    },
    phone: {
        type: Number,
        required: true,
    },
    status: {
        type: String,
        required: true,
    }
}, {
    timestamps: true
})

const staffDB = mongoose.model('staff', staffSchema);
module.exports = staffDB;
const mongoose = require('mongoose');


const areaSchema = new mongoose.Schema({
    mainArea: {
        type: String,
        required: true,
        unique: true
    },
    subArea: {
        type: String,
        required: true,
        unique: true
    },
}, {
    timestamps: true
})

const areaDB = mongoose.model('captureAreamap', areaSchema);
module.exports = areaDB;
const mongoose = require('mongoose');

const forecastSchema = new mongoose.Schema({
    sign: { type: String, required: true },
    date: { type: Date, required: true },
    message: { type: String, required: true }
});

module.exports = mongoose.model('Forecast', forecastSchema);

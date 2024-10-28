const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    sign: { type: String, required: true },
    savedForecasts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Forecast' }]
});

module.exports = mongoose.model('User', userSchema);

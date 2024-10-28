const mongoose = require('mongoose');

const signSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    element: { type: String, required: true },
    rulingPlanet: { type: String, required: true },
    dateRange: { type: String, required: true }
});

module.exports = mongoose.model('Sign', signSchema);

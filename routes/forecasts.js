const express = require('express');
const router = express.Router();
const Forecast = require('../models/Forecast');

// forecasts by sign
router.get('/:sign', async (req, res) => {
    const forecasts = await Forecast.find({ sign: req.params.sign });
    res.json(forecasts);
});

// new forecast
router.post('/', async (req, res) => {
    const forecast = new Forecast(req.body);
    await forecast.save();
    res.json(forecast);
});

module.exports = router;

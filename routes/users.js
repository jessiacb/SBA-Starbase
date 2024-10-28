const express = require('express');
const router = express.Router();
const User = require('../models/User');

// user by ID
router.get('/:userId', async (req, res) => {
    const user = await User.findById(req.params.userId).populate('savedForecasts');
    res.json(user);
});

// new user
router.post('/', async (req, res) => {
    const user = new User(req.body);
    await user.save();
    res.json(user);
});

// update saved forecasts
router.patch('/:userId', async (req, res) => {
    const user = await User.findByIdAndUpdate(
        req.params.userId,
        { $push: { savedForecasts: req.body.forecastId } },
        { new: true }
    );
    res.json(user);
});

// bye bye user
router.delete('/:userId', async (req, res) => {
    await User.findByIdAndDelete(req.params.userId);
    res.json({ message: 'User deleted' });
});

module.exports = router;

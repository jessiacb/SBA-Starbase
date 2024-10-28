const express = require('express');
const router = express.Router();
const Sign = require('../models/sign');

// get signs
router.get('/', async (req, res) => {
    const signs = await Sign.find();
    res.json(signs);
});

// POST new sign
router.post('/', async (req, res) => {
    const sign = new Sign(req.body);
    await sign.save();
    res.json(sign);
});

module.exports = router;

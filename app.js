const express = require('express');
const mongoose = require('mongoose');
const signRoutes = require('./routes/signs');
const forecastRoutes = require('./routes/forecasts');
const userRoutes = require('./routes/users');

const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/astrology', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Failed to connect to MongoDB:', err));

app.use('/signs', signRoutes);
app.use('/forecasts', forecastRoutes);
app.use('/users', userRoutes);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

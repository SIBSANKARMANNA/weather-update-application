// backend/app.js
const express = require('express');
const cors = require('cors');
const weatherRoutes = require('./routes/weatherRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', weatherRoutes);

module.exports = app;

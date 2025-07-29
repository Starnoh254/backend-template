const express = require('express');
const router = express.Router();

// Import route modules
const authRoutes = require('./authRoutes');
const adminRoutes = require('./adminRoutes');

// Map routes
router.use('/auth', authRoutes);
router.use('/admin', adminRoutes);

module.exports = router;
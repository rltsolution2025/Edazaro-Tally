const express = require('express');
const router = express.Router();
const { getAllStats } = require('../controllers/statsController');

// Route: GET /api/stats
router.get('/', getAllStats);

module.exports = router;
const express = require('express');
const router = express.Router();
const { getAllTestimonials } = require('../controllers/testimonialController');

// Route: GET /api/testimonials
router.get('/', getAllTestimonials);

module.exports = router;
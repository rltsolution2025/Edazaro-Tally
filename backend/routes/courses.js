const express = require('express');
const router = express.Router();
const { getAllCourses } = require('../controllers/courseController');

// Route: GET /api/courses
router.get('/', getAllCourses);

module.exports = router;
const express = require('express');
const cors = require('cors');
const app = express();

// Import Route Modules
const statsRoutes = require('./routes/stats');
const coursesRoutes = require('./routes/courses');
const testimonialsRoutes = require('./routes/testimonials');

const PORT = 5000;

// Middleware
app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON bodies

// Mount Routes
// All stats routes will be prefixed with /api/stats
app.use('/api/stats', statsRoutes);

// All course routes will be prefixed with /api/courses
app.use('/api/courses', coursesRoutes);

// All testimonial routes will be prefixed with /api/testimonials
app.use('/api/testimonials', testimonialsRoutes);

// Base Route (Health Check)
app.get('/', (req, res) => {
    res.send('Masai Clone API is running...');
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
const testimonialsData = require('../data/testimonialsData');

const getAllTestimonials = (req, res) => {
    try {
        res.status(200).json(testimonialsData);
    } catch (error) {
        res.status(500).json({ message: "Error fetching testimonials" });
    }
};

module.exports = { getAllTestimonials };
const coursesData = require('../data/coursesData');

const getAllCourses = (req, res) => {
    try {
        res.status(200).json(coursesData);
    } catch (error) {
        res.status(500).json({ message: "Error fetching courses" });
    }
};

module.exports = { getAllCourses };
const statsData = require('../data/statsData');

const getAllStats = (req, res) => {
    try {
        // Logic: Fetch data from DB
        res.status(200).json(statsData);
    } catch (error) {
        res.status(500).json({ message: "Error fetching stats" });
    }
};

module.exports = { getAllStats };
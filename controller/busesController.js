const { Op } = require('sequelize');
const Bus = require('../models/buses');

const createBus = async (req, res) => {
    try {
        const { busNumber, totalSeats, availableSeats } = req.body;

        const initialAvailableSeats = availableSeats !== undefined ? availableSeats : totalSeats;

        const newBus = await Bus.create({
            busNumber,
            totalSeats,
            availableSeats: initialAvailableSeats
        });

        return res.status(201).json(newBus);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

const getAvailableBuses = async (req, res) => {
    try {
        const { seats } = req.params;
        const minSeats = parseInt(seats, 10);

        if (isNaN(minSeats)) {
            return res.status(400).json({ error: 'Seats parameter must be a valid number' });
        }

        const buses = await Bus.findAll({
            where: {
                availableSeats: {
                    [Op.gt]: minSeats
                }
            }
        });

        return res.status(200).json(buses);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

module.exports = {
    createBus,
    getAvailableBuses
};

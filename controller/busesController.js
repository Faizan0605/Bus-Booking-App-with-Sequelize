const { Op } = require('sequelize');
const { Bus, Booking, User } = require('../models');

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

const getBookingsByBusId = async (req, res) => {
    try {
        const { id } = req.params;
        const bus = await Bus.findByPk(id);

        if (!bus) {
            return res.status(404).json({ error: 'Bus not found' });
        }

        const bookings = await Booking.findAll({
            where: { busId: id },
            include: [{
                model: User,
                attributes: ['id', 'name', 'email']
            }]
        });

        return res.status(200).json(bookings);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

module.exports = {
    createBus,
    getAvailableBuses,
    getBookingsByBusId
};

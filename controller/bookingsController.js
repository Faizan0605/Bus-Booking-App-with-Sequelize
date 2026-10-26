const { Booking, User, Bus } = require('../models');

const createBooking = async (req, res) => {
    try {
        const { userId, busId } = req.body || {};

        if (!userId || !busId) {
            return res.status(400).json({ error: 'Both userId and busId are required in JSON body' });
        }

        const user = await User.findByPk(userId);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        const bus = await Bus.findByPk(busId);
        if (!bus) {
            return res.status(404).json({ error: 'Bus not found' });
        }

        const booking = await Booking.create({ userId, busId });
        return res.status(201).json(booking);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

module.exports = { createBooking };

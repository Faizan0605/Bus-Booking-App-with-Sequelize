const { DataTypes } = require('sequelize');
const sequelize = require('../utils/db-connection');

const Booking = sequelize.define('Booking', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    userId: {
        type: DataTypes.UUID,
        allowNull: false
    },
    busId: {
        type: DataTypes.UUID,
        allowNull: false
    }
}, {
    timestamps: false
});

module.exports = Booking;

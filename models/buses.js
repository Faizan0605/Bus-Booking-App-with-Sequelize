const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require('../utils/db-connection');

const Bus = sequelize.define('Bus', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    busNumber: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    totalSeats: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    availableSeats: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    timestamps: false
});

module.exports = Bus;
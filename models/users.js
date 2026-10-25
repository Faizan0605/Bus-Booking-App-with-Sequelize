const { Sequelize, DataTypes } = require("sequelize");

const sequelize = require('../utils/db-connection');


const User = sequelize.define('User', {
    id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
    name: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
}, {
    timestamps: false
});

module.exports = User;
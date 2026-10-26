const User = require('./users');
const Bus = require('./buses');
const Booking = require('./bookings');

User.hasMany(Booking, { foreignKey: 'userId' });
Booking.belongsTo(User, { foreignKey: 'userId' });

Bus.hasMany(Booking, { foreignKey: 'busId' });
Booking.belongsTo(Bus, { foreignKey: 'busId' });

module.exports = { User, Bus, Booking };

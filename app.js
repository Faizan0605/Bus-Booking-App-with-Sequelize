const express = require('express');
const db = require('./utils/db-connection')
const usersRoutes = require('./routes/usersRoutes')
const busesRoutes = require('./routes/busesRoutes')
// const bookingsRoutes = require('./routes/bookingsRoutes')
// const paymentsRoutes = require('./routes/paymnetsRoutes')

const usersModel = require('./models/users');
const busesModel = require('./models/buses');
// const bookingsModel = require('./models/bookings');
// const paymentsModel = require('./models/payments');

const app = express();
const port = 3333;
app.use(express.json());


app.get('/', (req, res) => {
    res.send("HEllow")
})

app.use("/users", usersRoutes);
app.use("/buses", busesRoutes);
// app.use("/bookings", bookingsRoutes);
// app.use("/payments", paymentsRoutes);



db.sync({ force: false }).then(() => {
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
}).catch((err) => {
    console.log(err);
})


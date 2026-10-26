const express = require('express');
const db = require('./utils/db-connection')
require('./models');
const usersRoutes = require('./routes/usersRoutes')
const busesRoutes = require('./routes/busesRoutes')
const bookingsRoutes = require('./routes/bookingsRoutes')
// const paymentsRoutes = require('./routes/paymnetsRoutes')

const app = express();
const port = 3000;
app.use(express.json());


app.get('/', (req, res) => {
    res.send("HEllow")
})

app.use("/users", usersRoutes);
app.use("/buses", busesRoutes);
app.use("/bookings", bookingsRoutes);
// app.use("/payments", paymentsRoutes);



db.sync({ force: false }).then(() => {
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
}).catch((err) => {
    console.log(err);
})


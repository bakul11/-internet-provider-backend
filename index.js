const express = require('express');
const connectDB = require('./configration/connectDb');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');

//Dot Env File 
require('dotenv').config();

// Middleware 
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send('hello network services')
})


// All Routes Import Here 
const authRoute = require('./Routes/authRoute/authRoute');
const areaRoute = require('./Routes/areaRoute/areaRoute');
const reselerRoute = require('./Routes/ReselerRoute/ReselerRoute');
const accountRoute = require('./Routes/accountRoute/accountRoute');
const staffRoute = require('./Routes/staffRoute/staffRoute');

// Auth Route 
app.use('/auth', authRoute)

// Area Route 
app.use('/area', areaRoute)

// Reseler Route 
app.use('/reseler', reselerRoute)


// Amount Route 
app.use('/amount', accountRoute)

// Staff Route 
app.use('/staff', staffRoute)

app.listen(port, () => {
    console.log(`server start port ${port} success`);
    // Database connect Here 
    connectDB();
})
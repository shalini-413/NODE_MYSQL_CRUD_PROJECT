const express = require('express');
const colors = require('colors')
const morgan = require('morgan')
const dotenv = require('dotenv');
const mySqlPool = require('./config/db');

// configure dotenv
dotenv.config();

// rest object
const app = express();

// middlewares
app.use(express.json());
app.use(morgan("dev"));

// routes
app.use('/api/v1/student', require("./routes/studentRoutes"))

app.get('/test', (req, res) => {
    res.status(200).send('<h1>WELCOME!!   Nodejs Mysql App</h1>');
})

// port
const PORT = process.env.PORT || 8000;

// conditionally listen
mySqlPool.query('SELECT 1').then(() => {
    // mysql connection establishment
    console.log("mysql database connected".bgCyan.white)
    app.listen(PORT, () =>{
        console.log(`server is running on port ${process.env.PORT}`.bgMagenta.white);
    });
}).catch((error) => {
    console.log(error)
})

// listen
// app.listen(PORT, () =>{
//     console.log(`server is running on port ${process.env.PORT}`.bgMagenta.white);
// })
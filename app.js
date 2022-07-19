require('dotenv').config();
require('./config/database').connect();
const express = require('express');
// const morgan = require('morgan');
const commonR = require('./routes/commonRoute');
const adminR = require('./routes/adminRoute');

const app = express();

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
// app.use(morgan('dev '));

app.use('/', commonR);

app.use('/admin', adminR);

app.listen(process.env.Port, () => {
    console.log(`Server running at http://localhost:${process.env.Port}`)
})
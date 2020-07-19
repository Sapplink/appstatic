const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

// Middleware
app.use(bodyParser.json());

const projectsRoute = require('./routes/projects');
const designsRoute = require('./routes/designs');
const contactRoute = require('./routes/contact'); 

app.use('/projects', projectsRoute);
app.use('/designs', designsRoute);
app.use('/contact', contactRoute);

// Listen to port
app.listen(4200);

// Conntect to DB
mongoose.connect(process.env.DB_CONNECTION,
 { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('connected to db');
});
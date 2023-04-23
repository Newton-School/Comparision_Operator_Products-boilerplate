const express = require('express');
const app = express();
const comparision = require('./routers/comparisionRoutes');

//middleware
app.use(express.json());

//User POST ROUTE
app.use('/api/products', comparision);

module.exports = app;

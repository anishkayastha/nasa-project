const express = require('express');

const planetsRouter = require('./planets/planets.router');
const launchesRouter = require('./launches/launches.router');

const api = express.Router();

api.use('/planets', planetsRouter);
api.use('/launches', launchesRouter); //express allows us to mount api on a specific path

module.exports = api;
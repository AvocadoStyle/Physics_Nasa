const express = require('express');

const {
    getAllLaunches,
    getLaunch,
    postLaunch
} = require('./launches.controller')


const launchesRouter = express.Router()

launchesRouter.get('/launches', getAllLaunches)
launchesRouter.post('/launches', postLaunch)
// launchesRouter.get('/launches/:id', getLaunch)

module.exports = launchesRouter
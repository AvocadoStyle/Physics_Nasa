const express = require('express');

const {
    httpGetAllLaunches,
    httpGetLaunch,
    httpPostLaunch,
    httpDeleteLaunch,
} = require('./launches.controller')


const launchesRouter = express.Router()

launchesRouter.get('/launches', httpGetAllLaunches)
launchesRouter.post('/launches', httpPostLaunch)
launchesRouter.delete('/launches', httpDeleteLaunch)
// launchesRouter.get('/launches/:id', getLaunch)

module.exports = launchesRouter
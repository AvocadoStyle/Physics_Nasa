const express = require('express');

const {
    getAllPlanets,
    getPlanet
} = require('./planets.controller')


const planetsRouter = express.Router()

planetsRouter.get('/planets', getAllPlanets)
planetsRouter.get('/planets/:id', getPlanet)

module.exports = planetsRouter
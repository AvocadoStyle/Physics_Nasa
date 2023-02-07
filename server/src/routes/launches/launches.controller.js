const {
    launches,
    getLaunches,
    setLaunch,
    deleteLaunch,
} = require('../../models/launches.model')

function httpGetAllLaunches(req, res){
    return res.status(200).json(getLaunches())
}

function httpPostLaunch(req, res){
    let values = req.body;
    let { launchDate, rocket, mission, target } = values;
    if(setLaunch(launchDate, rocket, mission, target))
        return res.status(200).json({ok: 200})
    else
        return res.status(404).json({error: 'bad parameters, try again'})
}

function httpDeleteLaunch(req, res){
    let values = req.body;
    let { flightNumber } = values;
    if(deleteLaunch(flightNumber))
        return res.status(200).json({ok: 200})
    else
        return res.status(404).json({error: 'bad parameters, try again'})
}

module.exports = {
    httpGetAllLaunches,
    httpPostLaunch,
    httpDeleteLaunch,
}

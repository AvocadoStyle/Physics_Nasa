const {
    launches,
    getLaunches,
    setLaunch
} = require('../../models/launches.model')

function getAllLaunches(req, res){
    return res.status(200).json(getLaunches())
}

function postLaunch(req, res){
    let values = req.body;
    let { launchDate, rocket, mission, target } = values;
    if(setLaunch(launchDate, rocket, mission, target))
        return getAllLaunches(req, res)
    else
        return res.status(404).json({error: 'bad parameters, try again'})
}



module.exports = {
    getAllLaunches,
    postLaunch
}

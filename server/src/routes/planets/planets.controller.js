const { planets, loadPlanetsData, getAllHabitatePlanets, getHabitatePlanetById } = require('../../models/planets.model')

const err_not_valid_param = {'message': 'not valid param'}
const err_not_found = {'message': 'not found'}
/**
 * get all the planets
 */
async function getAllPlanets(req, res){
    return res.status(200).json(await getAllHabitatePlanets())
}

/**
 * get planet by id
 * sucess status 200
 * failure status 404 - invalid param
 * failure status 400 - planet not found
 */
async function getPlanet(req, res){
    let id = req.params.id
    if(!id){
        return res.status(404).json(err_not_valid_param)
    }
    planet = await getHabitatePlanetById(id)
    if(!planet){
        return res.status(400).json(err_not_found)
    }
    return res.status(200).json(planet)
}


module.exports = {
    getAllPlanets,
    getPlanet,
}
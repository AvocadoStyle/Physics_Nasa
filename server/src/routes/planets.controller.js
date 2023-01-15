const planets = [];

const err_not_valid_param = {'message': 'not valid param'}
const err_not_found = {'message': 'not found'}
/**
 * get all the planets
 */
function getAllPlanets(req, res){
    return res.status(200).json(planets)
}

/**
 * get planet by id
 * sucess status 200
 * failure status 404 - invalid param
 * failure status 400 - planet not found
 */
function getPlanet(req, res){
    let id = req.params.id
    if(!id){
        return res.status(404).json(err_not_valid_param)
    } else{
        for(let i=0; i < planets; i++){
            if(planets[0].id == id){
                return res.status(200).json(planets[id])
            }
        }
    }
    return res.status(400).json(err_not_found)
}
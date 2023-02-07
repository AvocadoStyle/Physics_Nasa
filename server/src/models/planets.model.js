const fs = require('fs');
const path = require('path')
const { parse } = require('csv-parse');
let planets = []

// const habitablePlanets = [];

function isHabitablePlanet(planet) {
  return planet['koi_disposition'] === 'CONFIRMED'
    && planet['koi_insol'] > 0.36 && planet['koi_insol'] < 1.11
    && planet['koi_prad'] < 1.6;
}


const promise = new Promise((resolve, reject) =>{
    resolve(planets)
})

function loadPlanetsData() {
    return new Promise((resolve, reject) => {
      planets = []
      fs.createReadStream(path.join(__dirname, '..', '..', 'data', 'kepler_data.csv'))
      .pipe(parse({
        comment: '#',
        columns: true,
      }))
      .on('data', (data) => {
        if (isHabitablePlanet(data)) {
            planets.push(data);
        }
      })
      .on('error', (err) => {
        console.log(err);
        reject(err)
      })
      .on('end', () => {
        console.log(`${planets.length} habitable planets found!`);
        resolve();
      })
    })
}

async function getAllHabitatePlanets(){
  await loadPlanetsData()
  return planets
}

async function getHabitatePlanetById(id) {
  await loadPlanetsData()
  let foundPlanet;
  planets.map((planet)=>{
    planet.id == id? foundPlanet = planet: foundPlanet;
  })


}




module.exports = {
    loadPlanetsData,
    planets,
    getAllHabitatePlanets,
    getHabitatePlanetById,
}
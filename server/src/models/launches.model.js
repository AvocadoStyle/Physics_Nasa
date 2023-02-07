const launches = new Map();
// let launch = {
//     flightNumber: 100,
//     mission: '',
//     rocket: '',
//     launchDate: new Date('December 27, 2030'),
//     destination: 'Kepler-442 b',
//     upcoming: true,
//     success: true
// }
let num = 100;

// launches.set(launch.flightNumber, launch)

function getLaunches(){
    launches.forEach((obj) =>{
        obj.upcoming = __isUpcomingLaunch(obj.launchDate)
    })
    return Array.from(launches.values());
}

function getLaunch(id){
    return 1;
}

function setLaunch(launchDate, rocket, mission, target){
    try{
        let launch = {}
        num += 1
        launch.flightNumber = num
        launch.mission = mission
        launch.rocket = rocket
        launch.launchDate = launchDate
        launch.destination = target
        launches.set(launch.flightNumber, launch)
        return true;
    } catch(e){
        return false;
    }

}



function __isUpcomingLaunch(launchDate){
    let launchDateObj = new Date(launchDate)
    let currentDateObj = new Date()
    let currentDateStr = `${currentDateObj.getDate()} ${Number(currentDateObj.getMonth())+1} ${currentDateObj.getFullYear()}`
    currentDateObj = new Date(currentDateStr)

    return launchDateObj > currentDateObj
}

module.exports = {
    launches,
    getLaunches,
    getLaunch,
    setLaunch,
}
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
        if(!launchDate || !rocket || !mission || !target)
            return false;
        let launch = {}
        num += 1 
        launch.flightNumber = num
        launch.mission = mission
        launch.rocket = rocket
        if(new Date(launchDate).toString() === 'Invalid Date'){
            return false;
        }
        launch.launchDate = launchDate
        launch.destination = target
        launch.success = true
        launches.set(launch.flightNumber, launch)
        return true;
    } catch(e){
        return false;
    }

}

function deleteLaunch(idFlightNumber){
    try{
        let launch = launches.get(Number(idFlightNumber))
        if(launch){
            launch.launchDate = new Date()
            launch.success = false;
            launch.upcoming = false;
        }

        return true;
    }catch(e){
        return false;
    }
}



function __isUpcomingLaunch(launchDate){
    let launchDateObj = new Date(launchDate)
    let currentDateObj = new Date(Date.now())
    // let currentDateStr = `${Number(currentDateObj.getMonth())+1} ${currentDateObj.getDate()}, ${currentDateObj.getFullYear()}`
    // currentDateObj = new Date(currentDateStr)
    return launchDateObj > currentDateObj
}

module.exports = {
    launches,
    getLaunches,
    getLaunch,
    setLaunch,
    deleteLaunch,
}
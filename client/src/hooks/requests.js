const url = `http://localhost:5001`

async function httpGetPlanets() {
  const response = await fetch(`${url}/planets`)
  const data = await response.json()
  return data
};

async function httpGetLaunches() {
  const response = await fetch(`${url}/launches`)
  const data = await response.json()
  return data
}

async function httpSubmitLaunch(launch) {
  // TODO: Once API is ready.
  // Submit given launch data to launch system.
    const requestOptions = {
      method: 'POST',
      // headers: { 'Content-Type': 'application/json','Authorization': token },
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(launch)
    };
  
    const response = await fetch(`${url}/launches`, requestOptions);
    // if(response.status != 200){
      // throw new Error("already-in-use");
    // }
    const data = await response.json();
    return true
};







async function httpAbortLaunch(id) {
  // TODO: Once API is ready.
  // Delete launch with given ID.
}

export {
  httpGetPlanets,
  httpGetLaunches,
  httpSubmitLaunch,
  httpAbortLaunch,
};
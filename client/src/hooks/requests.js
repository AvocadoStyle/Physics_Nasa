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
    try{
      const response = await fetch(`${url}/launches`, requestOptions);
      // if(response.status != 200){
        // throw new Error("already-in-use");
      // }
      const data = await response.json();
      if(response.status === 404){
        // alert(data)
        return false;
      }
      // alert('set successfully')
      return true;
    } catch(e){
      return false; 
    }
};







async function httpAbortLaunch(id) {
  const requestOptions = {
    method: 'DELETE',
    // headers: { 'Content-Type': 'application/json','Authorization': token },
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({flightNumber: ''+id})
  };
  try{
    const response = await fetch(`${url}/launches`, requestOptions);
    // if(response.status != 200){
      // throw new Error("already-in-use");
    // }
    const data = await response.json();
    if(response.status === 404){
      // alert(data)
      return false;
    }
    // alert('set successfully')
    return true;
  } catch(e){
    return false; 
  }
}

export {
  httpGetPlanets,
  httpGetLaunches,
  httpSubmitLaunch,
  httpAbortLaunch,
};
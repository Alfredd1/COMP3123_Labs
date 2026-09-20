/*
Purpose: Fetch data from a 3rd party API
 */

let url = "https://isitdownstatus.com/api/v1/status/netflix"
fetch(url)
    .then((response) => {
        return response.json()
    })
    .then((dataJSONobj)=>{
        console.log(dataJSONobj)
        console.log(dataJSONobj.ok)
    })
    .catch(err=>{
        console.log(err)
    });
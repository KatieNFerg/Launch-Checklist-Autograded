// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(
  document,
  name,
  diameter,
  star,
  distance,
  moons,
  imageUrl
) {
  // Here is the HTML formatting for our mission target div.
  const missionTarget = document.getElementById("missionTarget");
  missionTarget.innerHTML = `
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: ${name}</li>
                     <li>Diameter:${diameter} </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: ${distance}</li>
                     <li>Number of Moons: ${moons} </li>
                 </ol>
                 <img src="${imageUrl}">
    `;
}

function validateInput(testInput) {
  if (testInput === "") {
    return "Empty";
  } else if (isNaN(testInput)) {
    return "Not a Number";
  } else if(!isNaN(testInput)){
    return "Is a Number"
  }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass) {
  
  list = document.getElementById("faultyItems");
  const pilotStatus = document.getElementById("pilotStatus");
  const copilotStatus = document.getElementById("copilotStatus");
  const fuelStatus = document.getElementById("fuelStatus");
  const cargoStatus = document.getElementById("cargoStatus");
  const launchStatus = document.getElementById("launchStatus");
  let form = document.querySelector("form");
  if (
    validateInput(pilot) === "Empty" ||
    validateInput(copilot) === "Empty" ||
    validateInput(fuelLevel) === "Empty" ||
    validateInput(cargoMass) === "Empty"
  ) {
    list.style.visibility = "hidden";
    launchStatus.innerHTML = "Awaiting information before launch.";
    alert("Please fill out all of the fields.");
  } else if (
    validateInput(pilot) === "Is a Number" ||
    validateInput(copilot) === "Is a Number"
  ) {
    list.style.visibility = "hidden";
    launchStatus.innerHTML = "Awaiting information before launch.";
    alert("Please enter only letters in this field.");
  } else if (
    validateInput(fuelLevel) === "Not a Number" ||
    validateInput(cargoMass) === "Not a Number"
  ) {
    list.style.visibility = "hidden";
    launchStatus.innerHTML = "Awaiting information before launch.";
    alert("Please enter only numbers in this field.");
  } else {
    pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
    copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
  }

  if (fuelLevel < 10000) {
    list.style.visibility = "visible";
    launchStatus.innerHTML = "Shuttle Not Ready for Launch";
      launchStatus.style.color = "red";
      fuelStatus.innerHTML = "Fuel level too low for launch";
      cargoStatus.innerHTML = "Cargo mass low enough for launch";
  }

    if (cargoMass > 10000){
      list.style.visibility = "visible";
      launchStatus.innerHTML = "Shuttle Not Ready for Launch";
      launchStatus.style.color = "red";
      cargoStatus.innerHTML = "Cargo mass too heavy for launch";
      fuelStatus.innerHTML = "Fuel level high enough for launch";
    }

    if(fuelLevel < 10000 && cargoMass > 10000){
        list.style.visibility = "visible";
        launchStatus.innerHTML = "Shuttle Not Ready for Launch";
        launchStatus.style.color = "red";
        cargoStatus.innerHTML = "Cargo mass too heavy for launch";
        fuelStatus.innerHTML = "Fuel level too low for launch";
    }

  if(fuelLevel >= 10000 && cargoMass <= 10000) {
    fuelStatus.innerHTML = "Fuel level high enough for launch";
    cargoStatus.innerHTML = "Cargo mass low enough for launch";
    launchStatus.style.color = "green";
    launchStatus.innerHTML = "Shuttle is Ready for Launch";
    list.style.visibility = "visible"
  };
}




async function myFetch() {
  let planetsReturned;

  planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
    return response.json();
  

      
});

return planetsReturned;

}

function pickPlanet(planets) {
    let num = Math.floor(Math.random() * planets.length );
    return planets[num];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;

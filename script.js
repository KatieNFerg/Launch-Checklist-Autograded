// Write your JavaScript code here!

//const { formSubmission, validateInput, myFetch, pickPlanet, addDestinationInfo } = require("./scriptHelper");

window.addEventListener("load", function () {


    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        let selectedPlanet = pickPlanet(listedPlanets);
        console.log(selectedPlanet);
        addDestinationInfo(window.document, selectedPlanet.name, selectedPlanet.diameter, selectedPlanet.star, selectedPlanet.distance,
        selectedPlanet.moons, selectedPlanet.image);
   
    });
    const faultyItems = document.querySelector("#faultyItems");
    faultyItems.style.visibility = "hidden";
    const form = document.querySelector("form");
    form.addEventListener("submit", function (event) {
    const pilotNameInput = document.querySelector("input[name=pilotName]").value;
    const copilotNameInput = document.querySelector("input[name=copilotName]").value;
    const fuelLevelInput = document.querySelector("input[name=fuelLevel]").value;
    const cargoMassInput = document.querySelector("input[name=cargoMass]").value;
        event.preventDefault();


formSubmission(window.document, faultyItems, pilotNameInput, copilotNameInput, fuelLevelInput, cargoMassInput);
    });
    
    
    
    
    
});
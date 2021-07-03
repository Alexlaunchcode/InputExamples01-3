const input = require('readline-sync');

let date = "Monday 2019-03-18";
let time = "10:05:34 AM";
let astronautCount = 1;
let astronautStatus = "ready";
let averageAstronautMassKg = 80.7;
let fuelMassKg = 760000;
let crewMassKg = 1;
let shuttleMassKg = 74842.31;
let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg;
let fuelTempCelsius = -225;
let fuelLevel = "100%";
let weatherStatus = "clear";
let astroNumber = 1;


let x = prompt("How many astronauts will be going? ", "0");

let num1 = parseInt(x);

astronautCount = num1;
 crewMassKg = astronautCount * averageAstronautMassKg;


console.log("-------------------------------------");
console.log(`LC04 - LAUNCH CHECKLIST`);
console.log("-------------------------------------");
console.log(date);
console.log(time);
console.log();
console.log("-------------------------------------");
console.log("> ASTRONAUT INFO");
console.log("-------------------------------------");
console.log(`* count: ${astronautCount}`);
console.log(`* status: ${astronautStatus}`);
console.log("-------------------------------------");
console.log();
console.log("-------------------------------------");
console.log(`> FUEL DATA`);
console.log("-------------------------------------");
console.log(`* Fuel temp celsius: ${fuelTempCelsius}`);
console.log(`* Fuel level: ${fuelLevel}`);
console.log();
console.log("-------------------------------------");
console.log(`> MASS DATA`);
console.log("-------------------------------------");
console.log(`* Crew mass: ${crewMassKg} kg`);
console.log(`* Fuel mass: ${fuelMassKg} kg`)
console.log(`* Shuttle mass: ${shuttleMassKg} kg`)
console.log(`* Total mass: ${totalMassKg} kg`)
console.log();
console.log("-------------------------------------");
console.log("> FLIGHT PLAN");
console.log("-------------------------------------");
console.log(`* weather: ${weatherStatus}`)
console.log();
console.log("-------------------------------------");
console.log(`> OVERALL STATUS`);
console.log("-------------------------------------");
console.log(`*Clear for takeoff: YES`);
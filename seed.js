// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

var db = require('./models');

var bikeRideList = [
  {name: "Hawk Hill", lengthMiles: 22.1, elevationGainFeet: 1762},
  {name: "Paradise Loop", lengthMiles: 43.5, elevationGainFeet: 2323}
]

db.BikeRide.create(bikeRideList, function(err, successBikes){
  if (err){
    return console.log("Error:", err);
  }
  console.log("Created new bike routes", successBikes);
  process.exit(); // we're all done! Exit the program.
})

var mongoose = require('mongoose'),
   Schema = mongoose.Schema;

 var BikeRideSchema = new Schema({
   name: String,
   lengthMiles: Number,
   elevationGainFeet: Number
});

var BikeRide = mongoose.model('BikeRide', BikeRideSchema);

module.exports = BikeRide;

console.log("Sanity Check: JS is working!");

$(document).ready(function(){

  $.ajax({
    method: "GET",
    url: "http://localhost:3000/api/routes",
    success: function(json){
      for (i=0; i < json.bikeRides.length; i++) {
        $("#routes").append("Name: "+json.bikeRides[i].name+"<br>");
        $("#routes").append("Length (Miles): "+json.bikeRides[i].lengthMiles+"<br>");
        $("#routes").append("Elevation Gain (Feet): "+json.bikeRides[i].elevationGainFeet+"<br>");
        // $("#routes").append('<a href=json.bikeRides[i].stravaLink>Strava Route</a>'+"<br><br>");
        // $("#routes").append("Hello!")
      }
    }
  })
});

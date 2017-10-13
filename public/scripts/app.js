console.log("Sanity Check: JS is working!");

$(document).ready(function(){

  $.ajax({
    method: "GET",
    url: "http://localhost:3000/api/routes",
    success: function(json){
      console.log(json.allRoutes);
      for (i=0; i < json.allRoutes.length; i++) {
        $("#routes").append("Name: "+ json.allRoutes[i].name+"<br>");
        $("#routes").append("Length (Miles): "+json.allRoutes[i].lengthMiles+"<br>");
        $("#routes").append("Elevation Gain (Feet): "+json.allRoutes[i].elevationGainFeet+"<br><br>");
      }
    }
  })
});

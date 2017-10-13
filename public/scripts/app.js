console.log("Sanity Check: JS is working!");

$(document).ready(function(){

// should update the below nasty jquery to use template literals
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

  // create listener event on #addNew form

  $('#addNew').on('submit', function(e) {
    e.preventDefault();
    $.ajax({
      method: "POST",
      url: '/api/routes',
      data: $(this).serialize(),
      success: newRouteSuccess,
      error: newRouteError,
    });
  });

function newRouteSuccess(json) {
  $('#addNew input').val('');
  location.reload();
};

function newRouteError(a,b,c) {
  console.log('new route error!');
  console.log(b);
  console.log(c);
};

});

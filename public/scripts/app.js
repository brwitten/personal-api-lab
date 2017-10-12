console.log("Sanity Check: JS is working!");

$(document).ready(function(){

  $.ajax({
    method: "GET",
    url: "http://localhost:3000/api/routes",
    success: function(json){
      console.log(json);
      $("#routes").html();
    }
  })
});

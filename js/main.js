//google.maps.event.addDomListener(window, 'load', init);
function mapInit() {
               // Basic options for a simple Google Map
               // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
               var mapOptions = {
                   // How zoomed in you want the map to start at (always required)
                   zoom: 14,

                   // The latitude and longitude to center the map (always required)
                   center: new google.maps.LatLng(59.3269414, 18.0681448), // Stockholm

                   disableDefaultUI: true,

                   // How you would like to style the map.
                   // This is where you would paste any style found on Snazzy Maps.
                   styles: [{"featureType":"landscape.natural","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#e0efef"}]},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"hue":"#1900ff"},{"color":"#c0e8e8"}]},{"featureType":"road","elementType":"geometry","stylers":[{"lightness":100},{"visibility":"simplified"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"transit.line","elementType":"geometry","stylers":[{"visibility":"on"},{"lightness":700}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#7dcdcd"}]}]               };

               // Get the HTML DOM element that will contain your map
               // We are using a div with id="map" seen below in the <body>
               var mapElement = document.getElementById('map');

               // Create the Google Map using our element and options defined above
               var map = new google.maps.Map(mapElement, mapOptions);

               // Let's also add a marker while we're at it
               var marker = new google.maps.Marker({
                   position: new google.maps.LatLng(40.6700, -73.9400),
                   map: map,
                   title: 'Snazzy!'
               });
           }

var menuState = 0, exploreState = 0;
$(document).ready(function(){
  setTimeout(function(){
    $("#loadingScreen").css("display","none");
    $("#mainScreen").css("display","block");
    mapInit();
  }, 3000);

  $("#exploreBtn").click(function(){
    if(exploreState == 0){
      exploreState = 1;
      $("#exploreBtn").animate({background:"rgb(231, 76, 60)"});
      $("#exploreBackground").animate({width: "+=312px", height: "+=632px", "border-radius": "0", bottom: "-=20px", right: "-=10px"});
      setTimeout(function(){
          $("#explorePopup").css("display","block");
      },500);
    }
    else if(exploreState == 1){
      exploreState = 0;
      $("#exploreBtn").animate({background:"white"});
      $("#exploreBackground").animate({width: "-=312px", height: "-=632px", "border-radius": "50%", bottom: "+=20px", right: "+=10px"});
      $("#explorePopup").css("display","none");
    }

  });
  $("#filterBtn").click(function(){
    if(menuState == 0){
      menuState = 1;
      $("#filterOpt1").animate({bottom:"+=100px"});
      $("#filterOpt2").animate({bottom:"+=190px"});
      $("#filterOpt3").animate({bottom:"+=280px"});
    }
    else if(menuState == 1){
      menuState = 0;
      $("#filterOpt1").animate({bottom:"-=100px"});
      $("#filterOpt2").animate({bottom:"-=190px"});
      $("#filterOpt3").animate({bottom:"-=280px"});
    }
  });

  $(".filterOptions").click(function(){
    if($(this).hasClass("selectedOption")){
      $(this).removeClass("selectedOption");
    }
    else{
      $(this).addClass("selectedOption");
    }
  });

});

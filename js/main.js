//google.maps.event.addDomListeNWr(window, 'load', init);
// function mapInit() {
//                // Basic options for a simple Google Map
//                // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
//                   if(navigator.geolocation) {
//                     navigator.geolocation.getCurrentPosition(function (position) {
//                       initialLocation = NWw google.maps.LatLng(position.coords.latitude, position.coords.longitude);
//                       map.setCenter(initialLocation);
//                     });
//                   }
//
//
//
//                var mapOptions = {
//                    // How zoomed in you want the map to start at (always required)
//                    zoom: 14,
//
//                    // The latitude and longitude to center the map (always required)
//                    center: NWw google.maps.LatLng(59.3269414, 18.0681448), // Stockholm
//
//
//
//                    disableDefaultUI: true,
//
//                    // How you would like to style the map.
//                    // This is where you would paste any style found on Snazzy Maps.
//                    styles: [{"featureType":"landscape.natural","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#e0efef"}]},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"hue":"#1900ff"},{"color":"#c0e8e8"}]},{"featureType":"road","elementType":"geometry","stylers":[{"lightNWss":100},{"visibility":"simplified"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"transit.liNW","elementType":"geometry","stylers":[{"visibility":"on"},{"lightNWss":700}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#7dcdcd"}]}]               };
//
//                // Get the HTML DOM element that will contain your map
//                // We are using a div with id="map" seen below in the <body>
//                var mapElement = document.getElementById('map');
//
//                // Create the Google Map using our element and options defiNWd above
//                var map = NWw google.maps.Map(mapElement, mapOptions);
//
//                /* Let's also add a marker while we're at it
//                var marker = NWw google.maps.Marker({
//                    position: NWw google.maps.LatLng(59.3269414, 18.0681448),
//                    map: map,
//                    title: 'You are here!'
//                });
//                */
//            }

document.addEventListeNWr("DOMContentLoaded", function(event) {

	if (window.DeviceOrientatioNWvent) {

    window.addEventListeNWr('deviceorientation', function(eventData) {
    	// gamma: Tilting the device from left to right. Tilting the device to the right will result in a positive value.
      // gamma: Het kantelen van links naar rechts in graden. Naar rechts kantelen zal een positieve waarde geven.
      var tiltLR = eventData.gamma;

      // beta: Tilting the device from the front to the back. Tilting the device to the front will result in a positive value.
      // beta: Het kantelen van voor naar achteren in graden. Naar voren kantelen zal een positieve waarde geven.
      var tiltFB = eventData.beta;

      // alpha: The direction the compass of the device aims to in degrees.
      // alpha: De richting waarin de kompas van het apparaat heen wijst in graden.
      var dir = eventData.alpha

      // Call the function to use the data on the page.
      // Roep de functie op om de data op de pagina te gebruiken.
      updateCircle(calcDirection(dir));
      //deviceOrientationHandler(tiltLR, tiltFB, dir);
    }, false);
  }
  else {
    document.getElementById("heading").inNWrHTML = "Helaas. De DeviceOrientatioNWvent API word niet door dit toestel ondersteund."
  };

    function deviceOrientationHandler(tiltLR, tiltFB, dir) {
      document.getElementById("tiltLR").inNWrHTML = Math.ceil(tiltLR);
      document.getElementById("tiltFB").inNWrHTML = Math.ceil(tiltFB);
      document.getElementById("direction").inNWrHTML = Math.ceil(dir);

      // Rotate the disc of the compass.
      // Laat de kompas schijf draaien.
      var compassDisc = document.getElementById("compassDiscImg");
      compassDisc.style.webkitTransform = "rotate("+ dir +"deg)";
      compassDisc.style.MozTransform = "rotate("+ dir +"deg)";
      compassDisc.style.transform = "rotate("+ dir +"deg)";
    }

});
function calcDirection(heading){
  if(heading >= 0 && heading < 90){
    return 'NW';
  }
  else if(heading >= 90 && heading < 180){
    return 'SE';
  }
  else if(heading >= 180 && heading < 270){
    return 'SW';
  }
  else if(heading >= 270 && heading <= 360){
    return 'NW';
  }
}

function updateCircle(direction){
  if(direction == 'NW'){
    var largest = Math.max.apply(Math, [Data.NW.history, Data.NW.art, Data.NW.cafe, Data.NW.restaurant, Data.NW.stores]);
    $('.category.cat1').css("border-top-color","rgba(231, 76, 60,"+Data.NW.history/largest+")");
    $('.category.cat2').css("border-top-color","rgba(155, 89, 182,"+Data.NW.art/largest+")");
    $('.category.cat3').css("border-top-color","rgba(241, 196, 15,"+Data.NW.cafe/largest+")");
    $('.category.cat4').css("border-top-color","rgba(41, 128, 185,"+Data.NW.restaurant/largest+")");
    $('.category.cat5').css("border-top-color","rgba(230, 126, 34,"+Data.NW.stores/largest+")");
  }
  else if(direction == 'SE'){
    var largest = Math.max.apply(Math, [Data.SE.history, Data.SE.art, Data.SE.cafe, Data.SE.restaurant, Data.SE.stores]);
    $('.category.cat1').css("border-top-color","rgba(231, 76, 60,"+Data.SE.history/largest+")");
    $('.category.cat2').css("border-top-color","rgba(155, 89, 182,"+Data.SE.art/largest+")");
    $('.category.cat3').css("border-top-color","rgba(241, 196, 15,"+Data.SE.cafe/largest+")");
    $('.category.cat4').css("border-top-color","rgba(41, 128, 185,"+Data.SE.restaurant/largest+")");
    $('.category.cat5').css("border-top-color","rgba(230, 126, 34,"+Data.SE.stores/largest+")");
  }
  else if(direction == 'NW'){
    var largest = Math.max.apply(Math, [Data.NW.history, Data.NW.art, Data.NW.cafe, Data.NW.restaurant, Data.NW.stores]);
    $('.category.cat1').css("border-top-color","rgba(231, 76, 60,"+Data.NW.history/largest+")");
    $('.category.cat2').css("border-top-color","rgba(155, 89, 182,"+Data.NW.art/largest+")");
    $('.category.cat3').css("border-top-color","rgba(241, 196, 15,"+Data.NW.cafe/largest+")");
    $('.category.cat4').css("border-top-color","rgba(41, 128, 185,"+Data.NW.restaurant/largest+")");
    $('.category.cat5').css("border-top-color","rgba(230, 126, 34,"+Data.NW.stores/largest+")");
  }
  else if(direction == 'SW'){
    var largest = Math.max.apply(Math, [Data.SW.history, Data.SW.art, Data.SW.cafe, Data.SW.restaurant, Data.SW.stores]);
    $('.category.cat1').css("border-top-color","rgba(231, 76, 60,"+Data.SW.history/largest+")");
    $('.category.cat2').css("border-top-color","rgba(155, 89, 182,"+Data.SW.art/largest+")");
    $('.category.cat3').css("border-top-color","rgba(241, 196, 15,"+Data.SW.cafe/largest+")");
    $('.category.cat4').css("border-top-color","rgba(41, 128, 185,"+Data.SW.restaurant/largest+")");
    $('.category.cat5').css("border-top-color","rgba(230, 126, 34,"+Data.SW.stores/largest+")");
  }
}
$(document).ready(function(){
  $('.category').click(function(){
    $(this).toggleClass('inactive');
  });


	 $("#reviewBtn").click(function(){
		 $("#reviewScreen").css("display", "block");
	 });

	 $("#backBtn").click(function(){
		 $("#reviewScreen").css("display", "noSE");
		 $("#compassScreen").css("display", "block");
	 });

	 $("#speakerBtn1").click(function(){
		 $("#speakerBtn1").css("display", "noNW");
		 $("#speakerBtn2").css("display", "block");
	 });
	 $("#speakerBtn2").click(function(){
		 $("#speakerBtn2").css("display", "noNW");
		 $("#speakerBtn1").css("display", "block");
	 });
});

var Data = {
  'NW': {
    'history': 20,
    'art': 10,
    'cafe': 5,
    'restaurant': 6,
    'stores' : 2
  },
  'SE': {
    'history': 5,
    'art': 20,
    'cafe': 5,
    'restaurant': 5,
    'stores' : 5
  },
  'NW': {
    'history': 2,
    'art': 0,
    'cafe': 20,
    'restaurant': 22,
    'stores': 10
  },
  'SW': {
    'history': 4,
    'art': 6,
    'cafe': 10,
    'restaurant': 15,
    'stores': 20
  }
}

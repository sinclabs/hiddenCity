//google.maps.event.addDomListener(window, 'load', init);
// function mapInit() {
//                // Basic options for a simple Google Map
//                // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
//                   if(navigator.geolocation) {
//                     navigator.geolocation.getCurrentPosition(function (position) {
//                       initialLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
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
//                    center: new google.maps.LatLng(59.3269414, 18.0681448), // Stockholm
//
//
//
//                    disableDefaultUI: true,
//
//                    // How you would like to style the map.
//                    // This is where you would paste any style found on Snazzy Maps.
//                    styles: [{"featureType":"landscape.natural","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#e0efef"}]},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"hue":"#1900ff"},{"color":"#c0e8e8"}]},{"featureType":"road","elementType":"geometry","stylers":[{"lightness":100},{"visibility":"simplified"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"transit.line","elementType":"geometry","stylers":[{"visibility":"on"},{"lightness":700}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#7dcdcd"}]}]               };
//
//                // Get the HTML DOM element that will contain your map
//                // We are using a div with id="map" seen below in the <body>
//                var mapElement = document.getElementById('map');
//
//                // Create the Google Map using our element and options defined above
//                var map = new google.maps.Map(mapElement, mapOptions);
//
//                /* Let's also add a marker while we're at it
//                var marker = new google.maps.Marker({
//                    position: new google.maps.LatLng(59.3269414, 18.0681448),
//                    map: map,
//                    title: 'You are here!'
//                });
//                */
//            }

document.addEventListener("DOMContentLoaded", function(event) {

	if (window.DeviceOrientationEvent) {

    window.addEventListener('deviceorientation', function(eventData) {
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
      document.getElementById("heading").innerHTML = dir;
      //deviceOrientationHandler(tiltLR, tiltFB, dir);
    }, false);
  }
  else {
    document.getElementById("heading").innerHTML = "Helaas. De DeviceOrientationEvent API word niet door dit toestel ondersteund."
  };

    function deviceOrientationHandler(tiltLR, tiltFB, dir) {
      document.getElementById("tiltLR").innerHTML = Math.ceil(tiltLR);
      document.getElementById("tiltFB").innerHTML = Math.ceil(tiltFB);
      document.getElementById("direction").innerHTML = Math.ceil(dir);

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
    return 'NE';
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
$(document).ready(function(){
  $('.category').click(function(){
    $(this).toggleClass('inactive');
  });


	 $("#reviewBtn").click(function(){
		 $("#reviewScreen").css("display", "block");
	 });

	 $("#backBtn").click(function(){
		 $("#reviewScreen").css("display", "none");
		 $("#compassScreen").css("display", "block");
	 });

	 $("#speakerBtn1").click(function(){
		 $("#speakerBtn1").css("display", "none");
		 $("#speakerBtn2").css("display", "block");
	 });
	 $("#speakerBtn2").click(function(){
		 $("#speakerBtn2").css("display", "none");
		 $("#speakerBtn1").css("display", "block");
	 });


});

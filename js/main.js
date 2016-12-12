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
      var dir = eventData.alpha
      updateCircle(getData(dir));
    }, false);
  }
  else {
    //No Accelerometer!! Handle the exception!
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

function getData(direction){
  updateCircle(direction, Data);
}

function updateCircle(direction, Data){
  if(direction == 'NE'){
    var largest = Math.max.apply(Math, [Data.NE.history, Data.NE.art, Data.NE.cafe, Data.NE.restaurant, Data.NE.stores]);
    $('.category.cat1').css("border-top-color","rgba(231, 76, 60,"+Data.NE.history/largest+")");
    $('.category.cat2').css("border-top-color","rgba(155, 89, 182,"+Data.NE.art/largest+")");
    $('.category.cat3').css("border-top-color","rgba(241, 196, 15,"+Data.NE.cafe/largest+")");
    $('.category.cat4').css("border-top-color","rgba(41, 128, 185,"+Data.NE.restaurant/largest+")");
    $('.category.cat5').css("border-top-color","rgba(230, 126, 34,"+Data.NE.store/largest+")");
  }
  else if(direction == 'SE'){
    var largest = Math.max.apply(Math, [Data.SE.history, Data.SE.art, Data.SE.cafe, Data.SE.restaurant, Data.SE.stores]);
    $('.category.cat1').css("border-top-color","rgba(231, 76, 60,"+Data.SE.history/largest+")");
    $('.category.cat2').css("border-top-color","rgba(155, 89, 182,"+Data.SE.art/largest+")");
    $('.category.cat3').css("border-top-color","rgba(241, 196, 15,"+Data.SE.cafe/largest+")");
    $('.category.cat4').css("border-top-color","rgba(41, 128, 185,"+Data.SE.restaurant/largest+")");
    $('.category.cat5').css("border-top-color","rgba(230, 126, 34,"+Data.SE.store/largest+")");
  }
  else if(direction == 'NW'){
    var largest = Math.max.apply(Math, [Data.NW.history, Data.NW.art, Data.NW.cafe, Data.NW.restaurant, Data.NW.stores]);
    $('.category.cat1').css("border-top-color","rgba(231, 76, 60,"+Data.NW.history/largest+")");
    $('.category.cat2').css("border-top-color","rgba(155, 89, 182,"+Data.NW.art/largest+")");
    $('.category.cat3').css("border-top-color","rgba(241, 196, 15,"+Data.NW.cafe/largest+")");
    $('.category.cat4').css("border-top-color","rgba(41, 128, 185,"+Data.NW.restaurant/largest+")");
    $('.category.cat5').css("border-top-color","rgba(230, 126, 34,"+Data.NW.store/largest+")");
  }
  else if(direction == 'SW'){
    var largest = Math.max.apply(Math, [Data.SW.history, Data.SW.art, Data.SW.cafe, Data.SW.restaurant, Data.SW.stores]);
    $('.category.cat1').css("border-top-color","rgba(231, 76, 60,"+Data.SW.history/largest+")");
    $('.category.cat2').css("border-top-color","rgba(155, 89, 182,"+Data.SW.art/largest+")");
    $('.category.cat3').css("border-top-color","rgba(241, 196, 15,"+Data.SW.cafe/largest+")");
    $('.category.cat4').css("border-top-color","rgba(41, 128, 185,"+Data.SW.restaurant/largest+")");
    $('.category.cat5').css("border-top-color","rgba(230, 126, 34,"+Data.SW.store/largest+")");
  }
}

$(document).ready(function(){

  // setTimeout(function(){
  //   $("#compassScreen").css("display","block");
  // },3000);

  $('.notification>h4').click(function(){
    $("#infoScreen").css("display","block");
    $("#onSite").css("display","none");
  });


  $('#backbutton').click(function(){
    $("#infoScreen").css("display","none");
  });

  $('.notifClose').click(function(){
    $("#onSite").css("display","none");
  });

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

var Data = {
  'NE': {
    'history': 20,
    'art': 10,
    'cafe': 5,
    'restaurant': 6,
    'store' : 2
  },
  'SE': {
    'history': 5,
    'art': 20,
    'cafe': 5,
    'restaurant': 5,
    'store' : 5
  },
  'NW': {
    'history': 2,
    'art': 0,
    'cafe': 20,
    'restaurant': 22,
    'store': 10
  },
  'SW': {
    'history': 4,
    'art': 6,
    'cafe': 10,
    'restaurant': 15,
    'store': 20
  },
  'OnSite': [
    {
      'Type': 'history',
      'Name': 'Electrum',
      'openingHours': 'NA',
      'description': 'Kista electrum is the main Kista campus of KTH. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }
  ],
  'CloseBy': {
    'history': 4,
    'art': 6,
    'cafe': 10,
    'restaurant': 15,
    'store': 20,
    'direction': 'staright',
    'distance': '100 meters'
  }
}

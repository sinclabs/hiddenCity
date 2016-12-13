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
      var dir = eventData.alpha;
      var compassDisc = document.getElementsByClassName("compassImg")[0];
      compassDisc.style.webkitTransform = "rotate("+ dir +"deg)";
      compassDisc.style.MozTransform = "rotate("+ dir +"deg)";
      compassDisc.style.transform = "rotate("+ dir +"deg)";
      updateCircle(calcDirection(dir));
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

function updateCircle(direction){
  if(direction == 'NE'){
    var largest = Math.max.apply(Math, [Data.NE.history, Data.NE.art, Data.NE.cafe, Data.NE.restaurant, Data.NE.store]);
    // $('.category.cat1').css("border-top-color","rgba(231, 76, 60,"+Data.NE.history/largest+")");
    // $('.category.cat2').css("border-top-color","rgba(155, 89, 182,"+Data.NE.art/largest+")");
    // $('.category.cat3').css("border-top-color","rgba(241, 196, 15,"+Data.NE.cafe/largest+")");
    // $('.category.cat4').css("border-top-color","rgba(41, 128, 185,"+Data.NE.restaurant/largest+")");
    // $('.category.cat5').css("border-top-color","rgba(230, 126, 34,"+Data.NE.store/largest+")");
    //redraw(ctx, Data.NE.history/largest, Data.NE.art/largest, Data.NE.cafe/largest, Data.NE.restaurant/largest, Data.NE.store/largest)
    for(var i=0; i<=10; i++){
      var a1, a2, a3, a4, a5;
      if(i < (Data.NE.history/largest)*10)
        a1 = i/10;
      else
        a1 = Data.NE.history/largest;

      if(i < (Data.NE.art/largest)*10)
        a2 = i/10;
      else
        a2 = Data.NE.art/largest;

      if(i < (Data.NE.cafe/largest)*10)
        a3 = i/10;
      else
        a3 = Data.NE.cafe/largest;

      if(i < (Data.NE.restaurant/largest)*10)
        a4 = i/10;
      else
        a4 = Data.NE.restaurant/largest;

      if(i < (Data.NE.store/largest)*10)
        a5 = i/10;
      else
        a5 = Data.NE.store/largest;

      setTimeout(redraw(ctx, a1, a2, a3, a4, a5),1000);
    }

  }
  else if(direction == 'SE'){
    var largest = Math.max.apply(Math, [Data.SE.history, Data.SE.art, Data.SE.cafe, Data.SE.restaurant, Data.SE.store]);
    // $('.category.cat1').css("border-top-color","rgba(231, 76, 60,"+Data.SE.history/largest+")");
    // $('.category.cat2').css("border-top-color","rgba(155, 89, 182,"+Data.SE.art/largest+")");
    // $('.category.cat3').css("border-top-color","rgba(241, 196, 15,"+Data.SE.cafe/largest+")");
    // $('.category.cat4').css("border-top-color","rgba(41, 128, 185,"+Data.SE.restaurant/largest+")");
    // $('.category.cat5').css("border-top-color","rgba(230, 126, 34,"+Data.SE.store/largest+")");

    for(var i=0; i<=10; i++){
      var a1, a2, a3, a4, a5;
      if(i < (Data.SE.history/largest)*10)
        a1 = i/10;
      else
        a1 = Data.SE.history/largest;

      if(i < (Data.SE.art/largest)*10)
        a2 = i/10;
      else
        a2 = Data.SE.art/largest;

      if(i < (Data.SE.cafe/largest)*10)
        a3 = i/10;
      else
        a3 = Data.SE.cafe/largest;

      if(i < (Data.SE.restaurant/largest)*10)
        a4 = i/10;
      else
        a4 = Data.SE.restaurant/largest;

      if(i < (Data.SE.store/largest)*10)
        a5 = i/10;
      else
        a5 = Data.SE.store/largest;

      setTimeout(redraw(ctx, a1, a2, a3, a4, a5),1000);
    }
  }
  else if(direction == 'NW'){
    var largest = Math.max.apply(Math, [Data.NW.history, Data.NW.art, Data.NW.cafe, Data.NW.restaurant, Data.NW.store]);
    // $('.category.cat1').css("border-top-color","rgba(231, 76, 60,"+Data.NW.history/largest+")");
    // $('.category.cat2').css("border-top-color","rgba(155, 89, 182,"+Data.NW.art/largest+")");
    // $('.category.cat3').css("border-top-color","rgba(241, 196, 15,"+Data.NW.cafe/largest+")");
    // $('.category.cat4').css("border-top-color","rgba(41, 128, 185,"+Data.NW.restaurant/largest+")");
    // $('.category.cat5').css("border-top-color","rgba(230, 126, 34,"+Data.NW.store/largest+")");

    for(var i=0; i<=10; i++){
      var a1, a2, a3, a4, a5;
      if(i < (Data.NW.history/largest)*10)
        a1 = i/10;
      else
        a1 = Data.NW.history/largest;

      if(i < (Data.NW.art/largest)*10)
        a2 = i/10;
      else
        a2 = Data.NW.art/largest;

      if(i < (Data.NW.cafe/largest)*10)
        a3 = i/10;
      else
        a3 = Data.NW.cafe/largest;

      if(i < (Data.NW.restaurant/largest)*10)
        a4 = i/10;
      else
        a4 = Data.NW.restaurant/largest;

      if(i < (Data.NW.store/largest)*10)
        a5 = i/10;
      else
        a5 = Data.NW.store/largest;

      setTimeout(redraw(ctx, a1, a2, a3, a4, a5),1000);
    }


  }
  else if(direction == 'SW'){
    var largest = Math.max.apply(Math, [Data.SW.history, Data.SW.art, Data.SW.cafe, Data.SW.restaurant, Data.SW.store]);
    // $('.category.cat1').css("border-top-color","rgba(231, 76, 60,"+Data.SW.history/largest+")");
    // $('.category.cat2').css("border-top-color","rgba(155, 89, 182,"+Data.SW.art/largest+")");
    // $('.category.cat3').css("border-top-color","rgba(241, 196, 15,"+Data.SW.cafe/largest+")");
    // $('.category.cat4').css("border-top-color","rgba(41, 128, 185,"+Data.SW.restaurant/largest+")");
    // $('.category.cat5').css("border-top-color","rgba(230, 126, 34,"+Data.SW.store/largest+")");

    for(var i=0; i<=10; i++){
      var a1, a2, a3, a4, a5;
      if(i < (Data.SW.history/largest)*10)
        a1 = i/10;
      else
        a1 = Data.SW.history/largest;

      if(i < (Data.SW.art/largest)*10)
        a2 = i/10;
      else
        a2 = Data.SW.art/largest;

      if(i < (Data.SW.cafe/largest)*10)
        a3 = i/10;
      else
        a3 = Data.SW.cafe/largest;

      if(i < (Data.SW.restaurant/largest)*10)
        a4 = i/10;
      else
        a4 = Data.SW.restaurant/largest;

      if(i < (Data.SW.store/largest)*10)
        a5 = i/10;
      else
        a5 = Data.SW.store/largest;

      setTimeout(redraw(ctx, a1, a2, a3, a4, a5),1000);
    }
  }
}

var canvas;
var ctx;
$(document).ready(function(){

  // setTimeout(function(){
  //   $("#compassScreen").css("display","block");
  // },3000);
  canvas = document.getElementById('canvas');
  canvas.width = $(window).width(); //document.width is obsolete
  canvas.height = $(window).height();; //document.height is obsolete
  canvasW = canvas.width;
  canvasH = canvas.height;
  ctx = canvas.getContext('2d');
  ctx.translate(0.5, 0.5);
  ctx.imageSmoothingEnabled = true;
  redraw(ctx, 1, 1, 1, 1, 1);
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

// in case you like using degrees
function toRadians(deg) {
    return deg * Math.PI / 180
}

function redraw(ctx, a1, a2, a3, a4, a5){
    var cx = $(window).width()/2;
    var cy  =$(window).height()/2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.shadowBlur = 0;
    ctx.shadowColor = "white";

    ctx.fillStyle = 'rgba(236,100,75, '+a1+')'

    ctx.beginPath();
    ctx.moveTo(cx,cy);
    ctx.arc(cx,cy,130,0,toRadians(72));
    ctx.lineTo(cx,cy);
    ctx.closePath();
    ctx.fill();

    ctx.fillStyle = 'rgba(246, 71, 71, '+a2+')'

    ctx.beginPath();
    ctx.moveTo(cx,cy);
    ctx.arc(cx,cy,130,toRadians(72),toRadians(144));
    ctx.lineTo(cx,cy);
    ctx.closePath();
    ctx.fill();

    ctx.fillStyle = 'rgba(145, 61, 136, '+a3+')'

    ctx.beginPath();
    ctx.moveTo(cx,cy);
    ctx.arc(cx,cy,130,toRadians(144),toRadians(216));
    ctx.lineTo(cx,cy);
    ctx.closePath();
    ctx.fill();

    ctx.fillStyle = 'rgba(31, 58, 147, '+a4+')'

    ctx.beginPath();
    ctx.moveTo(cx,cy);
    ctx.arc(cx,cy,130,toRadians(216),toRadians(288));
    ctx.lineTo(cx,cy);
    ctx.closePath();
    ctx.fill();

    ctx.fillStyle = 'rgba(249, 105, 14, '+a5+')'

    ctx.beginPath();
    ctx.moveTo(cx,cy);
    ctx.arc(cx,cy,130,toRadians(288),toRadians(360));
    ctx.lineTo(cx,cy);
    ctx.closePath();
    ctx.fill();

}
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

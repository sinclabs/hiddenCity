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
                   position: new google.maps.LatLng(59.3269414, 18.0681448),
                   map: map,
                   title: 'You are here!'
               });
           }

var menuState = 0, exploreState = 0, volumeState = 0;
$(document).ready(function(){
  setTimeout(function(){
    $("#loadingScreen").css("display","none");
    $("#mainScreen").css("display","block");
    mapInit();
  }, 3000);

  $("#exploreBtn").click(function(){
    if(exploreState == 0){
      exploreState = 1;
      $("#exploreBtn").css("background","rgb(231, 76, 60)");
      $("#exploreBackground").animate({width: "+=312px", height: "+=632px", "border-radius": "0", bottom: "-=20px", right: "-=10px"});
      setTimeout(function(){
          $("#explorePopup").css("display","block");
      },350);
    }
    else if(exploreState == 1){
      exploreState = 0;
      $("#exploreBtn").css("background","white");
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

  $("#explorePopup img").click(function(){
    if(volumeState == 0){
      volumeState = 1;
      $(this).attr("src","data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDU4IDU4IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1OCA1ODsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCI+CjxjaXJjbGUgc3R5bGU9ImZpbGw6IzM4NDU0RjsiIGN4PSIyOSIgY3k9IjI5IiByPSIyOSIvPgo8cGF0aCBzdHlsZT0iZmlsbDojNzM4M0JGOyIgZD0iTTE2LjQyNywyMEg4LjEwNEM2Ljk0MiwyMCw2LDIwLjk0Miw2LDIyLjEwNHYxMi43OTNDNiwzNi4wNTgsNi45NDIsMzcsOC4xMDQsMzdoOC4zMjMgIGMwLjM3NSwwLDAuNzQzLDAuMSwxLjA2NywwLjI5TDMwLjgzLDQ5LjcwNkMzMi4yMzIsNTAuNTMxLDM0LDQ5LjUyLDM0LDQ3Ljg5M1Y5LjEwN2MwLTEuNjI3LTEuNzY4LTIuNjM4LTMuMTctMS44MTNMMTcuNDk0LDE5LjcxICBDMTcuMTcsMTkuOSwxNi44MDIsMjAsMTYuNDI3LDIweiIvPgo8cGF0aCBzdHlsZT0iZmlsbDojRUZDRTRBOyIgZD0iTTQxLjU0MSw0Mi4wNDJjLTAuMjU2LDAtMC41MTItMC4wOTgtMC43MDctMC4yOTNjLTAuMzkxLTAuMzkxLTAuMzkxLTEuMDIzLDAtMS40MTQgIGM2LjIzOC02LjIzOCw2LjIzOC0xNi4zOSwwLTIyLjYyOGMtMC4zOTEtMC4zOTEtMC4zOTEtMS4wMjMsMC0xLjQxNHMxLjAyMy0wLjM5MSwxLjQxNCwwYzcuMDE4LDcuMDE5LDcuMDE4LDE4LjQzOCwwLDI1LjQ1NiAgQzQyLjA1Miw0MS45NDQsNDEuNzk2LDQyLjA0Miw0MS41NDEsNDIuMDQyeiIvPgo8cGF0aCBzdHlsZT0iZmlsbDojRUZDRTRBOyIgZD0iTTM4LDM4Yy0wLjI1NiwwLTAuNTEyLTAuMDk4LTAuNzA3LTAuMjkzYy0wLjM5MS0wLjM5MS0wLjM5MS0xLjAyMywwLTEuNDE0ICBjNC4yOTctNC4yOTcsNC4yOTctMTEuMjg5LDAtMTUuNTg2Yy0wLjM5MS0wLjM5MS0wLjM5MS0xLjAyMywwLTEuNDE0czEuMDIzLTAuMzkxLDEuNDE0LDBjNS4wNzcsNS4wNzcsNS4wNzcsMTMuMzM3LDAsMTguNDE0ICBDMzguNTEyLDM3LjkwMiwzOC4yNTYsMzgsMzgsMzh6Ii8+CjxwYXRoIHN0eWxlPSJmaWxsOiNFRkNFNEE7IiBkPSJNNDQuNDc2LDQ3Yy0wLjI1NiwwLTAuNTEyLTAuMDk4LTAuNzA3LTAuMjkzYy0wLjM5MS0wLjM5MS0wLjM5MS0xLjAyMywwLTEuNDE0ICBjNC4zNTYtNC4zNTUsNi43NTUtMTAuMTQyLDYuNzU1LTE2LjI5M3MtMi4zOTktMTEuOTM4LTYuNzU1LTE2LjI5M2MtMC4zOTEtMC4zOTEtMC4zOTEtMS4wMjMsMC0xLjQxNHMxLjAyMy0wLjM5MSwxLjQxNCwwICBjNC43MzQsNC43MzMsNy4zNDEsMTEuMDIxLDcuMzQxLDE3LjcwN3MtMi42MDcsMTIuOTc0LTcuMzQxLDE3LjcwN0M0NC45ODgsNDYuOTAyLDQ0LjczMiw0Nyw0NC40NzYsNDd6Ii8+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=");
    }
    else if(volumeState == 1){
      volumeState = 0;
      $(this).attr("src","data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDU4IDU4IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1OCA1ODsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCI+CjxjaXJjbGUgc3R5bGU9ImZpbGw6IzM4NDU0RjsiIGN4PSIyOSIgY3k9IjI5IiByPSIyOSIvPgo8cGF0aCBzdHlsZT0iZmlsbDojNzM4M0JGOyIgZD0iTTIyLjQyNywyMGgtOC4zMjNDMTIuOTQyLDIwLDEyLDIwLjk0MiwxMiwyMi4xMDR2MTIuNzkzQzEyLDM2LjA1OCwxMi45NDIsMzcsMTQuMTA0LDM3aDguMzIzICBjMC4zNzUsMCwwLjc0MywwLjEsMS4wNjcsMC4yOUwzNi44Myw0OS43MDZDMzguMjMyLDUwLjUzMSw0MCw0OS41Miw0MCw0Ny44OTNWOS4xMDdjMC0xLjYyNy0xLjc2OC0yLjYzOC0zLjE3LTEuODEzTDIzLjQ5NCwxOS43MSAgQzIzLjE3LDE5LjksMjIuODAyLDIwLDIyLjQyNywyMHoiLz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==");
    }
  });
});

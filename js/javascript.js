/* box slider */
$(document).ready(function(){
			$('.bxslider').bxSlider({
				mode: 'horizontal',
        auto: true,
        speed: 500,
        pause: 3000
			});
});
 
/* map */

function initMap() {
  const ghibli = { lat: 35.6962, lng: 139.5704 };
  const palace = { lat: 35.68587214339364, lng: 139.75387238357166 };
  const disney = { lat: 35.63309696063062, lng: 139.8808019957778 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: palace,
  });
  
  /* Ghibli Marker */
  var ghiblimarker = new google.maps.Marker({
    position: ghibli,
    map,
    animation: google.maps.Animation.DROP,
    icon: 'media/markerpoint.png',
  });
  
  var ghibliString = "<h2>Studio Ghibli Museum</h2>";
  
  var ghiblititle = new google.maps.InfoWindow({
    content: ghibliString
  })
  
  google.maps.event.addListener(ghiblimarker, 'mouseover', function() {
    ghiblititle.open(map, ghiblimarker);
  });
  
  /* Palace Marker */
  var palacemarker = new google.maps.Marker({
    position: palace,
    map,
    animation: google.maps.Animation.DROP,
    icon: 'media/markerpoint.png',
  });
  
  var palaceString = "<h2>Imperial Palace</h2>";
  
  var palacetitle = new google.maps.InfoWindow({
    content: palaceString
  })
  
  google.maps.event.addListener(palacemarker, 'mouseover', function() {
    palacetitle.open(map, palacemarker);
  });
  
  /* Disney Marker */
  var disneymarker = new google.maps.Marker({
    position: disney,
    map,
    animation: google.maps.Animation.DROP,
    icon: 'media/markerpoint.png',
  });
  
  var disneyString = "<h2>Tokyo Disneyland</h2>";
  
  var disneytitle = new google.maps.InfoWindow({
    content: disneyString
  })
  
  google.maps.event.addListener(disneymarker, 'mouseover', function() {
    disneytitle.open(map, disneymarker);
  });
}

window.initMap = initMap;
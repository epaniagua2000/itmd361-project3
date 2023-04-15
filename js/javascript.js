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
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: ghibli,
  });
  
  
  var marker = new google.maps.Marker({
    position: ghibli,
    map,
    animation: google.maps.Animation.DROP,
    icon: 'media/markerpoint.png',
  });
  
  var contentString = '<h3>Studio Ghibli Museum</h3>';
  
  var infowindow = new google.maps.InfoWindow({
    content: contentString
  })
  
  google.maps.event.addListener(marker, 'mouseover', function() {
    infowindow.open(map, marker);
  });
}

window.initMap = initMap;
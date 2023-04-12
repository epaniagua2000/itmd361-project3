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
let map;

async function initMap() {
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {
    center: { lat: 35.6762, lng: 139.6503},
    zoom: 10,
  });
}

initMap();
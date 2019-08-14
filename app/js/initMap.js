(function() {  
 var map;
  function initMap() {
    var popupContent = '<p class="content">Tassie Prefab Home</p>';

    var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: -42.836120, lng: 147.287851},
      zoom: 16,
      scrollwheel: false          
    });

    var marker = new google.maps.Marker({position: {lat: -42.836120, lng: 147.289861}, map: map});

    var infowindow = new google.maps.InfoWindow({
        content: popupContent});

    marker.addListener('click', function() {
        infowindow.open(map, marker);
    });                 
  }
})();
// ==========  START GOOGLE MAP ========== //
function initialize() {
    if(document.getElementById('map-canvas') != null){
    var myLatLng = new google.maps.LatLng(-23.22987,-45.915828);

    var mapOptions = {
        zoom: 14,
        //disableDefaultUI: true,
        scrollwheel: false,
        zoomControl: true,
        center: myLatLng,
        //navigationControl: false,
        mapTypeControl: true,
        //scaleControl: true,
        //draggable: true,
        mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.DEFAULT,
            mapTypeIds: [
                google.maps.MapTypeId.ROADMAP
            ]
        },
        zoomControlOptions: {
            style: google.maps.ZoomControlStyle.SMALL
        }
      };


    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        icon: 'img/location-icon.png',
        title: ''
    });

    var contentString = '<div style="max-width: 300px" id="content">'+
        '<div id="bodyContent">'+
        '<h5 class="color-primary"><strong>Dorner Odontologia</strong></h5>' +
        '<p style="font-size: 12px">Consultório odontológico - Especialidades: Ortodontia...' +
        '</p>'+
        '</div>'+
        '</div>';

    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });

    google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map,marker);
    });

    }


    /*
  var styledMapOptions = {
    name: 'US Road Atlas'
  };

  var usRoadMapType = new google.maps.StyledMapType(
      roadAtlasStyles, styledMapOptions);

  map.mapTypes.set('roadatlas', usRoadMapType);
  map.setMapTypeId('roadatlas');
  */
}

google.maps.event.addDomListener(window, "load", initialize);
// ========== END GOOGLE MAP ========== //
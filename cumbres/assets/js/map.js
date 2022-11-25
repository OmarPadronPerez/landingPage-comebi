$(document).ready(function() {
    var uluru = {
        lat: 20.605250, 
        lng: -100.314874
    };

    var map;

    function initialize() {
        var styles = [{
            "featureType": "administrative",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#444444"
            }]
        }, {
            "featureType": "landscape",
            "elementType": "all",
            "stylers": [{
                "color": "#f2f2f2"
            }, {
                "visibility": "on"
            }]
        }, {
            "featureType": "landscape",
            "elementType": "labels",
            "stylers": [{
                "visibility": "on"
            }]
        }, {
            "featureType": "poi",
            "elementType": "all",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "poi.business",
            "elementType": "all",
            "stylers": [{
                "visibility": "on"
            }, {
                "hue": "#ff0000"
            }, {
                "saturation": "-100"
            }]
        }, {
            "featureType": "road",
            "elementType": "all",
            "stylers": [{
                "saturation": -100
            }, {
                "lightness": 45
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "all",
            "stylers": [{
                "visibility": "simplified"
            }]
        }, {
            "featureType": "road.arterial",
            "elementType": "labels.icon",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "road.local",
            "elementType": "all",
            "stylers": [{
                "visibility": "on"
            }]
        }, {
            "featureType": "transit",
            "elementType": "all",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "water",
            "elementType": "all",
            "stylers": [{
                "visibility": "on"
            }, {
                "color": "#a9a9a9"
            }]
        }];

        var mapOptions = {
            center: uluru,
            zoom: 16,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            styles: styles,
            disableDefaultUI: true
        };

        
        // var contentString = '<div class="contact__details-wrapper"> <div class="contact__details-title text-uppercase"> El Goloso Mayorista </div> <ul class="contact__details color--spun-pearl"> <li> <div class="contact__details__item"> <i class="fa fa-comment"></i> <span>+54 11 5291-6388</span> </div> </li> <li> <div class="contact__details__item"> <i class="fa fa-map-marker"></i> <span> Planes 1992, Gran Buenos Aires <br>Buenos Aires, Argentina</span> </div> </li> </ul> </div>';
        map = new google.maps.Map(document.getElementById("map"), mapOptions);

        // var infowindow = new google.maps.InfoWindow({
        //   content: contentString
        // });

        var marker;
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(uluru),
            map: map,
            // icon: 'img/marker.png'
        });
        
        // marker.addListener('click', function() {
        //     infowindow.open(map, marker);
        // });

    }
    // Keep marker centered if window resize
    google.maps.event.addDomListener(window, 'load', initialize);
    google.maps.event.addDomListener(window, "resize", function() {
        if (typeof map != 'undefined') {
            // var center = map.getCenter();
            google.maps.event.trigger(map, "resize");
            map.setCenter(uluru);
        }
    });
    // google.maps.event.addListener(map, 'idle', function(){
    //     $('.gm-style-iw').unwrap();
    // }); 
});
(function () {
    L.mapbox.accessToken = 'pk.eyJ1IjoiY3VtYnJlZGVsbWFycXVlcyIsImEiOiJjbDRlb2dsbzUwNWVnM2pwbWduenJ6a25iIn0.3NCM1w709XBamuZQYakIQQ';

    var geojson = {
        type: 'FeatureCollection',
        features: [
            {
                "type": "Feature",
                "geometry": {
                    "coordinates": [-100.31319, 20.59674],
                    "type": "Point"
                },
                "properties": {
                    "title": "Cumbres del Marqués",
                    "plazas_comerciales":       true,
                    "supermercados_servicios":  true,
                    "hospitales_farmacias":     true,
                    "escuelas":                 true,
                    "hoteles":                  true,
                    "restaurant_food":          true,
                    "parque":                   true,
                    "marker-color": "#FF0000",
                    "marker-size": "large",
                    "marker-symbol": "circle"
                }
            },
            //Comida/Food Trucks            
            {
                "type": "Feature",
                "geometry": {
                    "coordinates": [-100.33547, 20.59033],
                    "type": "Point"
                },
                "properties": {
                    "title": "Tacos el Pata Mirador",
                    "plazas_comerciales":       false,
                    "supermercados_servicios":  false,
                    "hospitales_farmacias":     false,
                    "escuelas":                 false,
                    "hoteles":                  false,
                    "restaurant_food":          true,
                    "parque":                   false,
                    "marker-color": "#E6A700",
                    "marker-size": "medium",
                    "marker-symbol": "restaurant"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "coordinates": [-100.32954, 20.59105],
                    "type": "Point"
                },
                "properties": {
                    "title": "OXXO",
                    "plazas_comerciales":       false,
                    "supermercados_servicios":  true,
                    "hospitales_farmacias":     false,
                    "escuelas":                 false,
                    "hoteles":                  false,
                    "restaurant_food":          false,
                    "parque":                   false,
                    "marker-color": "#E6A700",
                    "marker-size": "medium",
                    "marker-symbol": "grocery"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "coordinates": [-100.33274, 20.59443],
                    "type": "Point"
                },
                "properties": {
                    "title": "OXXO",
                    "plazas_comerciales":       false,
                    "supermercados_servicios":  true,
                    "hospitales_farmacias":     false,
                    "escuelas":                 false,
                    "hoteles":                  false,
                    "restaurant_food":          false,
                    "parque":                   false,
                    "marker-color": "#E6A700",
                    "marker-size": "medium",
                    "marker-symbol": "grocery"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "coordinates": [-100.33817, 20.58957],
                    "type": "Point"
                },
                "properties": {
                    "title": "Xentric Mirador",
                    "plazas_comerciales":       false,
                    "supermercados_servicios":  true,
                    "hospitales_farmacias":     false,
                    "escuelas":                 false,
                    "hoteles":                  false,
                    "restaurant_food":          false,
                    "parque":                   false,
                    "marker-color": "#E6A700",
                    "marker-size": "medium",
                    "marker-symbol": "grocery"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "coordinates": [-100.33227, 20.59750],
                    "type": "Point"
                },
                "properties": {
                    "title": "OXXO EL MIRADOR",
                    "plazas_comerciales":       false,
                    "supermercados_servicios":  true,
                    "hospitales_farmacias":     false,
                    "escuelas":                 false,
                    "hoteles":                  false,
                    "restaurant_food":          false,
                    "parque":                   false,
                    "marker-color": "#E6A700",
                    "marker-size": "medium",
                    "marker-symbol": "grocery"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "coordinates": [-100.33569, 20.59884],
                    "type": "Point"
                },
                "properties": {
                    "title": "SUPER Q EL MIRADOR",
                    "plazas_comerciales":       false,
                    "supermercados_servicios":  true,
                    "hospitales_farmacias":     false,
                    "escuelas":                 false,
                    "hoteles":                  false,
                    "restaurant_food":          false,
                    "parque":                   false,
                    "marker-color": "#E6A700",
                    "marker-size": "medium",
                    "marker-symbol": "grocery"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "coordinates": [-100.31033, 20.59549],
                    "type": "Point"
                },
                "properties": {
                    "title": "POLIBIKE’S BIKE PARK",
                    "plazas_comerciales":       false,
                    "supermercados_servicios":  false,
                    "hospitales_farmacias":     false,
                    "escuelas":                 false,
                    "hoteles":                  false,
                    "restaurant_food":          false,
                    "parque":                   true,
                    "marker-color": "#E6A700",
                    "marker-size": "medium",
                    "marker-symbol": "park-alt1"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "coordinates": [-100.32894, 20.61139],
                    "type": "Point"
                },
                "properties": {
                    "title": "ISSTE",
                    "plazas_comerciales":       false,
                    "supermercados_servicios":  false,
                    "hospitales_farmacias":     true,
                    "escuelas":                 false,
                    "hoteles":                  false,
                    "restaurant_food":          false,
                    "parque":                   false,
                    "marker-color": "#E6A700",
                    "marker-size": "medium",
                    "marker-symbol": "hospital"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "coordinates": [-100.36424, 20.58005],
                    "type": "Point"
                },
                "properties": {
                    "title": "HOSPITAL CRUZ ROJA",
                    "plazas_comerciales":       false,
                    "supermercados_servicios":  false,
                    "hospitales_farmacias":     true,
                    "escuelas":                 false,
                    "hoteles":                  false,
                    "restaurant_food":          false,
                    "parque":                   false,
                    "marker-color": "#E6A700",
                    "marker-size": "medium",
                    "marker-symbol": "hospital"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "coordinates": [-100.36925, 20.59195],
                    "type": "Point"
                },
                "properties": {
                    "title": "356 SANATORIO GUADALUPE",
                    "plazas_comerciales":       false,
                    "supermercados_servicios":  false,
                    "hospitales_farmacias":     true,
                    "escuelas":                 false,
                    "hoteles":                  false,
                    "restaurant_food":          false,
                    "parque":                   false,
                    "marker-color": "#E6A700",
                    "marker-size": "medium",
                    "marker-symbol": "hospital"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "coordinates": [-100.41666, 20.58091],
                    "type": "Point"
                },
                "properties": {
                    "title": "HOSPITAL ÁNGELES QUERÉTARO",
                    "plazas_comerciales":       false,
                    "supermercados_servicios":  false,
                    "hospitales_farmacias":     true,
                    "escuelas":                 false,
                    "hoteles":                  false,
                    "restaurant_food":          false,
                    "parque":                   false,
                    "marker-color": "#E6A700",
                    "marker-size": "medium",
                    "marker-symbol": "hospital"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "coordinates": [-100.33470, 20.64616],
                    "type": "Point"
                },
                "properties": {
                    "title": "IMSS HOSPITAL GENERAL REGION 2 EL MARQUÉS",
                    "plazas_comerciales":       false,
                    "supermercados_servicios":  false,
                    "hospitales_farmacias":     true,
                    "escuelas":                 false,
                    "hoteles":                  false,
                    "restaurant_food":          false,
                    "parque":                   false,
                    "marker-color": "#E6A700",
                    "marker-size": "medium",
                    "marker-symbol": "hospital"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "coordinates": [-100.40741, 20.61735],
                    "type": "Point"
                },
                "properties": {
                    "title": "STAR MÉDICA QUERÉTARO",
                    "plazas_comerciales":       false,
                    "supermercados_servicios":  false,
                    "hospitales_farmacias":     true,
                    "escuelas":                 false,
                    "hoteles":                  false,
                    "restaurant_food":          false,
                    "parque":                   false,
                    "marker-color": "#E6A700",
                    "marker-size": "medium",
                    "marker-symbol": "hospital"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "coordinates": [-100.40023, 20.58418],
                    "type": "Point"
                },
                "properties": {
                    "title": "HOSPITAL H+ QUERÉTARO",
                    "plazas_comerciales":       false,
                    "supermercados_servicios":  false,
                    "hospitales_farmacias":     true,
                    "escuelas":                 false,
                    "hoteles":                  false,
                    "restaurant_food":          false,
                    "parque":                   false,
                    "marker-color": "#E6A700",
                    "marker-size": "medium",
                    "marker-symbol": "hospital"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "coordinates": [-100.40594, 20.57969],
                    "type": "Point"
                },
                "properties": {
                    "title": "HOSPITAL GENERAL DE QUERÉTARO",
                    "plazas_comerciales":       false,
                    "supermercados_servicios":  false,
                    "hospitales_farmacias":     true,
                    "escuelas":                 false,
                    "hoteles":                  false,
                    "restaurant_food":          false,
                    "parque":                   false,
                    "marker-color": "#E6A700",
                    "marker-size": "medium",
                    "marker-symbol": "hospital"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "coordinates": [-100.32908, 20.59115],
                    "type": "Point"
                },
                "properties": {
                    "title": "FARMACIA GUADALAJARA",
                    "plazas_comerciales":       false,
                    "supermercados_servicios":  false,
                    "hospitales_farmacias":     true,
                    "escuelas":                 false,
                    "hoteles":                  false,
                    "restaurant_food":          false,
                    "parque":                   false,
                    "marker-color": "#E6A700",
                    "marker-size": "medium",
                    "marker-symbol": "hospital"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "coordinates": [-100.25499, 20.58115],
                    "type": "Point"
                },
                "properties": {
                    "title": "FARMACIA GUADALAJARA",
                    "plazas_comerciales":       false,
                    "supermercados_servicios":  false,
                    "hospitales_farmacias":     true,
                    "escuelas":                 false,
                    "hoteles":                  false,
                    "restaurant_food":          false,
                    "parque":                   false,
                    "marker-color": "#E6A700",
                    "marker-size": "medium",
                    "marker-symbol": "hospital"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "coordinates": [-100.33362, 20.59743],
                    "type": "Point"
                },
                "properties": {
                    "title": "FARMACIA HIPER AHORRO",
                    "plazas_comerciales":       false,
                    "supermercados_servicios":  false,
                    "hospitales_farmacias":     true,
                    "escuelas":                 false,
                    "hoteles":                  false,
                    "restaurant_food":          false,
                    "parque":                   false,
                    "marker-color": "#E6A700",
                    "marker-size": "medium",
                    "marker-symbol": "hospital"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "coordinates": [-100.33177, 20.59656],
                    "type": "Point"
                },
                "properties": {
                    "title": "FARMACIA SIMILARES",
                    "plazas_comerciales":       false,
                    "supermercados_servicios":  false,
                    "hospitales_farmacias":     true,
                    "escuelas":                 false,
                    "hoteles":                  false,
                    "restaurant_food":          false,
                    "parque":                   false,
                    "marker-color": "#E6A700",
                    "marker-size": "medium",
                    "marker-symbol": "hospital"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "coordinates": [-100.33336, 20.59771],
                    "type": "Point"
                },
                "properties": {
                    "title": "FARMAVIDA",
                    "plazas_comerciales":       false,
                    "supermercados_servicios":  false,
                    "hospitales_farmacias":     true,
                    "escuelas":                 false,
                    "hoteles":                  false,
                    "restaurant_food":          false,
                    "parque":                   false,
                    "marker-color": "#E6A700",
                    "marker-size": "medium",
                    "marker-symbol": "hospital"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "coordinates": [-100.35896, 20.59602],
                    "type": "Point"
                },
                "properties": {
                    "title": "FARMACIA GUADALAJARA",
                    "plazas_comerciales":       false,
                    "supermercados_servicios":  false,
                    "hospitales_farmacias":     true,
                    "escuelas":                 false,
                    "hoteles":                  false,
                    "restaurant_food":          false,
                    "parque":                   false,
                    "marker-color": "#E6A700",
                    "marker-size": "medium",
                    "marker-symbol": "hospital"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "coordinates": [-100.33408, 20.59122],
                    "type": "Point"
                },
                "properties": {
                    "title": "H-E-B",
                    "plazas_comerciales":       false,
                    "supermercados_servicios":  true,
                    "hospitales_farmacias":     false,
                    "escuelas":                 false,
                    "hoteles":                  false,
                    "restaurant_food":          false,
                    "parque":                   false,
                    "marker-color": "#E6A700",
                    "marker-size": "medium",
                    "marker-symbol": "grocery"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "coordinates": [-100.36104, 20.59675],
                    "type": "Point"
                },
                "properties": {
                    "title": "WALMART",
                    "plazas_comerciales":       false,
                    "supermercados_servicios":  true,
                    "hospitales_farmacias":     false,
                    "escuelas":                 false,
                    "hoteles":                  false,
                    "restaurant_food":          false,
                    "parque":                   false,
                    "marker-color": "#E6A700",
                    "marker-size": "medium",
                    "marker-symbol": "grocery"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "coordinates": [-100.37579, 20.57004],
                    "type": "Point"
                },
                "properties": {
                    "title": "CENTRAL DE ABASTOS DE QUERÉTARO",
                    "plazas_comerciales":       false,
                    "supermercados_servicios":  true,
                    "hospitales_farmacias":     false,
                    "escuelas":                 false,
                    "hoteles":                  false,
                    "restaurant_food":          false,
                    "parque":                   false,
                    "marker-color": "#E6A700",
                    "marker-size": "medium",
                    "marker-symbol": "grocery"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "coordinates": [-100.26055, 20.63596],
                    "type": "Point"
                },
                "properties": {
                    "title": "BODEGA AURRERA EXPRESS",
                    "plazas_comerciales":       false,
                    "supermercados_servicios":  true,
                    "hospitales_farmacias":     false,
                    "escuelas":                 false,
                    "hoteles":                  false,
                    "restaurant_food":          false,
                    "parque":                   false,
                    "marker-color": "#E6A700",
                    "marker-size": "medium",
                    "marker-symbol": "grocery"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "coordinates": [-100.39361, 20.61439],
                    "type": "Point"
                },
                "properties": {
                    "title": "COSTCO WHOLESALE",
                    "plazas_comerciales":       false,
                    "supermercados_servicios":  true,
                    "hospitales_farmacias":     false,
                    "escuelas":                 false,
                    "hoteles":                  false,
                    "restaurant_food":          false,
                    "parque":                   false,
                    "marker-color": "#E6A700",
                    "marker-size": "medium",
                    "marker-symbol": "grocery"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "coordinates": [-100.39816, 20.61561],
                    "type": "Point"
                },
                "properties": {
                    "title": "WALMART BERNARDO QUINTANA",
                    "plazas_comerciales":       false,
                    "supermercados_servicios":  true,
                    "hospitales_farmacias":     false,
                    "escuelas":                 false,
                    "hoteles":                  false,
                    "restaurant_food":          false,
                    "parque":                   false,
                    "marker-color": "#E6A700",
                    "marker-size": "medium",
                    "marker-symbol": "grocery"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "coordinates": [-100.33529, 20.59009],
                    "type": "Point"
                },
                "properties": {
                    "title": "PLAZA MIRADOR",
                    "plazas_comerciales":       true,
                    "supermercados_servicios":  false,
                    "hospitales_farmacias":     false,
                    "escuelas":                 false,
                    "hoteles":                  false,
                    "restaurant_food":          false,
                    "parque":                   false,
                    "marker-color": "#E6A700",
                    "marker-size": "medium",
                    "marker-symbol": "shop"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "coordinates": [-100.33714, 20.58991],
                    "type": "Point"
                },
                "properties": {
                    "title": "PLAZA PASEO DEL PARQUE",
                    "plazas_comerciales":       true,
                    "supermercados_servicios":  false,
                    "hospitales_farmacias":     false,
                    "escuelas":                 false,
                    "hoteles":                  false,
                    "restaurant_food":          false,
                    "parque":                   false,
                    "marker-color": "#E6A700",
                    "marker-size": "medium",
                    "marker-symbol": "shop"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "coordinates": [-100.33711, 20.59033],
                    "type": "Point"
                },
                "properties": {
                    "title": "PLAZA SAN JOSÉ",
                    "plazas_comerciales":       true,
                    "supermercados_servicios":  false,
                    "hospitales_farmacias":     false,
                    "escuelas":                 false,
                    "hoteles":                  false,
                    "restaurant_food":          false,
                    "parque":                   false,
                    "marker-color": "#E6A700",
                    "marker-size": "medium",
                    "marker-symbol": "shop"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "coordinates": [-100.34858, 20.59323],
                    "type": "Point"
                },
                "properties": {
                    "title": "PLAZA LA VISTA",
                    "plazas_comerciales":       true,
                    "supermercados_servicios":  false,
                    "hospitales_farmacias":     false,
                    "escuelas":                 false,
                    "hoteles":                  false,
                    "restaurant_food":          false,
                    "parque":                   false,
                    "marker-color": "#E6A700",
                    "marker-size": "medium",
                    "marker-symbol": "shop"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "coordinates": [-100.35349, 20.58709],
                    "type": "Point"
                },
                "properties": {
                    "title": "ALEDA STRIP MALL QUERÉTARO",
                    "plazas_comerciales":       true,
                    "supermercados_servicios":  false,
                    "hospitales_farmacias":     false,
                    "escuelas":                 false,
                    "hoteles":                  false,
                    "restaurant_food":          false,
                    "parque":                   false,
                    "marker-color": "#E6A700",
                    "marker-size": "medium",
                    "marker-symbol": "shop"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "coordinates": [-100.34724, 20.60246],
                    "type": "Point"
                },
                "properties": {
                    "title": "PLAZA CONIN",
                    "plazas_comerciales":       true,
                    "supermercados_servicios":  false,
                    "hospitales_farmacias":     false,
                    "escuelas":                 false,
                    "hoteles":                  false,
                    "restaurant_food":          false,
                    "parque":                   false,
                    "marker-color": "#E6A700",
                    "marker-size": "medium",
                    "marker-symbol": "shop"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "coordinates": [-100.35850, 20.59628],
                    "type": "Point"
                },
                "properties": {
                    "title": "PLAZA CARRETAS 205",
                    "plazas_comerciales":       true,
                    "supermercados_servicios":  false,
                    "hospitales_farmacias":     false,
                    "escuelas":                 false,
                    "hoteles":                  false,
                    "restaurant_food":          false,
                    "parque":                   false,
                    "marker-color": "#E6A700",
                    "marker-size": "medium",
                    "marker-symbol": "shop"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "coordinates": [-100.36173, 20.59796],
                    "type": "Point"
                },
                "properties": {
                    "title": "PLAZA VERA",
                    "plazas_comerciales":       true,
                    "supermercados_servicios":  false,
                    "hospitales_farmacias":     false,
                    "escuelas":                 false,
                    "hoteles":                  false,
                    "restaurant_food":          false,
                    "parque":                   false,
                    "marker-color": "#E6A700",
                    "marker-size": "medium",
                    "marker-symbol": "shop"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "coordinates": [-100.36306, 20.61078],
                    "type": "Point"
                },
                "properties": {
                    "title": "PLAZA REFORMA",
                    "plazas_comerciales":       true,
                    "supermercados_servicios":  false,
                    "hospitales_farmacias":     false,
                    "escuelas":                 false,
                    "hoteles":                  false,
                    "restaurant_food":          false,
                    "parque":                   false,
                    "marker-color": "#E6A700",
                    "marker-size": "medium",
                    "marker-symbol": "shop"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "coordinates": [-100.35590, 20.63152],
                    "type": "Point"
                },
                "properties": {
                    "title": "PASEO QUERÉTARO",
                    "plazas_comerciales":       true,
                    "supermercados_servicios":  false,
                    "hospitales_farmacias":     false,
                    "escuelas":                 false,
                    "hoteles":                  false,
                    "restaurant_food":          false,
                    "parque":                   false,
                    "marker-color": "#E6A700",
                    "marker-size": "medium",
                    "marker-symbol": "shop"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "coordinates": [-100.38140, 20.58607],
                    "type": "Point"
                },
                "properties": {
                    "title": "PLAZA PUERTA LA VICTORIA",
                    "plazas_comerciales":       true,
                    "supermercados_servicios":  false,
                    "hospitales_farmacias":     false,
                    "escuelas":                 false,
                    "hoteles":                  false,
                    "restaurant_food":          false,
                    "parque":                   false,
                    "marker-color": "#E6A700",
                    "marker-size": "medium",
                    "marker-symbol": "shop"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "coordinates": [-100.27648, 20.60432],
                    "type": "Point"
                },
                "properties": {
                    "title": "UNIVERSIDAD MONDRAGÓN MÉXICO",
                    "plazas_comerciales":       false,
                    "supermercados_servicios":  false,
                    "hospitales_farmacias":     false,
                    "escuelas":                 true,
                    "hoteles":                  false,
                    "restaurant_food":          false,
                    "parque":                   false,
                    "marker-color": "#E6A700",
                    "marker-size": "medium",
                    "marker-symbol": "school"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "coordinates": [-100.27898, 20.62906],
                    "type": "Point"
                },
                "properties": {
                    "title": "PRIMARIA GUILLERMO RUBIO NAVARRETE",
                    "plazas_comerciales":       false,
                    "supermercados_servicios":  false,
                    "hospitales_farmacias":     false,
                    "escuelas":                 true,
                    "hoteles":                  false,
                    "restaurant_food":          false,
                    "parque":                   false,
                    "marker-color": "#E6A700",
                    "marker-size": "medium",
                    "marker-symbol": "school"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "coordinates": [-100.27492, 20.54589],
                    "type": "Point"
                },
                "properties": {
                    "title": "UNIVERSIDAD POLITÉCNICA DE QUERÉTARO",
                    "plazas_comerciales":       false,
                    "supermercados_servicios":  false,
                    "hospitales_farmacias":     false,
                    "escuelas":                 true,
                    "hoteles":                  false,
                    "restaurant_food":          false,
                    "parque":                   false,
                    "marker-color": "#E6A700",
                    "marker-size": "medium",
                    "marker-symbol": "school"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "coordinates": [-100.32455, 20.61211],
                    "type": "Point"
                },
                "properties": {
                    "title": "SECUNDARIA ROSARIO CASTELLANOS",
                    "plazas_comerciales":       false,
                    "supermercados_servicios":  false,
                    "hospitales_farmacias":     false,
                    "escuelas":                 true,
                    "hoteles":                  false,
                    "restaurant_food":          false,
                    "parque":                   false,
                    "marker-color": "#E6A700",
                    "marker-size": "medium",
                    "marker-symbol": "school"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "coordinates": [-100.36231, 20.58969],
                    "type": "Point"
                },
                "properties": {
                    "title": "UNIVERSIDAD CUAUHTEMOC",
                    "plazas_comerciales":       false,
                    "supermercados_servicios":  false,
                    "hospitales_farmacias":     false,
                    "escuelas":                 true,
                    "hoteles":                  false,
                    "restaurant_food":          false,
                    "parque":                   false,
                    "marker-color": "#E6A700",
                    "marker-size": "medium",
                    "marker-symbol": "school"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "coordinates": [-100.36251, 20.58686],
                    "type": "Point"
                },
                "properties": {
                    "title": "COLEGIO WASHINGTON PRIMARIA",
                    "plazas_comerciales":       false,
                    "supermercados_servicios":  false,
                    "hospitales_farmacias":     false,
                    "escuelas":                 true,
                    "hoteles":                  false,
                    "restaurant_food":          false,
                    "parque":                   false,
                    "marker-color": "#E6A700",
                    "marker-size": "medium",
                    "marker-symbol": "school"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "coordinates": [-100.36486, 20.57506],
                    "type": "Point"
                },
                "properties": {
                    "title": "COLEGIO MÉXICO NUEVO QUERÉTARO",
                    "plazas_comerciales":       false,
                    "supermercados_servicios":  false,
                    "hospitales_farmacias":     false,
                    "escuelas":                 true,
                    "hoteles":                  false,
                    "restaurant_food":          false,
                    "parque":                   false,
                    "marker-color": "#E6A700",
                    "marker-size": "medium",
                    "marker-symbol": "school"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "coordinates": [-100.36421, 20.56321],
                    "type": "Point"
                },
                "properties": {
                    "title": "COLEGIO EL ABETO, PRIMARIA Y SECUNDARIA",
                    "plazas_comerciales":       false,
                    "supermercados_servicios":  false,
                    "hospitales_farmacias":     false,
                    "escuelas":                 true,
                    "hoteles":                  false,
                    "restaurant_food":          false,
                    "parque":                   false,
                    "marker-color": "#E6A700",
                    "marker-size": "medium",
                    "marker-symbol": "school"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "coordinates": [-100.37150, 20.57765],
                    "type": "Point"
                },
                "properties": {
                    "title": "COLEGIO DEL OLMO",
                    "plazas_comerciales":       false,
                    "supermercados_servicios":  false,
                    "hospitales_farmacias":     false,
                    "escuelas":                 true,
                    "hoteles":                  false,
                    "restaurant_food":          false,
                    "parque":                   false,
                    "marker-color": "#E6A700",
                    "marker-size": "medium",
                    "marker-symbol": "school"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "coordinates": [-100.37727, 20.57673],
                    "type": "Point"
                },
                "properties": {
                    "title": "UNIVERSIDAD INTERAMERICANA DEL NORTE",
                    "plazas_comerciales":       false,
                    "supermercados_servicios":  false,
                    "hospitales_farmacias":     false,
                    "escuelas":                 true,
                    "hoteles":                  false,
                    "restaurant_food":          false,
                    "parque":                   false,
                    "marker-color": "#E6A700",
                    "marker-size": "medium",
                    "marker-symbol": "school"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "coordinates": [-100.39523, 20.56308],
                    "type": "Point"
                },
                "properties": {
                    "title": "PRIMARIA JUSTO SIERRA",
                    "plazas_comerciales":       false,
                    "supermercados_servicios":  false,
                    "hospitales_farmacias":     false,
                    "escuelas":                 true,
                    "hoteles":                  false,
                    "restaurant_food":          false,
                    "parque":                   false,
                    "marker-color": "#E6A700",
                    "marker-size": "medium",
                    "marker-symbol": "school"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "coordinates": [-100.39182, 20.58976],
                    "type": "Point"
                },
                "properties": {
                    "title": "SECUNDARIA J. GUADALUPE VELAZQUEZ",
                    "plazas_comerciales":       false,
                    "supermercados_servicios":  false,
                    "hospitales_farmacias":     false,
                    "escuelas":                 true,
                    "hoteles":                  false,
                    "restaurant_food":          false,
                    "parque":                   false,
                    "marker-color": "#E6A700",
                    "marker-size": "medium",
                    "marker-symbol": "school"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "coordinates": [-100.38964, 20.60554],
                    "type": "Point"
                },
                "properties": {
                    "title": "SECUNDARIA MARIANO ESCOBEDO",
                    "plazas_comerciales":       false,
                    "supermercados_servicios":  false,
                    "hospitales_farmacias":     false,
                    "escuelas":                 true,
                    "hoteles":                  false,
                    "restaurant_food":          false,
                    "parque":                   false,
                    "marker-color": "#E6A700",
                    "marker-size": "medium",
                    "marker-symbol": "school"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "coordinates": [-100.37504, 20.61723],
                    "type": "Point"
                },
                "properties": {
                    "title": "SECUNDARIA EPIGMENIO GONZALEZ",
                    "plazas_comerciales":       false,
                    "supermercados_servicios":  false,
                    "hospitales_farmacias":     false,
                    "escuelas":                 true,
                    "hoteles":                  false,
                    "restaurant_food":          false,
                    "parque":                   false,
                    "marker-color": "#E6A700",
                    "marker-size": "medium",
                    "marker-symbol": "school"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "coordinates": [-100.37303, 20.61488],
                    "type": "Point"
                },
                "properties": {
                    "title": "PARQUE BOLAÑOS",
                    "plazas_comerciales":       false,
                    "supermercados_servicios":  false,
                    "hospitales_farmacias":     false,
                    "escuelas":                 false,
                    "hoteles":                  false,
                    "restaurant_food":          false,
                    "parque":                   true,
                    "marker-color": "#E6A700",
                    "marker-size": "medium",
                    "marker-symbol": "park-alt1"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "coordinates": [-100.37532, 20.59205],
                    "type": "Point"
                },
                "properties": {
                    "title": "PARQUE DE ARBOLES CAÍDOS",
                    "plazas_comerciales":       false,
                    "supermercados_servicios":  false,
                    "hospitales_farmacias":     false,
                    "escuelas":                 false,
                    "hoteles":                  false,
                    "restaurant_food":          false,
                    "parque":                   true,
                    "marker-color": "#E6A700",
                    "marker-size": "medium",
                    "marker-symbol": "park-alt1"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "coordinates": [-100.38144, 20.57930],
                    "type": "Point"
                },
                "properties": {
                    "title": "PARQUE EL LAUREL",
                    "plazas_comerciales":       false,
                    "supermercados_servicios":  false,
                    "hospitales_farmacias":     false,
                    "escuelas":                 false,
                    "hoteles":                  false,
                    "restaurant_food":          false,
                    "parque":                   true,
                    "marker-color": "#E6A700",
                    "marker-size": "medium",
                    "marker-symbol": "park-alt1"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "coordinates": [-100.39217, 20.58284],
                    "type": "Point"
                },
                "properties": {
                    "title": "PARQUE FRAY CIMATARIO",
                    "plazas_comerciales":       false,
                    "supermercados_servicios":  false,
                    "hospitales_farmacias":     false,
                    "escuelas":                 false,
                    "hoteles":                  false,
                    "restaurant_food":          false,
                    "parque":                   true,
                    "marker-color": "#E6A700",
                    "marker-size": "medium",
                    "marker-symbol": "park-alt1"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "coordinates": [-100.20720, 20.57258],
                    "type": "Point"
                },
                "properties": {
                    "title": "PARQUE ZOOLÓGICO DE QUERÉTARO WAMERU",
                    "plazas_comerciales":       false,
                    "supermercados_servicios":  false,
                    "hospitales_farmacias":     false,
                    "escuelas":                 false,
                    "hoteles":                  false,
                    "restaurant_food":          false,
                    "parque":                   true,
                    "marker-color": "#E6A700",
                    "marker-size": "medium",
                    "marker-symbol": "park-alt1"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "coordinates": [-100.36912, 20.58118],
                    "type": "Point"
                },
                "properties": {
                    "title": "DOMUN HOTEL",
                    "plazas_comerciales":       false,
                    "supermercados_servicios":  false,
                    "hospitales_farmacias":     false,
                    "escuelas":                 false,
                    "hoteles":                  true,
                    "restaurant_food":          false,
                    "parque":                   false,
                    "marker-color": "#E6A700",
                    "marker-size": "medium",
                    "marker-symbol": "lodging"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "coordinates": [-100.36207, 20.57916],
                    "type": "Point"
                },
                "properties": {
                    "title": "HOTEL IBIS QUERÉTARO",
                    "plazas_comerciales":       false,
                    "supermercados_servicios":  false,
                    "hospitales_farmacias":     false,
                    "escuelas":                 false,
                    "hoteles":                  true,
                    "restaurant_food":          false,
                    "parque":                   false,
                    "marker-color": "#E6A700",
                    "marker-size": "medium",
                    "marker-symbol": "lodging"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "coordinates": [-100.35832, 20.56779],
                    "type": "Point"
                },
                "properties": {
                    "title": "HS HOTSSON HOTEL QUERÉTARO",
                    "plazas_comerciales":       false,
                    "supermercados_servicios":  false,
                    "hospitales_farmacias":     false,
                    "escuelas":                 false,
                    "hoteles":                  true,
                    "restaurant_food":          false,
                    "parque":                   false,
                    "marker-color": "#E6A700",
                    "marker-size": "medium",
                    "marker-symbol": "lodging"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "coordinates": [-100.33802, 20.58610],
                    "type": "Point"
                },
                "properties": {
                    "title": "HOTEL STARGUS",
                    "plazas_comerciales":       false,
                    "supermercados_servicios":  false,
                    "hospitales_farmacias":     false,
                    "escuelas":                 false,
                    "hoteles":                  true,
                    "restaurant_food":          false,
                    "parque":                   false,
                    "marker-color": "#E6A700",
                    "marker-size": "medium",
                    "marker-symbol": "lodging"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "coordinates": [-100.34758, 20.58689],
                    "type": "Point"
                },
                "properties": {
                    "title": "CASAS INN QUERÉTARO",
                    "plazas_comerciales":       false,
                    "supermercados_servicios":  false,
                    "hospitales_farmacias":     false,
                    "escuelas":                 false,
                    "hoteles":                  true,
                    "restaurant_food":          false,
                    "parque":                   false,
                    "marker-color": "#E6A700",
                    "marker-size": "medium",
                    "marker-symbol": "lodging"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "coordinates": [-100.35362, 20.59329],
                    "type": "Point"
                },
                "properties": {
                    "title": "LA RESERVA SUITES",
                    "plazas_comerciales":       false,
                    "supermercados_servicios":  false,
                    "hospitales_farmacias":     false,
                    "escuelas":                 false,
                    "hoteles":                  true,
                    "restaurant_food":          false,
                    "parque":                   false,
                    "marker-color": "#E6A700",
                    "marker-size": "medium",
                    "marker-symbol": "lodging"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "coordinates": [-100.33168, 20.59674],
                    "type": "Point"
                },
                "properties": {
                    "title": "CRAZY JUICE",
                    "plazas_comerciales":       false,
                    "supermercados_servicios":  false,
                    "hospitales_farmacias":     false,
                    "escuelas":                 false,
                    "hoteles":                  false,
                    "restaurant_food":          true,
                    "parque":                   false,
                    "marker-color": "#E6A700",
                    "marker-size": "medium",
                    "marker-symbol": "restaurant"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "coordinates": [-100.33140, 20.59698],
                    "type": "Point"
                },
                "properties": {
                    "title": "CHILAQUILI QUERÉTARO",
                    "plazas_comerciales":       false,
                    "supermercados_servicios":  false,
                    "hospitales_farmacias":     false,
                    "escuelas":                 false,
                    "hoteles":                  false,
                    "restaurant_food":          true,
                    "parque":                   false,
                    "marker-color": "#E6A700",
                    "marker-size": "medium",
                    "marker-symbol": "restaurant"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "coordinates": [-100.33084, 20.59655],
                    "type": "Point"
                },
                "properties": {
                    "title": "CHICKEN KRUNCH EL MIRADOR",
                    "plazas_comerciales":       false,
                    "supermercados_servicios":  false,
                    "hospitales_farmacias":     false,
                    "escuelas":                 false,
                    "hoteles":                  false,
                    "restaurant_food":          true,
                    "parque":                   false,
                    "marker-color": "#E6A700",
                    "marker-size": "medium",
                    "marker-symbol": "restaurant"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "coordinates": [-100.33131, 20.59699],
                    "type": "Point"
                },
                "properties": {
                    "title": "LA MICHOACANA PLUS",
                    "plazas_comerciales":       false,
                    "supermercados_servicios":  false,
                    "hospitales_farmacias":     false,
                    "escuelas":                 false,
                    "hoteles":                  false,
                    "restaurant_food":          true,
                    "parque":                   false,
                    "marker-color": "#E6A700",
                    "marker-size": "medium",
                    "marker-symbol": "restaurant"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "coordinates": [-100.32493, 20.59215],
                    "type": "Point"
                },
                "properties": {
                    "title": "LIMA CHIKEN",
                    "plazas_comerciales":       false,
                    "supermercados_servicios":  false,
                    "hospitales_farmacias":     false,
                    "escuelas":                 false,
                    "hoteles":                  false,
                    "restaurant_food":          true,
                    "parque":                   false,
                    "marker-color": "#E6A700",
                    "marker-size": "medium",
                    "marker-symbol": "restaurant"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "coordinates": [-100.32788, 20.59192],
                    "type": "Point"
                },
                "properties": {
                    "title": "LA ESTACIÓN DE SABOR FOOD TRUCK",
                    "plazas_comerciales":       false,
                    "supermercados_servicios":  false,
                    "hospitales_farmacias":     false,
                    "escuelas":                 false,
                    "hoteles":                  false,
                    "restaurant_food":          true,
                    "parque":                   false,
                    "marker-color": "#E6A700",
                    "marker-size": "medium",
                    "marker-symbol": "restaurant"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "coordinates": [-100.33087, 20.59046],
                    "type": "Point"
                },
                "properties": {
                    "title": "ABUELITA´S PIZZA",
                    "plazas_comerciales":       false,
                    "supermercados_servicios":  false,
                    "hospitales_farmacias":     false,
                    "escuelas":                 false,
                    "hoteles":                  false,
                    "restaurant_food":          true,
                    "parque":                   false,
                    "marker-color": "#E6A700",
                    "marker-size": "medium",
                    "marker-symbol": "restaurant"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "coordinates": [-100.33623, 20.59051],
                    "type": "Point"
                },
                "properties": {
                    "title": "GUSTAMAR",
                    "plazas_comerciales":       false,
                    "supermercados_servicios":  false,
                    "hospitales_farmacias":     false,
                    "escuelas":                 false,
                    "hoteles":                  false,
                    "restaurant_food":          true,
                    "parque":                   false,
                    "marker-color": "#E6A700",
                    "marker-size": "medium",
                    "marker-symbol": "restaurant"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "coordinates": [-100.33653, 20.59048],
                    "type": "Point"
                },
                "properties": {
                    "title": "POLLO FELIZ",
                    "plazas_comerciales":       false,
                    "supermercados_servicios":  false,
                    "hospitales_farmacias":     false,
                    "escuelas":                 false,
                    "hoteles":                  false,
                    "restaurant_food":          true,
                    "parque":                   false,
                    "marker-color": "#E6A700",
                    "marker-size": "medium",
                    "marker-symbol": "restaurant"
                }
            }     ,
            {
                "type": "Feature",
                "geometry": {
                    "coordinates": [-100.28681, 20.60136],
                    "type": "Point"
                },
                "properties": {
                    "title": "RINCON CAMPIRANO",
                    "plazas_comerciales":       false,
                    "supermercados_servicios":  false,
                    "hospitales_farmacias":     false,
                    "escuelas":                 false,
                    "hoteles":                  false,
                    "restaurant_food":          true,
                    "parque":                   false,
                    "marker-color": "#E6A700",
                    "marker-size": "medium",
                    "marker-symbol": "restaurant"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "coordinates": [-100.31551, 20.60748],
                    "type": "Point"
                },
                "properties": {
                    "title": "LA CABAÑA",
                    "plazas_comerciales":       false,
                    "supermercados_servicios":  false,
                    "hospitales_farmacias":     false,
                    "escuelas":                 false,
                    "hoteles":                  false,
                    "restaurant_food":          true,
                    "parque":                   false,
                    "marker-color": "#E6A700",
                    "marker-size": "medium",
                    "marker-symbol": "restaurant"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "coordinates": [-100.29284, 20.59762],
                    "type": "Point"
                },
                "properties": {
                    "title": "LOS 7 POSTRES",
                    "plazas_comerciales":       false,
                    "supermercados_servicios":  false,
                    "hospitales_farmacias":     false,
                    "escuelas":                 false,
                    "hoteles":                  false,
                    "restaurant_food":          true,
                    "parque":                   false,
                    "marker-color": "#E6A700",
                    "marker-size": "medium",
                    "marker-symbol": "restaurant"
                }
            }
            ,
            {
                "type": "Feature",
                "geometry": {
                    "coordinates": [-100.33714, 20.58992],
                    "type": "Point"
                },
                "properties": {
                    "title": "LOS DOGOS MIRADOR",
                    "plazas_comerciales":       false,
                    "supermercados_servicios":  false,
                    "hospitales_farmacias":     false,
                    "escuelas":                 false,
                    "hoteles":                  false,
                    "restaurant_food":          true,
                    "parque":                   false,
                    "marker-color": "#E6A700",
                    "marker-size": "medium",
                    "marker-symbol": "restaurant"
                }
            }
            ,
            {
                "type": "Feature",
                "geometry": {
                    "coordinates": [-100.33767, 20.59044],
                    "type": "Point"
                },
                "properties": {
                    "title": "LA MARMOTA MIRADOR",
                    "plazas_comerciales":       false,
                    "supermercados_servicios":  false,
                    "hospitales_farmacias":     false,
                    "escuelas":                 false,
                    "hoteles":                  false,
                    "restaurant_food":          true,
                    "parque":                   false,
                    "marker-color": "#E6A700",
                    "marker-size": "medium",
                    "marker-symbol": "restaurant"
                }
            }
            ,
            {
                "type": "Feature",
                "geometry": {
                    "coordinates": [-100.34495, 20.58708],
                    "type": "Point"
                },
                "properties": {
                    "title": "SUPER TORTAS EL CORRECAMINOS",
                    "plazas_comerciales":       false,
                    "supermercados_servicios":  false,
                    "hospitales_farmacias":     false,
                    "escuelas":                 false,
                    "hoteles":                  false,
                    "restaurant_food":          true,
                    "parque":                   false,
                    "marker-color": "#E6A700",
                    "marker-size": "medium",
                    "marker-symbol": "restaurant"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "coordinates": [-100.35570, 20.58422],
                    "type": "Point"
                },
                "properties": {
                    "title": "SUBWAY",
                    "plazas_comerciales":       false,
                    "supermercados_servicios":  false,
                    "hospitales_farmacias":     false,
                    "escuelas":                 false,
                    "hoteles":                  false,
                    "restaurant_food":          true,
                    "parque":                   false,
                    "marker-color": "#E6A700",
                    "marker-size": "medium",
                    "marker-symbol": "restaurant"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "coordinates": [-100.33623, 20.59930],
                    "type": "Point"
                },
                "properties": {
                    "title": "CAFETERIA PURA VIDA",
                    "plazas_comerciales":       false,
                    "supermercados_servicios":  false,
                    "hospitales_farmacias":     false,
                    "escuelas":                 false,
                    "hoteles":                  false,
                    "restaurant_food":          true,
                    "parque":                   false,
                    "marker-color": "#E6A700",
                    "marker-size": "medium",
                    "marker-symbol": "cafe"
                }
            }
        ]
    };

    var map = L.mapbox.map('map')
        .setView([20.59674, -100.31319], 12)
        .addLayer(L.mapbox.styleLayer('mapbox://styles/cumbredelmarques/cl4eorha1001n14nn8cjbidsx'));

    var markers = L.mapbox.featureLayer()
        .setGeoJSON(geojson)
        .addTo(map);

    $('.menu-map a').on('click', function () {
        var filter = $(this).data('filter');
        $(this).addClass('active').siblings().removeClass('active');
        markers.setFilter(function (f) {
            return (filter === 'all') ? true : f.properties[filter] === true;
        });
        return false;
    });

})();
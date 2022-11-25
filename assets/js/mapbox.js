(function () {
    L.mapbox.accessToken = 'pk.eyJ1Ijoib2xpdmExMjMiLCJhIjoiY2wzdDZzMHh1MXh6ajNib2VhcHR4dWx3ZSJ9.e1SYRWtDEVsfVaId3w5tAg';

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
                    "comida": true,
                    "plaza": true,
                    "tienda": true,
                    "medico": true,
                    "escuela": true,
                    "hotel": true,
                    "parque": true,
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
                    "comida": true,
                    "plaza": false,
                    "tienda": false,
                    "medico": false,
                    "escuela": false,
                    "hotel": false,
                    "parque": false,
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
                    "comida": false,
                    "plaza": false,
                    "tienda": true,
                    "medico": false,
                    "escuela": false,
                    "hotel": false,
                    "parque": false,
                    "marker-color": "#E6A700",
                    "marker-size": "medium",
                    "marker-symbol": "commercial"
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
                    "comida": false,
                    "plaza": false,
                    "tienda": false,
                    "medico": false,
                    "escuela": false,
                    "hotel": false,
                    "parque": true,
                    "marker-color": "#E6A700",
                    "marker-size": "medium",
                    "marker-symbol": "park-alt1"
                }
            }
            /*{
                "type": "Feature",
                "geometry": {
                    "coordinates": [-111.022844, 29.087843],
                    "type": "Point"
                },
                "properties": {
                    "title": "Gastropark & Terraza",
                    "comida": true,
                    "plaza": false,
                    "tienda": false,
                    "medico": false,
                    "escuela": false,
                    "hotel": false,
                    "marker-color": "#c78e2c",
                    "marker-size": "medium",
                    "marker-symbol": "restaurant"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "coordinates": [-111.021317, 29.092161],
                    "type": "Point"
                },
                "properties": {
                    "title": "Fairplay",
                    "comida": true,
                    "plaza": false,
                    "tienda": false,
                    "medico": false,
                    "escuela": false,
                    "hotel": false,
                    "marker-color": "#c78e2c",
                    "marker-size": "medium",
                    "marker-symbol": "restaurant"
                }
            },
            //Restaurant / Cafe
            {
                "type": "Feature",
                "geometry": {
                    "coordinates": [-111.022745, 29.079581],
                    "type": "Point"
                },
                "properties": {
                    "title": "Olympus Caffé",
                    "comida": true,
                    "plaza": false,
                    "tienda": false,
                    "medico": false,
                    "escuela": false,
                    "hotel": false,
                    "marker-color": "#c78e2c",
                    "marker-size": "medium",
                    "marker-symbol": "cafe"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "coordinates": [-111.013030, 29.082638],
                    "type": "Point"
                },
                "properties": {
                    "title": "STARBUCKS PUERTA OESTE",
                    "comida": true,
                    "plaza": false,
                    "tienda": false,
                    "medico": false,
                    "escuela": false,
                    "hotel": false,
                    "marker-color": "#c78e2c",
                    "marker-size": "medium",
                    "marker-symbol": "cafe"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "coordinates": [-111.037291, 29.081172],
                    "type": "Point"
                },
                "properties": {
                    "title": "Hot Dogs Henry El Chinal",
                    "comida": true,
                    "plaza": false,
                    "tienda": false,
                    "medico": false,
                    "escuela": false,
                    "hotel": false,
                    "marker-color": "#c78e2c",
                    "marker-size": "medium",
                    "marker-symbol": "restaurant"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "coordinates": [-111.027951, 29.081994],
                    "type": "Point"
                },
                "properties": {
                    "title": "Netto Cocina Sonorense",
                    "comida": true,
                    "plaza": false,
                    "tienda": false,
                    "medico": false,
                    "escuela": false,
                    "hotel": false,
                    "marker-color": "#c78e2c",
                    "marker-size": "medium",
                    "marker-symbol": "restaurant"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "coordinates": [-111.023688, 29.082424],
                    "type": "Point"
                },
                "properties": {
                    "title": "Mozz Pizza Italian Bistro",
                    "comida": true,
                    "plaza": false,
                    "tienda": false,
                    "medico": false,
                    "escuela": false,
                    "hotel": false,
                    "marker-color": "#c78e2c",
                    "marker-size": "medium",
                    "marker-symbol": "restaurant"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "coordinates": [-111.023126, 29.082552],
                    "type": "Point"
                },
                "properties": {
                    "title": "Tu Rollo Cinco Sushi",
                    "comida": true,
                    "plaza": false,
                    "tienda": false,
                    "medico": false,
                    "escuela": false,
                    "hotel": false,
                    "marker-color": "#c78e2c",
                    "marker-size": "medium",
                    "marker-symbol": "restaurant"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "coordinates": [-111.021428, 29.081604],
                    "type": "Point"
                },
                "properties": {
                    "title": "JB Cevichería",
                    "comida": true,
                    "plaza": false,
                    "tienda": false,
                    "medico": false,
                    "escuela": false,
                    "hotel": false,
                    "marker-color": "#c78e2c",
                    "marker-size": "medium",
                    "marker-symbol": "restaurant"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "coordinates": [-111.021104, 29.081859],
                    "type": "Point"
                },
                "properties": {
                    "title": "The Rib Shack",
                    "comida": true,
                    "plaza": false,
                    "tienda": false,
                    "medico": false,
                    "escuela": false,
                    "hotel": false,
                    "marker-color": "#c78e2c",
                    "marker-size": "medium",
                    "marker-symbol": "restaurant"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "coordinates": [-111.019946, 29.081662],
                    "type": "Point"
                },
                "properties": {
                    "title": "Koal Sushi Colosio",
                    "comida": true,
                    "plaza": false,
                    "tienda": false,
                    "medico": false,
                    "escuela": false,
                    "hotel": false,
                    "marker-color": "#c78e2c",
                    "marker-size": "medium",
                    "marker-symbol": "restaurant"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "coordinates": [-111.018647, 29.083018],
                    "type": "Point"
                },
                "properties": {
                    "title": "In The Wok & Roll",
                    "comida": true,
                    "plaza": false,
                    "tienda": false,
                    "medico": false,
                    "escuela": false,
                    "hotel": false,
                    "marker-color": "#c78e2c",
                    "marker-size": "medium",
                    "marker-symbol": "restaurant"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "coordinates": [-111.018654, 29.081744],
                    "type": "Point"
                },
                "properties": {
                    "title": "Asadero el Cazador",
                    "comida": true,
                    "plaza": false,
                    "tienda": false,
                    "medico": false,
                    "escuela": false,
                    "hotel": false,
                    "marker-color": "#c78e2c",
                    "marker-size": "medium",
                    "marker-symbol": "restaurant"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "coordinates": [-111.017920, 29.081831],
                    "type": "Point"
                },
                "properties": {
                    "title": "Ballpark",
                    "comida": true,
                    "plaza": false,
                    "tienda": false,
                    "medico": false,
                    "escuela": false,
                    "hotel": false,
                    "marker-color": "#c78e2c",
                    "marker-size": "medium",
                    "marker-symbol": "restaurant"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "coordinates": [-111.021738, 29.088061],
                    "type": "Point"
                },
                "properties": {
                    "title": "Ballesta Carnes Y Mariscos",
                    "comida": true,
                    "plaza": false,
                    "tienda": false,
                    "medico": false,
                    "escuela": false,
                    "hotel": false,
                    "marker-color": "#c78e2c",
                    "marker-size": "medium",
                    "marker-symbol": "restaurant"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "coordinates": [-111.003504, 29.083348],
                    "type": "Point"
                },
                "properties": {
                    "title": "City Salads Colosio",
                    "comida": true,
                    "plaza": false,
                    "tienda": false,
                    "medico": false,
                    "escuela": false,
                    "hotel": false,
                    "marker-color": "#c78e2c",
                    "marker-size": "medium",
                    "marker-symbol": "restaurant"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "coordinates": [-111.010631, 29.082975],
                    "type": "Point"
                },
                "properties": {
                    "title": "Santo Olivo Restaurant",
                    "comida": true,
                    "plaza": false,
                    "tienda": false,
                    "medico": false,
                    "escuela": false,
                    "hotel": false,
                    "marker-color": "#c78e2c",
                    "marker-size": "medium",
                    "marker-symbol": "restaurant"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "coordinates": [-111.015354, 29.082542],
                    "type": "Point"
                },
                "properties": {
                    "title": "Taquerías El Chino",
                    "comida": true,
                    "plaza": false,
                    "tienda": false,
                    "medico": false,
                    "escuela": false,
                    "hotel": false,
                    "marker-color": "#c78e2c",
                    "marker-size": "medium",
                    "marker-symbol": "restaurant"
                }
            },
            //Plazas
            {
                "type": "Feature",
                "geometry": {
                    "coordinates": [-111.028229, 29.081335],
                    "type": "Point"
                },
                "properties": {
                    "title": "Plaza Hípica",
                    "comida": false,
                    "plaza": true,
                    "tienda": false,
                    "medico": false,
                    "escuela": false,
                    "hotel": false,
                    "marker-color": "#c78e2c",
                    "marker-size": "medium",
                    "marker-symbol": "shop"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "coordinates": [-111.024076, 29.082186],
                    "type": "Point"
                },
                "properties": {
                    "title": "Plaza Galicia",
                    "comida": false,
                    "plaza": true,
                    "tienda": false,
                    "medico": false,
                    "escuela": false,
                    "hotel": false,
                    "marker-color": "#c78e2c",
                    "marker-size": "medium",
                    "marker-symbol": "shop"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "coordinates": [-111.018647, 29.082306],
                    "type": "Point"
                },
                "properties": {
                    "title": "Plaza Lucero",
                    "comida": false,
                    "plaza": true,
                    "tienda": false,
                    "medico": false,
                    "escuela": false,
                    "hotel": false,
                    "marker-color": "#c78e2c",
                    "marker-size": "medium",
                    "marker-symbol": "shop"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "coordinates": [-111.010824, 29.082859],
                    "type": "Point"
                },
                "properties": {
                    "title": "Plaza Cantabria",
                    "comida": false,
                    "plaza": true,
                    "tienda": false,
                    "medico": false,
                    "escuela": false,
                    "hotel": false,
                    "marker-color": "#c78e2c",
                    "marker-size": "medium",
                    "marker-symbol": "shop"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "coordinates": [-111.023152, 29.096698],
                    "type": "Point"
                },
                "properties": {
                    "title": "Plaza Quiroga",
                    "comida": false,
                    "plaza": true,
                    "tienda": false,
                    "medico": false,
                    "escuela": false,
                    "hotel": false,
                    "marker-color": "#c78e2c",
                    "marker-size": "medium",
                    "marker-symbol": "shop"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "coordinates": [-111.003477, 29.083510],
                    "type": "Point"
                },
                "properties": {
                    "title": "Plaza Campanario",
                    "comida": false,
                    "plaza": true,
                    "tienda": false,
                    "medico": false,
                    "escuela": false,
                    "hotel": false,
                    "marker-color": "#c78e2c",
                    "marker-size": "medium",
                    "marker-symbol": "shop"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "coordinates": [-110.996489, 29.085439],
                    "type": "Point"
                },
                "properties": {
                    "title": "Andenes Hermosillo",
                    "comida": false,
                    "plaza": true,
                    "tienda": false,
                    "medico": false,
                    "escuela": false,
                    "hotel": false,
                    "marker-color": "#c78e2c",
                    "marker-size": "medium",
                    "marker-symbol": "shop"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "coordinates": [-110.991029, 29.085986],
                    "type": "Point"
                },
                "properties": {
                    "title": "Colossus Plaza Comercial",
                    "comida": false,
                    "plaza": true,
                    "tienda": false,
                    "medico": false,
                    "escuela": false,
                    "hotel": false,
                    "marker-color": "#c78e2c",
                    "marker-size": "medium",
                    "marker-symbol": "shop"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "coordinates": [-110.991802, 29.089455],
                    "type": "Point"
                },
                "properties": {
                    "title": "Plaza Paseo 111",
                    "comida": false,
                    "plaza": true,
                    "tienda": false,
                    "medico": false,
                    "escuela": false,
                    "hotel": false,
                    "marker-color": "#c78e2c",
                    "marker-size": "medium",
                    "marker-symbol": "shop"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "coordinates": [-110.988387, 29.089406],
                    "type": "Point"
                },
                "properties": {
                    "title": "Plaza Racquet",
                    "comida": false,
                    "plaza": true,
                    "tienda": false,
                    "medico": false,
                    "escuela": false,
                    "hotel": false,
                    "marker-color": "#c78e2c",
                    "marker-size": "medium",
                    "marker-symbol": "shop"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "coordinates": [-110.987621, 29.086071],
                    "type": "Point"
                },
                "properties": {
                    "title": "Plaza Satelite",
                    "comida": false,
                    "plaza": true,
                    "tienda": false,
                    "medico": false,
                    "escuela": false,
                    "hotel": false,
                    "marker-color": "#c78e2c",
                    "marker-size": "medium",
                    "marker-symbol": "shop"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "coordinates": [-110.982267, 29.084611],
                    "type": "Point"
                },
                "properties": {
                    "title": "Metrocentro",
                    "comida": false,
                    "plaza": true,
                    "tienda": false,
                    "medico": false,
                    "escuela": false,
                    "hotel": false,
                    "marker-color": "#c78e2c",
                    "marker-size": "medium",
                    "marker-symbol": "shop"
                }
            },
            //Servicios/Tienda
            {
                "type": "Feature",
                "geometry": {
                    "coordinates": [-110.994969, 29.089078],
                    "type": "Point"
                },
                "properties": {
                    "title": "PAPELERIA NAVARRETE",
                    "comida": false,
                    "plaza": false,
                    "tienda": true,
                    "medico": false,
                    "escuela": false,
                    "hotel": false,
                    "marker-color": "#c78e2c",
                    "marker-size": "medium",
                    "marker-symbol": "warehouse"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "coordinates": [-110.998692, 29.089081],
                    "type": "Point"
                },
                "properties": {
                    "title": "Circle K",
                    "comida": false,
                    "plaza": false,
                    "tienda": true,
                    "medico": false,
                    "escuela": false,
                    "hotel": false,
                    "marker-color": "#c78e2c",
                    "marker-size": "medium",
                    "marker-symbol": "warehouse"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "coordinates": [-111.010082, 29.082909],
                    "type": "Point"
                },
                "properties": {
                    "title": "Taste Boutique Sucursal Cantabria",
                    "comida": false,
                    "plaza": false,
                    "tienda": true,
                    "medico": false,
                    "escuela": false,
                    "hotel": false,
                    "marker-color": "#c78e2c",
                    "marker-size": "medium",
                    "marker-symbol": "warehouse"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "coordinates": [-111.009496, 29.083608],
                    "type": "Point"
                },
                "properties": {
                    "title": "52 Elite Fitness Colosio",
                    "comida": false,
                    "plaza": false,
                    "tienda": true,
                    "medico": false,
                    "escuela": false,
                    "hotel": false,
                    "marker-color": "#c78e2c",
                    "marker-size": "medium",
                    "marker-symbol": "warehouse"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "coordinates": [-110.993570, 29.092808],
                    "type": "Point"
                },
                "properties": {
                    "title": "Soriana Híper",
                    "comida": false,
                    "plaza": false,
                    "tienda": true,
                    "medico": false,
                    "escuela": false,
                    "hotel": false,
                    "marker-color": "#c78e2c",
                    "marker-size": "medium",
                    "marker-symbol": "warehouse"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "coordinates": [-111.021597, 29.087457],
                    "type": "Point"
                },
                "properties": {
                    "title": "Oxxo Los Santos",
                    "comida": false,
                    "plaza": false,
                    "tienda": true,
                    "medico": false,
                    "escuela": false,
                    "hotel": false,
                    "marker-color": "#c78e2c",
                    "marker-size": "medium",
                    "marker-symbol": "warehouse"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "coordinates": [-111.021457, 29.083355],
                    "type": "Point"
                },
                "properties": {
                    "title": "Walmart Boulevard Colosio",
                    "comida": false,
                    "plaza": false,
                    "tienda": true,
                    "medico": false,
                    "escuela": false,
                    "hotel": false,
                    "marker-color": "#c78e2c",
                    "marker-size": "medium",
                    "marker-symbol": "warehouse"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "coordinates": [-111.028645, 29.081254],
                    "type": "Point"
                },
                "properties": {
                    "title": "Pescaderia El Perla Negra",
                    "comida": false,
                    "plaza": false,
                    "tienda": true,
                    "medico": false,
                    "escuela": false,
                    "hotel": false,
                    "marker-color": "#c78e2c",
                    "marker-size": "medium",
                    "marker-symbol": "warehouse"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "coordinates": [-111.030159, 29.082371],
                    "type": "Point"
                },
                "properties": {
                    "title": "Jung Real Food - Plaza Nova",
                    "comida": false,
                    "plaza": false,
                    "tienda": true,
                    "medico": false,
                    "escuela": false,
                    "hotel": false,
                    "marker-color": "#c78e2c",
                    "marker-size": "medium",
                    "marker-symbol": "warehouse"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "coordinates": [-111.037363, 29.081576],
                    "type": "Point"
                },
                "properties": {
                    "title": "Mi Gas",
                    "comida": false,
                    "plaza": false,
                    "tienda": true,
                    "medico": false,
                    "escuela": false,
                    "hotel": false,
                    "marker-color": "#c78e2c",
                    "marker-size": "medium",
                    "marker-symbol": "warehouse"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "coordinates": [-111.034242, 29.083746],
                    "type": "Point"
                },
                "properties": {
                    "title": "OXXO VILLA TOSCANA",
                    "comida": false,
                    "plaza": false,
                    "tienda": true,
                    "medico": false,
                    "escuela": false,
                    "hotel": false,
                    "marker-color": "#c78e2c",
                    "marker-size": "medium",
                    "marker-symbol": "warehouse"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "coordinates": [-111.016186, 29.095597],
                    "type": "Point"
                },
                "properties": {
                    "title": "Rendichicas Gasolineras",
                    "comida": false,
                    "plaza": false,
                    "tienda": true,
                    "medico": false,
                    "escuela": false,
                    "hotel": false,
                    "marker-color": "#c78e2c",
                    "marker-size": "medium",
                    "marker-symbol": "warehouse"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "coordinates": [-111.038579, 29.086901],
                    "type": "Point"
                },
                "properties": {
                    "title": "Abarrey",
                    "comida": false,
                    "plaza": false,
                    "tienda": true,
                    "medico": false,
                    "escuela": false,
                    "hotel": false,
                    "marker-color": "#c78e2c",
                    "marker-size": "medium",
                    "marker-symbol": "warehouse"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "coordinates": [-111.031888, 29.095663],
                    "type": "Point"
                },
                "properties": {
                    "title": "Abarrey CEDIS",
                    "comida": false,
                    "plaza": false,
                    "tienda": true,
                    "medico": false,
                    "escuela": false,
                    "hotel": false,
                    "marker-color": "#c78e2c",
                    "marker-size": "medium",
                    "marker-symbol": "warehouse"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "coordinates": [-111.039152, 29.089282],
                    "type": "Point"
                },
                "properties": {
                    "title": "DHL",
                    "comida": false,
                    "plaza": false,
                    "tienda": true,
                    "medico": false,
                    "escuela": false,
                    "hotel": false,
                    "marker-color": "#c78e2c",
                    "marker-size": "medium",
                    "marker-symbol": "warehouse"
                }
            },
            //Medico
            {
                "type": "Feature",
                "geometry": {
                    "coordinates": [-111.028364, 29.081292],
                    "type": "Point"
                },
                "properties": {
                    "title": "Hermo-Pie Sucursal Colosio",
                    "comida": false,
                    "plaza": false,
                    "tienda": false,
                    "medico": true,
                    "escuela": false,
                    "hotel": false,
                    "marker-color": "#c78e2c",
                    "marker-size": "medium",
                    "marker-symbol": "hospital"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "coordinates": [-111.020504, 29.081470 ],
                    "type": "Point"
                },
                "properties": {
                    "title": "Farmacia Cruz Rosa Plaza Epic",
                    "comida": false,
                    "plaza": false,
                    "tienda": false,
                    "medico": true,
                    "escuela": false,
                    "hotel": false,
                    "marker-color": "#c78e2c",
                    "marker-size": "medium",
                    "marker-symbol": "hospital"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "coordinates": [-111.022468, 29.091073],
                    "type": "Point"
                },
                "properties": {
                    "title": "Farmacia Benavides",
                    "comida": false,
                    "plaza": false,
                    "tienda": false,
                    "medico": true,
                    "escuela": false,
                    "hotel": false,
                    "marker-color": "#c78e2c",
                    "marker-size": "medium",
                    "marker-symbol": "hospital"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "coordinates": [-111.011483, 29.082881],
                    "type": "Point"
                },
                "properties": {
                    "title": "Farmacias Benavides LA RIOJA",
                    "comida": false,
                    "plaza": false,
                    "tienda": false,
                    "medico": true,
                    "escuela": false,
                    "hotel": false,
                    "marker-color": "#c78e2c",
                    "marker-size": "medium",
                    "marker-symbol": "hospital"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "coordinates": [-111.005332, 29.081827],
                    "type": "Point"
                },
                "properties": {
                    "title": "Hospital Psquiatrico Cruz del Norte",
                    "comida": false,
                    "plaza": false,
                    "tienda": false,
                    "medico": true,
                    "escuela": false,
                    "hotel": false,
                    "marker-color": "#c78e2c",
                    "marker-size": "medium",
                    "marker-symbol": "hospital"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "coordinates": [-110.999259, 29.088503],
                    "type": "Point"
                },
                "properties": {
                    "title": "Farmacias Benavides",
                    "comida": false,
                    "plaza": false,
                    "tienda": false,
                    "medico": true,
                    "escuela": false,
                    "hotel": false,
                    "marker-color": "#c78e2c",
                    "marker-size": "medium",
                    "marker-symbol": "hospital"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "coordinates": [-110.999705, 29.094146],
                    "type": "Point"
                },
                "properties": {
                    "title": "Farmacia Guadalajara ",
                    "comida": false,
                    "plaza": false,
                    "tienda": false,
                    "medico": true,
                    "escuela": false,
                    "hotel": false,
                    "marker-color": "#c78e2c",
                    "marker-size": "medium",
                    "marker-symbol": "hospital"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "coordinates": [-110.990684, 29.085669],
                    "type": "Point"
                },
                "properties": {
                    "title": "Farmacia YZA",
                    "comida": false,
                    "plaza": false,
                    "tienda": false,
                    "medico": true,
                    "escuela": false,
                    "hotel": false,
                    "marker-color": "#c78e2c",
                    "marker-size": "medium",
                    "marker-symbol": "hospital"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "coordinates": [-110.984823, 29.083898],
                    "type": "Point"
                },
                "properties": {
                    "title": "Dental Place",
                    "comida": false,
                    "plaza": false,
                    "tienda": false,
                    "medico": true,
                    "escuela": false,
                    "hotel": false,
                    "marker-color": "#c78e2c",
                    "marker-size": "medium",
                    "marker-symbol": "hospital"
                }
            },
            //Universidades
            {
                "type": "Feature",
                "geometry": {
                    "coordinates": [-110.996595, 29.098340,],
                    "type": "Point"
                },
                "properties": {
                    "title": "Instituto Tecnológico de Hermosillo",
                    "comida": false,
                    "plaza": false,
                    "tienda": false,
                    "medico": false,
                    "escuela": true,
                    "hotel": false,
                    "marker-color": "#c78e2c",
                    "marker-size": "medium",
                    "marker-symbol": "library"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "coordinates": [-110.988476, 29.088652],
                    "type": "Point"
                },
                "properties": {
                    "title": "CEUNO Tu Universidad",
                    "comida": false,
                    "plaza": false,
                    "tienda": false,
                    "medico": false,
                    "escuela": true,
                    "hotel": false,
                    "marker-color": "#c78e2c",
                    "marker-size": "medium",
                    "marker-symbol": "library"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "coordinates": [-110.991269, 29.068264],
                    "type": "Point"
                },
                "properties": {
                    "title": "UNIDEP",
                    "comida": false,
                    "plaza": false,
                    "tienda": false,
                    "medico": false,
                    "escuela": true,
                    "hotel": false,
                    "marker-color": "#c78e2c",
                    "marker-size": "medium",
                    "marker-symbol": "library"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "coordinates": [-110.974220, 29.069000],
                    "type": "Point"
                },
                "properties": {
                    "title": "CLEU Campus Hermosillo",
                    "comida": false,
                    "plaza": false,
                    "tienda": false,
                    "medico": false,
                    "escuela": true,
                    "hotel": false,
                    "marker-color": "#c78e2c",
                    "marker-size": "medium",
                    "marker-symbol": "library"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "coordinates": [-110.960341, 29.083692],
                    "type": "Point"
                },
                "properties": {
                    "title": "Universidad de Sonora - UNISON",
                    "comida": false,
                    "plaza": false,
                    "tienda": false,
                    "medico": false,
                    "escuela": true,
                    "hotel": false,
                    "marker-color": "#c78e2c",
                    "marker-size": "medium",
                    "marker-symbol": "library"
                }
            },
            //Escuelas            
            {
                "type": "Feature",
                "geometry": {
                    "coordinates": [-111.030460, 29.082259],
                    "type": "Point"
                },
                "properties": {
                    "title": "Liceo Tec",
                    "comida": false,
                    "plaza": false,
                    "tienda": false,
                    "medico": false,
                    "escuela": true,
                    "hotel": false,
                    "marker-color": "#c78e2c",
                    "marker-size": "medium",
                    "marker-symbol": "school"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "coordinates": [-111.032833, 29.093986    ],
                    "type": "Point"
                },
                "properties": {
                    "title": "Colegio Emaús",
                    "comida": false,
                    "plaza": false,
                    "tienda": false,
                    "medico": false,
                    "escuela": true,
                    "hotel": false,
                    "marker-color": "#c78e2c",
                    "marker-size": "medium",
                    "marker-symbol": "school"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "coordinates": [-111.052073, 29.088189],
                    "type": "Point"
                },
                "properties": {
                    "title": "Cecytes La Manga",
                    "comida": false,
                    "plaza": false,
                    "tienda": false,
                    "medico": false,
                    "escuela": true,
                    "hotel": false,
                    "marker-color": "#c78e2c",
                    "marker-size": "medium",
                    "marker-symbol": "school"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "coordinates": [-111.016146, 29.081752],
                    "type": "Point"
                },
                "properties": {
                    "title": "Centro Escolar Campogrande",
                    "comida": false,
                    "plaza": false,
                    "tienda": false,
                    "medico": false,
                    "escuela": true,
                    "hotel": false,
                    "marker-color": "#c78e2c",
                    "marker-size": "medium",
                    "marker-symbol": "school"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "coordinates": [-111.004667, 29.065999],
                    "type": "Point"
                },
                "properties": {
                    "title": "COLEGIO MUÑOZ ",
                    "comida": false,
                    "plaza": false,
                    "tienda": false,
                    "medico": false,
                    "escuela": true,
                    "hotel": false,
                    "marker-color": "#c78e2c",
                    "marker-size": "medium",
                    "marker-symbol": "school"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "coordinates": [-111.008917, 29.087494],
                    "type": "Point"
                },
                "properties": {
                    "title": "Colegio Muñoz",
                    "comida": false,
                    "plaza": false,
                    "tienda": false,
                    "medico": false,
                    "escuela": true,
                    "hotel": false,
                    "marker-color": "#c78e2c",
                    "marker-size": "medium",
                    "marker-symbol": "school"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "coordinates": [-111.005776, 29.092788],
                    "type": "Point"
                },
                "properties": {
                    "title": "Escuela Primaria Gral. Enrique Quijada",
                    "comida": false,
                    "plaza": false,
                    "tienda": false,
                    "medico": false,
                    "escuela": true,
                    "hotel": false,
                    "marker-color": "#c78e2c",
                    "marker-size": "medium",
                    "marker-symbol": "school"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "coordinates": [-111.002990, 29.088490],
                    "type": "Point"
                },
                "properties": {
                    "title": "Escuela Secundaria TAES",
                    "comida": false,
                    "plaza": false,
                    "tienda": false,
                    "medico": false,
                    "escuela": true,
                    "hotel": false,
                    "marker-color": "#c78e2c",
                    "marker-size": "medium",
                    "marker-symbol": "school"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "coordinates": [-111.001270, 29.088159],
                    "type": "Point"
                },
                "properties": {
                    "title": "Ceb Lideel S.C.",
                    "comida": false,
                    "plaza": false,
                    "tienda": false,
                    "medico": false,
                    "escuela": true,
                    "hotel": false,
                    "marker-color": "#c78e2c",
                    "marker-size": "medium",
                    "marker-symbol": "school"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "coordinates": [-111.000825, 29.083130],
                    "type": "Point"
                },
                "properties": {
                    "title": "Instituto Vanguardia de Hermosillo",
                    "comida": false,
                    "plaza": false,
                    "tienda": false,
                    "medico": false,
                    "escuela": true,
                    "hotel": false,
                    "marker-color": "#c78e2c",
                    "marker-size": "medium",
                    "marker-symbol": "school"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "coordinates": [-110.998324, 29.083026],
                    "type": "Point"
                },
                "properties": {
                    "title": "Bambú Montessori",
                    "comida": false,
                    "plaza": false,
                    "tienda": false,
                    "medico": false,
                    "escuela": true,
                    "hotel": false,
                    "marker-color": "#c78e2c",
                    "marker-size": "medium",
                    "marker-symbol": "school"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "coordinates": [-110.994497, 29.078685],
                    "type": "Point"
                },
                "properties": {
                    "title": "Sendero Preescolar",
                    "comida": false,
                    "plaza": false,
                    "tienda": false,
                    "medico": false,
                    "escuela": true,
                    "hotel": false,
                    "marker-color": "#c78e2c",
                    "marker-size": "medium",
                    "marker-symbol": "school"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "coordinates": [-110.994623, 29.088591],
                    "type": "Point"
                },
                "properties": {
                    "title": "Instituto Peques en Acción Maternal y Preescolar Bilingue",
                    "comida": false,
                    "plaza": false,
                    "tienda": false,
                    "medico": false,
                    "escuela": true,
                    "hotel": false,
                    "marker-color": "#c78e2c",
                    "marker-size": "medium",
                    "marker-symbol": "school"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "coordinates": [-111.009647, 29.088872],
                    "type": "Point"
                },
                "properties": {
                    "title": "Colegio Alerce",
                    "comida": false,
                    "plaza": false,
                    "tienda": false,
                    "medico": false,
                    "escuela": true,
                    "hotel": false,
                    "marker-color": "#c78e2c",
                    "marker-size": "medium",
                    "marker-symbol": "school"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "coordinates": [-110.993046, 29.081919],
                    "type": "Point"
                },
                "properties": {
                    "title": "CBTIS No 132",
                    "comida": false,
                    "plaza": false,
                    "tienda": false,
                    "medico": false,
                    "escuela": true,
                    "hotel": false,
                    "marker-color": "#c78e2c",
                    "marker-size": "medium",
                    "marker-symbol": "school"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "coordinates": [-110.987812, 29.072206],
                    "type": "Point"
                },
                "properties": {
                    "title": "Colegio Bicultural Terraventura FC",
                    "comida": false,
                    "plaza": false,
                    "tienda": false,
                    "medico": false,
                    "escuela": true,
                    "hotel": false,
                    "marker-color": "#c78e2c",
                    "marker-size": "medium",
                    "marker-symbol": "school"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "coordinates": [-110.980341, 29.069181],
                    "type": "Point"
                },
                "properties": {
                    "title": "Cambridge Hills",
                    "comida": false,
                    "plaza": false,
                    "tienda": false,
                    "medico": false,
                    "escuela": true,
                    "hotel": false,
                    "marker-color": "#c78e2c",
                    "marker-size": "medium",
                    "marker-symbol": "school"
                }
            },
            //Hoteles
            {
                "type": "Feature",
                "geometry": {
                    "coordinates": [-111.025517, 29.096507],
                    "type": "Point"
                },
                "properties": {
                    "title": "Holiday Inn Hotel & Suites",
                    "comida": false,
                    "plaza": false,
                    "tienda": false,
                    "medico": false,
                    "escuela": false,
                    "hotel": true,
                    "marker-color": "#c78e2c",
                    "marker-size": "medium",
                    "marker-symbol": "city"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "coordinates": [-111.013920, 29.082807],
                    "type": "Point"
                },
                "properties": {
                    "title": "Holiday Inn Express",
                    "comida": false,
                    "plaza": false,
                    "tienda": false,
                    "medico": false,
                    "escuela": false,
                    "hotel": true,
                    "marker-color": "#c78e2c",
                    "marker-size": "medium",
                    "marker-symbol": "city"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "coordinates": [-110.998426, 29.094778],
                    "type": "Point"
                },
                "properties": {
                    "title": "Hotel El Dorado",
                    "comida": false,
                    "plaza": false,
                    "tienda": false,
                    "medico": false,
                    "escuela": false,
                    "hotel": true,
                    "marker-color": "#c78e2c",
                    "marker-size": "medium",
                    "marker-symbol": "city"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "coordinates": [-110.997948, 29.092104],
                    "type": "Point"
                },
                "properties": {
                    "title": "Hotel Santorian",
                    "comida": false,
                    "plaza": false,
                    "tienda": false,
                    "medico": false,
                    "escuela": false,
                    "hotel": true,
                    "marker-color": "#c78e2c",
                    "marker-size": "medium",
                    "marker-symbol": "city"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "coordinates": [-110.996080, 29.094011],
                    "type": "Point"
                },
                "properties": {
                    "title": "San Angel Hotel",
                    "comida": false,
                    "plaza": false,
                    "tienda": false,
                    "medico": false,
                    "escuela": false,
                    "hotel": true,
                    "marker-color": "#c78e2c",
                    "marker-size": "medium",
                    "marker-symbol": "city"
                }
            }*/
        ]
    };

    var map = L.mapbox.map('map')
        .setView([20.59674, -100.31319], 13)
        .addLayer(L.mapbox.styleLayer('mapbox://styles/oliva123/cl3yq6glb000t15qdb8rko7hf'));

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
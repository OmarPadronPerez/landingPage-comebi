(function () {
    L.mapbox.accessToken = 'pk.eyJ1Ijoib2xpdmExMjMiLCJhIjoiY2wzdDZzMHh1MXh6ajNib2VhcHR4dWx3ZSJ9.e1SYRWtDEVsfVaId3w5tAg';
    var geojson = { 
        type: 'FeatureCollection', 
        features: [ 
            { 
                "type": "Feature", 
                "geometry": { 
                    "coordinates": [-100.86215, 22.06777], 
                    "type": "Point" 
                }, 
                "properties": { 
                    "title": "LOS LAGOS RESIDENCIAL",               
                    "supermercados_servicios":  true, 
                    "hospitales_farmacias":     true,
                    "escuelas":                 true, 
                    "hoteles":                  true,
                    "restaurant_food":          true, 
                    "zona_industrial":                   true,
                    "plaza":                 true, 
                    "marker-color": "#ff0000",
                    "marker-size": "large", 
                    "marker-symbol": "circle" 
                } 
            }, 
            {
                "type": "Feature", 
                "geometry": { 
                    "coordinates": [-100.86289, 22.06823],
                    "type": "Point" 
                }, "properties": { 
                    "title": "PLAZA DANESS",                    
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "zona_industrial":                   false,
                    "plaza":                    true, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "shop" 
                } 
            },
            {
                "type": "Feature", 
                "geometry": { 
                    "coordinates": [-100.92483, 22.13124],
                    "type": "Point" 
                }, "properties": { 
                    "title": "PLAZA SENDERO",                    
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "zona_industrial":                   false,
                    "plaza":                    true, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "shop" 
                } 
            },
            {
                "type": "Feature", 
                "geometry": { 
                    "coordinates": [-100.86256, 22.06810],
                    "type": "Point" 
                }, "properties": { 
                    "title": "SÚPER ALL",                    
                    "supermercados_servicios":  true, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "zona_industrial":                   false,
                    "plaza":                    false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "grocery" 
                } 
            },
            {
                "type": "Feature", 
                "geometry": { 
                    "coordinates": [-100.93185, 22.13561],
                    "type": "Point" 
                }, "properties": { 
                    "title": "SAM'S CLUB",                    
                    "supermercados_servicios":  true, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "zona_industrial":                   false,
                    "plaza":                    false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "grocery" 
                } 
            },
            {
                "type": "Feature", 
                "geometry": { 
                    "coordinates": [-100.93473, 22.13843],
                    "type": "Point" 
                }, "properties": { 
                    "title": "WALMART",                    
                    "supermercados_servicios":  true, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "zona_industrial":                   false,
                    "plaza":                    false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "grocery" 
                } 
            },
            {
                "type": "Feature", 
                "geometry": { 
                    "coordinates": [-100.93715, 22.13613],
                    "type": "Point" 
                }, "properties": { 
                    "title": "H-E-B",                    
                    "supermercados_servicios":  true, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "zona_industrial":                   false,
                    "plaza":                    false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "grocery" 
                } 
            },
            {
                "type": "Feature", 
                "geometry": { 
                    "coordinates": [-100.92449, 22.13152],
                    "type": "Point" 
                }, "properties": { 
                    "title": "SORIANA",                    
                    "supermercados_servicios":  true, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "zona_industrial":                   false,
                    "plaza":                 false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "grocery" 
                } 
            },
            {
                "type": "Feature", 
                "geometry": { 
                    "coordinates": [-100.92236, 22.13160],
                    "type": "Point" 
                }, "properties": { 
                    "title": "OXXO",                    
                    "supermercados_servicios":  true, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "zona_industrial":                   false,
                    "plaza":                 false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "grocery" 
                } 
            },
            {
                "type": "Feature", 
                "geometry": { 
                    "coordinates": [-100.92890, 22.13330],
                    "type": "Point" 
                }, "properties": { 
                    "title": "OXXO",                    
                    "supermercados_servicios":  true, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "zona_industrial":                   false,
                    "plaza":                    false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "grocery" 
                } 
            },
            {
                "type": "Feature", 
                "geometry": { 
                    "coordinates": [-100.92827, 22.13257],
                    "type": "Point" 
                }, "properties": { 
                    "title": "CITIBANAMEX JOSÉ DE GALVEZ",                    
                    "supermercados_servicios":  true, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "zona_industrial":                   false,
                    "plaza":                 false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "grocery" 
                } 
            },
            {
                "type": "Feature", 
                "geometry": { 
                    "coordinates": [-100.92750, 22.13210],
                    "type": "Point" 
                }, "properties": { 
                    "title": "BANCO SANTANDER",                    
                    "supermercados_servicios":  true, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "zona_industrial":                   false,
                    "plaza":                    false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "grocery" 
                } 
            },
            {
                "type": "Feature", 
                "geometry": { 
                    "coordinates": [-100.92433, 22.13105],
                    "type": "Point" 
                }, "properties": { 
                    "title": "BANCO BBVA",                    
                    "supermercados_servicios":  true, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "zona_industrial":                   false,
                    "plaza":                 false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "grocery" 
                } 
            },
            {
                "type": "Feature", 
                "geometry": { 
                    "coordinates": [-100.92464, 22.13037],
                    "type": "Point" 
                }, "properties": { 
                    "title": "SCOTIABANK SENDERO",                    
                    "supermercados_servicios":  true, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "zona_industrial":                   false,
                    "plaza":                 false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "grocery" 
                } 
            },
            {
                "type": "Feature", 
                "geometry": { 
                    "coordinates": [-100.90442, 22.12142],
                    "type": "Point" 
                }, "properties": { 
                    "title": "OXXO",                    
                    "supermercados_servicios":  true, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "zona_industrial":                   false,
                    "plaza":                 false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "grocery" 
                } 
            },
            {
                "type": "Feature", 
                "geometry": { 
                    "coordinates": [-100.90742, 22.11402],
                    "type": "Point" 
                }, "properties": { 
                    "title": "SANTANDER",                    
                    "supermercados_servicios":  true, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "zona_industrial":                   false,
                    "plaza":                 false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "grocery" 
                } 
            },
            {
                "type": "Feature", 
                "geometry": { 
                    "coordinates": [-100.86094, 22.06874],
                    "type": "Point" 
                }, "properties": { 
                    "title": "COORDINACIÓN ESTATAL DE PROTECCIÓN CIVIL",                    
                    "supermercados_servicios":  true, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "zona_industrial":                   false,
                    "plaza":                 false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "grocery" 
                } 
            },
            {
                "type": "Feature", 
                "geometry": { 
                    "coordinates": [-100.87099, 22.06887],
                    "type": "Point" 
                }, "properties": { 
                    "title": "ESTACION DE BOMBEROS N° 8 UUZI",                    
                    "supermercados_servicios":  true, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "zona_industrial":                   false,
                    "plaza":                 false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "grocery" 
                } 
            },
            {
                "type": "Feature", 
                "geometry": { 
                    "coordinates": [-100.96886, 22.13150],
                    "type": "Point" 
                }, "properties": { 
                    "title": "MUNICIPIO DE SAN LUIS POTOSÍ",                    
                    "supermercados_servicios":  true, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "zona_industrial":                   false,
                    "plaza":                 false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "grocery" 
                } 
            },
            {
                "type": "Feature", 
                "geometry": { 
                    "coordinates": [-100.86170, 22.05420],
                    "type": "Point" 
                }, "properties": { 
                    "title": "OXXO LA LAGUNA",                    
                    "supermercados_servicios":  true, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "zona_industrial":                   false,
                    "plaza":                 false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "grocery" 
                } 
            },
            {
                "type": "Feature", 
                "geometry": { 
                    "coordinates": [-100.85618, 22.04464],
                    "type": "Point" 
                }, "properties": { 
                    "title": "OXXO ARROYOS",                    
                    "supermercados_servicios":  true, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "zona_industrial":                   false,
                    "plaza":                 false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "grocery" 
                } 
            },            
            {
                "type": "Feature", 
                "geometry": { 
                    "coordinates": [-100.89150, 22.11233],
                    "type": "Point" 
                }, "properties": { 
                    "title": "FARMACIA GUADALAJARA",                    
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     true,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "zona_industrial":                   false,
                    "plaza":                 false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "hospital" 
                } 
            }, 
            {
                "type": "Feature", 
                "geometry": { 
                    "coordinates": [-100.86259, 22.06827],
                    "type": "Point" 
                }, "properties": { 
                    "title": "FARMACIA DEL LAGO",                    
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     true,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "zona_industrial":                   false,
                    "plaza":                 false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "hospital" 
                } 
            }, 
            {
                "type": "Feature", 
                "geometry": { 
                    "coordinates": [-100.87202, 22.07065],
                    "type": "Point" 
                }, "properties": { 
                    "title": "CRUZ ROJA MEXICANA",                    
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     true,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "zona_industrial":                   false,
                    "plaza":                 false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "hospital" 
                } 
            }, 
            {
                "type": "Feature", 
                "geometry": { 
                    "coordinates": [-100.87040, 22.09602],
                    "type": "Point" 
                }, "properties": { 
                    "title": "FARMACIA Y CONSULTORIO DEL VALLE",                    
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     true,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "zona_industrial":                   false,
                    "plaza":                 false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "hospital" 
                } 
            }, 
            {
                "type": "Feature", 
                "geometry": { 
                    "coordinates": [-100.87587, 22.09613],
                    "type": "Point" 
                }, "properties": { 
                    "title": "FARMACENTRO POZOS",                    
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     true,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "zona_industrial":                   false,
                    "plaza":                 false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "hospital" 
                } 
            }, 
            {
                "type": "Feature", 
                "geometry": { 
                    "coordinates": [-100.87630, 22.09648],
                    "type": "Point" 
                }, "properties": { 
                    "title": "FARMACIA ECONOMICA",                    
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     true,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "zona_industrial":                   false,
                    "plaza":                 false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "hospital" 
                } 
            }, 
            {
                "type": "Feature", 
                "geometry": { 
                    "coordinates": [-100.88072, 22.09528],
                    "type": "Point" 
                }, "properties": { 
                    "title": "FARMACIA Y CONSULTORIO MÉDICO VILLA",                    
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     true,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "zona_industrial":                   false,
                    "plaza":                 false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "hospital" 
                } 
            }, 
            {
                "type": "Feature", 
                "geometry": { 
                    "coordinates": [-100.87883, 22.09590],
                    "type": "Point" 
                }, "properties": { 
                    "title": "CENTRO DE SALUD DELEG POZOS",                    
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     true,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "zona_industrial":                   false,
                    "plaza":                 false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "hospital" 
                } 
            }, 
            {
                "type": "Feature", 
                "geometry": { 
                    "coordinates": [-100.87590, 22.09659],
                    "type": "Point" 
                }, "properties": { 
                    "title": "FARMACIAS SIMILARES CONSULTORIO",                    
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     true,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "zona_industrial":                   false,
                    "plaza":                 false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "hospital" 
                } 
            }, 
            {
                "type": "Feature", 
                "geometry": { 
                    "coordinates": [-100.92212, 22.12392],
                    "type": "Point" 
                }, "properties": { 
                    "title": "FARMACIAS GUADALAJARA",                    
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     true,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "zona_industrial":                   false,
                    "plaza":                 false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "hospital" 
                } 
            },
            {
                "type": "Feature",
                "geometry": {
                    "coordinates": [-100.92197, 22.15791],
                    "type": "Point"
                },
                "properties": {
                    "title": "CBTIS 121",
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 true, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "zona_industrial":                   false,
                    "plaza":                 false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium",
                    "marker-symbol": "school"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "coordinates": [-100.94997, 22.14384],
                    "type": "Point"
                },
                "properties": {
                    "title": "UASLP (FACULTAD DE PSICOLOGÍA)",
                   "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 true, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "zona_industrial":                   false,
                    "plaza":                    false,
                    "marker-color": "#016DA3",
                    "marker-size": "medium",
                    "marker-symbol": "school"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "coordinates": [-100.94292, 22.10684],
                    "type": "Point"
                },
                "properties": {
                    "title": "COLEGIO JOSÉ ANTONIO ALZATE Y RAMÍREZ",
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 true, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "zona_industrial":                   false,
                    "plaza":                 false,
                    "marker-color": "#016DA3",
                    "marker-size": "medium",
                    "marker-symbol": "school"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "coordinates": [-100.90439, 22.11119],
                    "type": "Point"
                },
                "properties": {
                    "title": "UTAN CAMPUS INDUSTRIAS",
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 true, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "zona_industrial":                   false,
                    "plaza":                 false,
                    "marker-color": "#016DA3",
                    "marker-size": "medium",
                    "marker-symbol": "school"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "coordinates": [-100.90660, 22.10367],
                    "type": "Point"
                },
                "properties": {
                    "title": "CONALEP: PLANTEL ING MANUEL MORENO TORRES",
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 true, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "zona_industrial":                   false,
                    "plaza":                 false,
                    "marker-color": "#016DA3",
                    "marker-size": "medium",
                    "marker-symbol": "school"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "coordinates": [-100.88294, 22.09362],
                    "type": "Point"
                },
                "properties": {
                    "title": "CBTA 196",
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 true, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "zona_industrial":                   false,
                    "plaza":                 false,
                    "marker-color": "#016DA3",
                    "marker-size": "medium",
                    "marker-symbol": "school"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "coordinates": [-100.88048, 22.09570],
                    "type": "Point"
                },
                "properties": {
                    "title": "ESCUELA SECUNDARIA FEDERAL LÁZARO CÁRDENAS DEL RÍO",
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 true, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "zona_industrial":                   false,
                    "plaza":                 false,
                    "marker-color": "#016DA3",
                    "marker-size": "medium",
                    "marker-symbol": "school"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "coordinates": [-100.87973, 22.09525],
                    "type": "Point"
                },
                "properties": {
                    "title": "ESCUELA PRIMARIA URBANA FRANCISCO I. MADERO",
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 true, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "zona_industrial":                   false,
                    "plaza":                 false,
                    "marker-color": "#016DA3",
                    "marker-size": "medium",
                    "marker-symbol": "school"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "coordinates": [-100.87432, 22.08229],
                    "type": "Point"
                },
                "properties": {
                    "title": "ESCUELA PRIMARIA JOSÉ CIRIACO CRUZ",
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 true, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "zona_industrial":                   false,
                    "plaza":                 false,
                    "marker-color": "#016DA3",
                    "marker-size": "medium",
                    "marker-symbol": "school"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "coordinates": [-100.87450, 22.07475],
                    "type": "Point"
                },
                "properties": {
                    "title": "UNIVERSIDAD GASA",
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 true, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "zona_industrial":                   false,
                    "plaza":                 false,
                    "marker-color": "#016DA3",
                    "marker-size": "medium",
                    "marker-symbol": "school"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "coordinates": [-100.86790, 22.06923],
                    "type": "Point"
                },
                "properties": {
                    "title": "INSTITUTO TECNOLÓGICO SUPERIOR DE SAN LUIS POTOSÍ",
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 true, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "zona_industrial":                   false,
                    "plaza":                 false,
                    "marker-color": "#016DA3",
                    "marker-size": "medium",
                    "marker-symbol": "school"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "coordinates": [-100.86970, 22.06195],
                    "type": "Point"
                },
                "properties": {
                    "title": "ESC. PRIMARIA BENITO JUAREZ",
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 true, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "zona_industrial":                   false,
                    "plaza":                 false,
                    "marker-color": "#016DA3",
                    "marker-size": "medium",
                    "marker-symbol": "school"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "coordinates": [-100.86025, 22.06781],
                    "type": "Point"
                },
                "properties": {
                    "title": "COLEGIO ALBERTSON´S",
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 true, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "zona_industrial":                   false,
                    "plaza":                 false,
                    "marker-color": "#016DA3",
                    "marker-size": "medium",
                    "marker-symbol": "school"
                }
            },            
            {
                "type": "Feature",
                "geometry": {
                    "coordinates": [-100.89211, 22.04126],
                    "type": "Point"
                },
                "properties": {
                    "title": "HOTEL MISION EXPRESS SAN LUIS POTOSI",
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  true,
                    "restaurant_food":          false, 
                    "zona_industrial":                   false,
                    "plaza":                 false,
                    "marker-color": "#016DA3",
                    "marker-size": "medium",
                    "marker-symbol": "city"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "coordinates": [-100.93967, 22.13827],
                    "type": "Point"
                },
                "properties": {
                    "title": "HOLIDAY INN EXPRESS SAN LUIS POTOSI, AN IHG HOTEL",
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  true,
                    "restaurant_food":          false, 
                    "zona_industrial":                   false,
                    "plaza":                 false,
                    "marker-color": "#016DA3",
                    "marker-size": "medium",
                    "marker-symbol": "city"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "coordinates": [-100.93342, 22.13433],
                    "type": "Point"
                },
                "properties": {
                    "title": "CITY EXPRESS SUITES SAN LUIS POTOSÍ",
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  true,
                    "restaurant_food":          false, 
                    "zona_industrial":                   false,
                    "plaza":                 false,
                    "marker-color": "#016DA3",
                    "marker-size": "medium",
                    "marker-symbol": "city"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "coordinates": [-100.91745, 22.12376],
                    "type": "Point"
                },
                "properties": {
                    "title": "IBIS SAN LUIS POTOSI",
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  true,
                    "restaurant_food":          false, 
                    "zona_industrial":                   false,
                    "plaza":                 false,
                    "marker-color": "#016DA3",
                    "marker-size": "medium",
                    "marker-symbol": "city"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "coordinates": [-100.92170, 22.12691],
                    "type": "Point"
                },
                "properties": {
                    "title": "FIESTA INN SAN LUIS POTOSÍ ORIENTE",
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  true,
                    "restaurant_food":          false, 
                    "zona_industrial":                   false,
                    "plaza":                 false,
                    "marker-color": "#016DA3",
                    "marker-size": "medium",
                    "marker-symbol": "city"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "coordinates": [-100.90568, 22.11814],
                    "type": "Point"
                },
                "properties": {
                    "title": "CITY EXPRESS JUNIOR SAN LUIS POTOSÍ ZONA INDUSTRIAL",
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  true,
                    "restaurant_food":          false, 
                    "zona_industrial":                   false,
                    "plaza":                 false,
                    "marker-color": "#016DA3",
                    "marker-size": "medium",
                    "marker-symbol": "city"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "coordinates": [-100.89555, 22.11246],
                    "type": "Point"
                },
                "properties": {
                    "title": "MICROTEL INN & SUITES BY WYNDHAM S.L.P.",
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  true,
                    "restaurant_food":          false, 
                    "zona_industrial":                   false,
                    "plaza":                 false,
                    "marker-color": "#016DA3",
                    "marker-size": "medium",
                    "marker-symbol": "city"
                }
            },
            { 
                "type": "Feature",
                "geometry": { 
                    "coordinates": [-100.86245, 22.06766], 
                    "type": "Point" 
                },
                "properties": { 
                    "title": "BIG BURGER. HAMBURGUESAS AL CARBÓN",                    
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          true, 
                    "zona_industrial":                   false,
                    "plaza":                 false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "restaurant" 
                } 
            },
            { 
                "type": "Feature",
                "geometry": { 
                    "coordinates": [-100.86275, 22.06818], 
                    "type": "Point" 
                },
                "properties": { 
                    "title": "TACOS CÁRCAMO",                    
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          true, 
                    "zona_industrial":                   false,
                    "plaza":                 false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "restaurant" 
                } 
            },
            { 
                "type": "Feature",
                "geometry": { 
                    "coordinates": [-100.86264, 22.06816], 
                    "type": "Point" 
                },
                "properties": { 
                    "title": "CALIFORNIA WINGS AND BEER",                    
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          true, 
                    "zona_industrial":                   false,
                    "plaza":                 false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "restaurant" 
                } 
            },
            { 
                "type": "Feature",
                "geometry": { 
                    "coordinates": [-100.86310, 22.05663], 
                    "type": "Point" 
                },
                "properties": { 
                    "title": "BLACK PIMIENTA",                    
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          true, 
                    "zona_industrial":                   false,
                    "plaza":                 false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "restaurant" 
                } 
            },
            { 
                "type": "Feature",
                "geometry": { 
                    "coordinates": [-100.85672, 22.04290], 
                    "type": "Point" 
                },
                "properties": { 
                    "title": "TACOS DON BENITO",                    
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          true, 
                    "zona_industrial":                   false,
                    "plaza":                 false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "restaurant" 
                } 
            },
            { 
                "type": "Feature",
                "geometry": { 
                    "coordinates": [-100.84797, 22.02887], 
                    "type": "Point" 
                },
                "properties": { 
                    "title": "COMEDOR 57",                    
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          true, 
                    "zona_industrial":                   false,
                    "plaza":                 false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "restaurant" 
                } 
            },
            { 
                "type": "Feature",
                "geometry": { 
                    "coordinates": [-100.84553, 22.02226], 
                    "type": "Point" 
                },
                "properties": { 
                    "title": "TACOS EL GUERO 2",                    
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          true, 
                    "zona_industrial":                   false,
                    "plaza":                 false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "restaurant" 
                } 
            },
            { 
                "type": "Feature",
                "geometry": { 
                    "coordinates": [-100.82164, 21.98033], 
                    "type": "Point" 
                },
                "properties": { 
                    "title": "RESTAURANT LA GÜERA",                    
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          true, 
                    "zona_industrial":                   false,
                    "plaza":                 false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "restaurant" 
                } 
            },
            { 
                "type": "Feature",
                "geometry": { 
                    "coordinates": [-100.82269, 21.97989], 
                    "type": "Point" 
                },
                "properties": { 
                    "title": "CARL'S JR. LA PILA",                    
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          true, 
                    "zona_industrial":                   false,
                    "plaza":                 false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "restaurant" 
                } 
            },
            { 
                "type": "Feature",
                "geometry": { 
                    "coordinates": [-100.82325, 21.98006], 
                    "type": "Point" 
                },
                "properties": { 
                    "title": "BARRA 17",                    
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          true, 
                    "zona_industrial":                   false,
                    "plaza":                 false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "restaurant" 
                } 
            },
            { 
                "type": "Feature",
                "geometry": { 
                    "coordinates": [-100.90357, 22.05247], 
                    "type": "Point" 
                },
                "properties": { 
                    "title": "LAS JACARANDAS HACIENDA RESTAURANTE",                    
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          true, 
                    "zona_industrial":                   false,
                    "plaza":                 false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "restaurant" 
                } 
            },
            { 
                "type": "Feature",
                "geometry": { 
                    "coordinates": [-100.87422, 22.07728], 
                    "type": "Point" 
                },
                "properties": { 
                    "title": "EL BORREGO DE ORO",                    
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          true, 
                    "zona_industrial":                   false,
                    "plaza":                 false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "restaurant" 
                } 
            },
            { 
                "type": "Feature",
                "geometry": { 
                    "coordinates": [-100.87425, 22.07957], 
                    "type": "Point" 
                },
                "properties": { 
                    "title": "JARDÍN LOLITA, BARBACOA Y MENUDO",                    
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          true, 
                    "zona_industrial":                   false,
                    "plaza":                 false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "restaurant" 
                } 
            },
            { 
                "type": "Feature",
                "geometry": { 
                    "coordinates": [-100.87559, 22.08285], 
                    "type": "Point" 
                },
                "properties": { 
                    "title": "CERVECERÍA 57",                    
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          true, 
                    "zona_industrial":                   false,
                    "plaza":                 false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "restaurant" 
                } 
            },
            { 
                "type": "Feature",
                "geometry": { 
                    "coordinates": [-100.87747, 22.08341], 
                    "type": "Point" 
                },
                "properties": { 
                    "title": "MARISCOS LA PLAYITA",                    
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          true, 
                    "zona_industrial":                   false,
                    "plaza":                 false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "restaurant" 
                } 
            },
            { 
                "type": "Feature",
                "geometry": { 
                    "coordinates": [-100.88050, 22.08616], 
                    "type": "Point" 
                },
                "properties": { 
                    "title": "POLLO PEPE POZOS",                    
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          true, 
                    "zona_industrial":                   false,
                    "plaza":                 false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "restaurant" 
                } 
            },
            { 
                "type": "Feature",
                "geometry": { 
                    "coordinates": [-100.87927, 22.08652], 
                    "type": "Point" 
                },
                "properties": { 
                    "title": "RESTAURANTE LOS FAROLES",                    
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          true, 
                    "zona_industrial":                   false,
                    "plaza":                 false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "restaurant" 
                } 
            },
            { 
                "type": "Feature",
                "geometry": { 
                    "coordinates": [-100.87976, 22.08718], 
                    "type": "Point" 
                },
                "properties": { 
                    "title": "TORTERÍA EL REY SUCURSAL POZOS",                    
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          true, 
                    "zona_industrial":          false,
                    "plaza":                 false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "restaurant" 
                } 
            },
            { 
                "type": "Feature",
                "geometry": { 
                    "coordinates": [-100.87966, 22.08747], 
                    "type": "Point" 
                },
                "properties": { 
                    "title": "RESTAURANT 75",                    
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          true, 
                    "zona_industrial":                   false,
                    "plaza":                 false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "restaurant" 
                } 
            },
            { 
                "type": "Feature",
                "geometry": { 
                    "coordinates": [-100.88074, 22.08922], 
                    "type": "Point" 
                },
                "properties": { 
                    "title": "PANQUESO POZOS",                    
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          true, 
                    "zona_industrial":                   false,
                    "plaza":                 false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "restaurant" 
                } 
            },
            { 
                "type": "Feature",
                "geometry": { 
                    "coordinates": [-100.87807, 22.09291], 
                    "type": "Point" 
                },
                "properties": { 
                    "title": "LA CARDONA PANADERIA",                    
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          true, 
                    "zona_industrial":                   false,
                    "plaza":                 false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "restaurant" 
                } 
            },
            { 
                "type": "Feature",
                "geometry": { 
                    "coordinates": [-100.87724, 22.09540], 
                    "type": "Point" 
                },
                "properties": { 
                    "title": "TAQUERIA ARANDA'S",                    
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          true, 
                    "zona_industrial":                   false,
                    "plaza":                 false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "restaurant" 
                } 
            },
            { 
                "type": "Feature",
                "geometry": { 
                    "coordinates": [-100.88080, 22.09462], 
                    "type": "Point" 
                },
                "properties": { 
                    "title": "MARISCOS EL SINALOENSE",                    
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          true, 
                    "zona_industrial":                   false,
                    "plaza":                 false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "restaurant" 
                } 
            },
            { 
                "type": "Feature",
                "geometry": { 
                    "coordinates": [-100.87986, 22.09567], 
                    "type": "Point" 
                },
                "properties": { 
                    "title": "TACOS LAS RANAS",                    
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          true, 
                    "zona_industrial":                   false,
                    "plaza":                 false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "restaurant" 
                } 
            },
            { 
                "type": "Feature",
                "geometry": { 
                    "coordinates": [-100.88125, 22.09565], 
                    "type": "Point" 
                },
                "properties": { 
                    "title": "GOZOSA RESTAURANTE",                    
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          true, 
                    "zona_industrial":                   false,
                    "plaza":                 false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "restaurant" 
                } 
            },
            { 
                "type": "Feature",
                "geometry": { 
                    "coordinates": [-100.88243, 22.09566], 
                    "type": "Point" 
                },
                "properties": { 
                    "title": "HECHO EN BRAZZA BUFFET CHURRASQUERIA",                    
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          true, 
                    "zona_industrial":                   false,
                    "plaza":                 false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "restaurant" 
                } 
            },
            { 
                "type": "Feature",
                "geometry": { 
                    "coordinates": [-100.88405, 22.09520], 
                    "type": "Point" 
                },
                "properties": { 
                    "title": "LA CASA DE LA ARRACHERA",                    
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          true, 
                    "zona_industrial":                   false,
                    "plaza":                 false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "restaurant" 
                } 
            },
            { 
                "type": "Feature",
                "geometry": { 
                    "coordinates": [-100.88490, 22.09667], 
                    "type": "Point" 
                },
                "properties": { 
                    "title": "SONORA'S MEAT",                    
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          true, 
                    "zona_industrial":                   false,
                    "plaza":                 false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "restaurant" 
                } 
            },
            { 
                "type": "Feature",
                "geometry": { 
                    "coordinates": [-100.88458, 22.09690], 
                    "type": "Point" 
                },
                "properties": { 
                    "title": "BRULE DELICIAS Y CAFÉ",                    
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          true, 
                    "zona_industrial":                   false,
                    "plaza":                 false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "restaurant" 
                } 
            },
            { 
                "type": "Feature",
                "geometry": { 
                    "coordinates": [-100.88487,22.09735], 
                    "type": "Point" 
                },
                "properties": { 
                    "title": "CONTAINER PARK 7B",                    
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          true, 
                    "zona_industrial":                   false,
                    "plaza":                 false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "restaurant" 
                } 
            },
            { 
                "type": "Feature",
                "geometry": { 
                    "coordinates": [-100.88538, 22.09767], 
                    "type": "Point" 
                },
                "properties": { 
                    "title": "DOMINO'S® POZOS",                    
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          true, 
                    "zona_industrial":          false,
                    "plaza":                 false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "restaurant" 
                } 
            },
            { 
                "type": "Feature",
                "geometry": { 
                    "coordinates": [-100.88574, 22.09836], 
                    "type": "Point" 
                },
                "properties": { 
                    "title": "CHILAQUERIA SAN LUIS",                    
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          true, 
                    "zona_industrial":          false,
                    "plaza":                 false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "restaurant" 
                } 
            },
            { 
                "type": "Feature",
                "geometry": { 
                    "coordinates": [-100.89644, 22.11131], 
                    "type": "Point" 
                },
                "properties": { 
                    "title": "STARBUCKS CARRETERA 57 NORTE SLP DT",                    
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          true, 
                    "zona_industrial":          false,
                    "plaza":                 false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "restaurant" 
                } 
            },
            { 
                "type": "Feature",
                "geometry": { 
                    "coordinates": [-100.89986, 22.11176], 
                    "type": "Point" 
                },
                "properties": { 
                    "title": "ITALIANNI'S SAN LUIS POTOSÍ ZONA INDUSTRIAL",                    
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          true, 
                    "zona_industrial":          false,
                    "plaza":                 false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "restaurant" 
                } 
            },
            { 
                "type": "Feature",
                "geometry": { 
                    "coordinates": [-100.84766, 21.96782], 
                    "type": "Point" 
                },
                "properties": { 
                    "title": "BMW GATE 1 SLP",                    
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "zona_industrial":          true,
                    "plaza":                 false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "industry" 
                } 
            },
            { 
                "type": "Feature",
                "geometry": { 
                    "coordinates": [-100.84821, 21.97087], 
                    "type": "Point" 
                },
                "properties": { 
                    "title": "BMW PERMANENT TRAINING CENTER (PTC)",                    
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "zona_industrial":          true,
                    "plaza":                 false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "industry" 
                } 
            },   
            { 
                "type": "Feature",
                "geometry": { 
                    "coordinates": [-100.85427, 21.97513], 
                    "type": "Point" 
                },
                "properties": { 
                    "title": "MINGHUA DE MÉXICO",                    
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "zona_industrial":          true,
                    "plaza":                 false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "industry" 
                } 
            },   
            { 
                "type": "Feature",
                "geometry": { 
                    "coordinates": [-100.87171, 21.97191], 
                    "type": "Point" 
                },
                "properties": { 
                    "title": "RONAL SAN LUIS S.A",                    
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "zona_industrial":          true,
                    "plaza":                 false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "industry" 
                } 
            },   
            { 
                "type": "Feature",
                "geometry": { 
                    "coordinates": [-100.87364, 21.96841], 
                    "type": "Point" 
                },
                "properties": { 
                    "title": "AGC AUTOMOTIVE MEXICO",                    
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "zona_industrial":          true,
                    "plaza":                 false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "industry" 
                } 
            },   
            { 
                "type": "Feature",
                "geometry": { 
                    "coordinates": [-100.87791, 21.96599], 
                    "type": "Point" 
                },
                "properties": { 
                    "title": "TOPY FASTENERS MÉXICO SA DE CV",                    
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "zona_industrial":          true,
                    "plaza":                 false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "industry" 
                } 
            },   
            { 
                "type": "Feature",
                "geometry": { 
                    "coordinates": [-100.87970, 21.96921], 
                    "type": "Point" 
                },
                "properties": { 
                    "title": "MARTINREA AUTOMOTIVE",                    
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "zona_industrial":          true,
                    "plaza":                 false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "industry" 
                } 
            },   
            { 
                "type": "Feature",
                "geometry": { 
                    "coordinates": [-100.87567, 21.97477], 
                    "type": "Point" 
                },
                "properties": { 
                    "title": "SAN LUIS METAL FORMING",                    
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "zona_industrial":          true,
                    "plaza":                 false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "industry" 
                } 
            },   
            { 
                "type": "Feature",
                "geometry": { 
                    "coordinates": [-100.87322, 21.98211], 
                    "type": "Point" 
                },
                "properties": { 
                    "title": "PARQUE INDUSTRIAL LOGISTIK 1",                    
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "zona_industrial":          true,
                    "plaza":                 false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "industry" 
                } 
            },   
            { 
                "type": "Feature",
                "geometry": { 
                    "coordinates": [-100.85620, 21.98958], 
                    "type": "Point" 
                },
                "properties": { 
                    "title": "L'ORÉAL PARIS - SAN LUIS POTOSÍ",                    
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "zona_industrial":          true,
                    "plaza":                 false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "industry" 
                } 
            },   
            { 
                "type": "Feature",
                "geometry": { 
                    "coordinates": [-100.87336, 21.98977], 
                    "type": "Point" 
                },
                "properties": { 
                    "title": "GM, COMPLEJO SAN LUIS POTOSÍ",                    
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "zona_industrial":          true,
                    "plaza":                 false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "industry" 
                } 
            },   
            { 
                "type": "Feature",
                "geometry": { 
                    "coordinates": [-100.88751, 21.97918], 
                    "type": "Point" 
                },
                "properties": { 
                    "title": "LOGISTIK PARK SAN LUIS POTOSÍ",                    
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "zona_industrial":          true,
                    "plaza":                 false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "industry" 
                } 
            },   
            { 
                "type": "Feature",
                "geometry": { 
                    "coordinates": [-100.89097, 22.01158], 
                    "type": "Point" 
                },
                "properties": { 
                    "title": "AUTONEUM MEXICO OPERATION PLANTA 2",                    
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "zona_industrial":          true,
                    "plaza":                 false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "industry" 
                } 
            },   
            { 
                "type": "Feature",
                "geometry": { 
                    "coordinates": [-100.88931, 22.01589], 
                    "type": "Point" 
                },
                "properties": { 
                    "title": "FAURECIA AUTOMOTIVE SEATING PLANT 2",                    
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "zona_industrial":          true,
                    "plaza":                 false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "industry" 
                } 
            },   
            { 
                "type": "Feature",
                "geometry": { 
                    "coordinates": [-100.84733, 22.02960], 
                    "type": "Point" 
                },
                "properties": { 
                    "title": "INTER PRICE LOGÍSTICA, S.A. DE C.V",                    
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "zona_industrial":          true,
                    "plaza":                 false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "industry" 
                } 
            },   
            { 
                "type": "Feature",
                "geometry": { 
                    "coordinates": [-100.88894, 22.02827], 
                    "type": "Point" 
                },
                "properties": { 
                    "title": "ABB MEXICO SA DE CV",                    
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "zona_industrial":          true,
                    "plaza":                 false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "industry" 
                } 
            },   
            { 
                "type": "Feature",
                "geometry": { 
                    "coordinates": [-100.90194, 22.02550], 
                    "type": "Point" 
                },
                "properties": { 
                    "title": "GOODYEAR",                    
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "zona_industrial":          true,
                    "plaza":                 false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "industry" 
                } 
            },   
            { 
                "type": "Feature",
                "geometry": { 
                    "coordinates": [-100.89252, 22.03531], 
                    "type": "Point" 
                },
                "properties": { 
                    "title": "DRAEXLMAIER COMPONENTS AUTOMOTIVE DE MEXICO",                    
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "zona_industrial":          true,
                    "plaza":                 false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "industry" 
                } 
            },   
            { 
                "type": "Feature",
                "geometry": { 
                    "coordinates": [-100.84733, 22.02960], 
                    "type": "Point" 
                },
                "properties": { 
                    "title": "INTER PRICE LOGÍSTICA, S.A. DE C.V",                    
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "zona_industrial":          true,
                    "plaza":                 false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "industry" 
                } 
            },   
            { 
                "type": "Feature",
                "geometry": { 
                    "coordinates": [-100.85397, 22.03750], 
                    "type": "Point" 
                },
                "properties": { 
                    "title": "MELAZAS Y GRANOS S.A DE C.V.",                    
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "zona_industrial":          true,
                    "plaza":                 false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "industry" 
                } 
            },   
            { 
                "type": "Feature",
                "geometry": { 
                    "coordinates": [-100.85526, 22.04255], 
                    "type": "Point" 
                },
                "properties": { 
                    "title": "ACEROS ALCALDE PILA",                    
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "zona_industrial":          true,
                    "plaza":                 false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "industry" 
                } 
            },   
            { 
                "type": "Feature",
                "geometry": { 
                    "coordinates": [-100.85601, 22.04437], 
                    "type": "Point" 
                },
                "properties": { 
                    "title": "CEDIS DHL, SAN LUIS POTOSI",                    
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "zona_industrial":          true,
                    "plaza":                 false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "industry" 
                } 
            },   
            { 
                "type": "Feature",
                "geometry": { 
                    "coordinates": [-100.85966, 22.05058], 
                    "type": "Point" 
                },
                "properties": { 
                    "title": "TLC PATIO SAN LUIS",                    
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "zona_industrial":          true,
                    "plaza":                 false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "industry" 
                } 
            },   
            { 
                "type": "Feature",
                "geometry": { 
                    "coordinates": [-100.86892, 22.04536], 
                    "type": "Point" 
                },
                "properties": { 
                    "title": "IMMSA SLP",                    
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "zona_industrial":          true,
                    "plaza":                 false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "industry" 
                } 
            },   
            { 
                "type": "Feature",
                "geometry": { 
                    "coordinates": [-100.86052, 22.05480], 
                    "type": "Point" 
                },
                "properties": { 
                    "title": "ALMEX",                    
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "zona_industrial":          true,
                    "plaza":                 false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "industry" 
                } 
            },   
            { 
                "type": "Feature",
                "geometry": { 
                    "coordinates": [-100.87268, 22.04495], 
                    "type": "Point" 
                },
                "properties": { 
                    "title": "PEASA CCAP",                    
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "zona_industrial":          true,
                    "plaza":                 false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "industry" 
                } 
            },   
            { 
                "type": "Feature",
                "geometry": { 
                    "coordinates": [-100.88003, 22.04347], 
                    "type": "Point" 
                },
                "properties": { 
                    "title": "ALL FAST LOGISTICS",                    
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "zona_industrial":          true,
                    "plaza":                 false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "industry" 
                } 
            },   
            { 
                "type": "Feature",
                "geometry": { 
                    "coordinates": [-100.89657, 22.04396], 
                    "type": "Point" 
                },
                "properties": { 
                    "title": "FABRICA DE ENVASES DE VIDRIO DEL POTOSÍ, S.A. DE C.V.",                    
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "zona_industrial":          true,
                    "plaza":                 false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "industry" 
                } 
            },   
            { 
                "type": "Feature",
                "geometry": { 
                    "coordinates": [-100.86475, 22.06083], 
                    "type": "Point" 
                },
                "properties": { 
                    "title": "PATIO CASTORES SAN LUIS POTOSÍ",                    
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "zona_industrial":          true,
                    "plaza":                 false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "industry" 
                } 
            },   
            { 
                "type": "Feature",
                "geometry": { 
                    "coordinates": [-100.87709, 22.04921], 
                    "type": "Point" 
                },
                "properties": { 
                    "title": "CONTITECH MEXICANA SA DE CV",                    
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "zona_industrial":          true,
                    "plaza":                 false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "industry" 
                } 
            },   
            { 
                "type": "Feature",
                "geometry": { 
                    "coordinates": [-100.87257, 22.05049], 
                    "type": "Point" 
                },
                "properties": { 
                    "title": "PLANTA SLP LAMOSA",                    
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "zona_industrial":          true,
                    "plaza":                 false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "industry" 
                } 
            },   
            { 
                "type": "Feature",
                "geometry": { 
                    "coordinates": [-100.86949, 22.05208], 
                    "type": "Point" 
                },
                "properties": { 
                    "title": "EATON TRUCK COMPONENTS",                    
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "zona_industrial":          true,
                    "plaza":                 false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "industry" 
                } 
            },   
            { 
                "type": "Feature",
                "geometry": { 
                    "coordinates": [-100.86535, 22.05401], 
                    "type": "Point" 
                },
                "properties": { 
                    "title": "SMR AUTOMOTIVE VISION SYSTEMS, S.A. DE C.V.",                    
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "zona_industrial":          true,
                    "plaza":                 false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "industry" 
                } 
            },   
            { 
                "type": "Feature",
                "geometry": { 
                    "coordinates": [-100.88150, 22.04732], 
                    "type": "Point" 
                },
                "properties": { 
                    "title": "PREFERRED COMPOUNDING DE MEXICO",                    
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "zona_industrial":          true,
                    "plaza":                 false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "industry" 
                } 
            },   
            { 
                "type": "Feature",
                "geometry": { 
                    "coordinates": [-100.88026, 22.05102], 
                    "type": "Point" 
                },
                "properties": { 
                    "title": "CUMMINS FILTRACION",                    
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "zona_industrial":          true,
                    "plaza":                 false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "industry" 
                } 
            },   
            { 
                "type": "Feature",
                "geometry": { 
                    "coordinates": [-100.87798, 22.05223], 
                    "type": "Point" 
                },
                "properties": { 
                    "title": "NISSHA PMX TECHNOLOGIES S.A. DE C.V.",                    
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "zona_industrial":          true,
                    "plaza":                 false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "industry" 
                } 
            },   
            { 
                "type": "Feature",
                "geometry": { 
                    "coordinates": [-100.87675, 22.05278], 
                    "type": "Point" 
                },
                "properties": { 
                    "title": "BATZ MEXICANA",                    
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "zona_industrial":          true,
                    "plaza":                 false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "industry" 
                } 
            },   
            { 
                "type": "Feature",
                "geometry": { 
                    "coordinates": [-100.87312, 22.05331], 
                    "type": "Point" 
                },
                "properties": { 
                    "title": "BORGWARNER ALTERNADORES",                    
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "zona_industrial":          true,
                    "plaza":                 false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "industry" 
                } 
            },   
            { 
                "type": "Feature",
                "geometry": { 
                    "coordinates": [-100.87193, 22.05674], 
                    "type": "Point" 
                },
                "properties": { 
                    "title": "VALEO SISTEMAS ELÉCTRICOS",                    
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "zona_industrial":          true,
                    "plaza":                 false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "industry" 
                } 
            },   
            { 
                "type": "Feature",
                "geometry": { 
                    "coordinates": [-100.88705, 22.05069], 
                    "type": "Point" 
                },
                "properties": { 
                    "title": "BARCEL",                    
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "zona_industrial":          true,
                    "plaza":                 false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "industry" 
                } 
            },   
            { 
                "type": "Feature",
                "geometry": { 
                    "coordinates": [-100.88372, 22.05352], 
                    "type": "Point" 
                },
                "properties": { 
                    "title": "NIDEC",                    
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "zona_industrial":          true,
                    "plaza":                 false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "industry" 
                } 
            },   
            { 
                "type": "Feature",
                "geometry": { 
                    "coordinates": [-100.88022, 22.05344], 
                    "type": "Point" 
                },
                "properties": { 
                    "title": "TI AUTOMOTIVE",                    
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "zona_industrial":          true,
                    "plaza":                 false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "industry" 
                } 
            },   
            { 
                "type": "Feature",
                "geometry": { 
                    "coordinates": [-100.87586, 22.05855], 
                    "type": "Point" 
                },
                "properties": { 
                    "title": "PARQUE INDUSTRIAL MILLENNIUM",                    
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "zona_industrial":          true,
                    "plaza":                 false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "industry" 
                } 
            },   
            { 
                "type": "Feature",
                "geometry": { 
                    "coordinates": [-100.87493, 22.06226], 
                    "type": "Point" 
                },
                "properties": { 
                    "title": "FRESAN INGENIEROS, S.A. DE C.V.",                    
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "zona_industrial":          true,
                    "plaza":                 false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "industry" 
                } 
            },   
            { 
                "type": "Feature",
                "geometry": { 
                    "coordinates": [-100.87756, 22.06036], 
                    "type": "Point" 
                },
                "properties": { 
                    "title": "TEKNIA",                    
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "zona_industrial":          true,
                    "plaza":                 false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "industry" 
                } 
            },   
            { 
                "type": "Feature",
                "geometry": { 
                    "coordinates": [-100.87961, 22.06050], 
                    "type": "Point" 
                },
                "properties": { 
                    "title": "DANONE SAN LUIS POTOSI (PLANTA)",                    
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "zona_industrial":          true,
                    "plaza":                 false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "industry" 
                } 
            },   
            { 
                "type": "Feature",
                "geometry": { 
                    "coordinates": [-100.87404, 22.04610], 
                    "type": "Point" 
                },
                "properties": { 
                    "title": "PEASA AUTOPARTES ",                    
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "zona_industrial":          true,
                    "plaza":                 false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "industry" 
                } 
            },   
            { 
                "type": "Feature",
                "geometry": { 
                    "coordinates": [-100.87190, 22.04735], 
                    "type": "Point" 
                },
                "properties": { 
                    "title": "FARGOS LOGISTICS - ALMACENAMIENTO Y DISTRIBUCIÓN",                    
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "zona_industrial":          true,
                    "plaza":                 false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "industry" 
                } 
            },   
            { 
                "type": "Feature",
                "geometry": { 
                    "coordinates": [-100.87931, 22.06340], 
                    "type": "Point" 
                },
                "properties": { 
                    "title": "A. SCHULMAN DE MÉXICO",                    
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "zona_industrial":          true,
                    "plaza":                 false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "industry" 
                } 
            },   
            { 
                "type": "Feature",
                "geometry": { 
                    "coordinates": [-100.87659, 22.06798], 
                    "type": "Point" 
                },
                "properties": { 
                    "title": "ALA TRANSPORTES",                    
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "zona_industrial":          true,
                    "plaza":                 false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "industry" 
                } 
            },   
            { 
                "type": "Feature",
                "geometry": { 
                    "coordinates": [-100.87347, 22.06819], 
                    "type": "Point" 
                },
                "properties": { 
                    "title": "SODISA SLP",                    
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "zona_industrial":          true,
                    "plaza":                 false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "industry" 
                } 
            },   
            { 
                "type": "Feature",
                "geometry": { 
                    "coordinates": [-100.87297, 22.06888], 
                    "type": "Point" 
                },
                "properties": { 
                    "title": "VALEO SISTEMAS ELÉCTRICOS Y VALEO SISTEMAS AUTOMOTRICES",                    
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "zona_industrial":          true,
                    "plaza":                 false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "industry" 
                } 
            },   
            { 
                "type": "Feature",
                "geometry": { 
                    "coordinates": [-100.88083, 22.06840], 
                    "type": "Point" 
                },
                "properties": { 
                    "title": "SCHOTT GEMTRON DE MEXICO S.A. DE C.V.",                    
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "zona_industrial":          true,
                    "plaza":                 false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "industry" 
                } 
            },   
            { 
                "type": "Feature",
                "geometry": { 
                    "coordinates": [-100.88139, 22.06962], 
                    "type": "Point" 
                },
                "properties": { 
                    "title": "TIGHITCO LATINOAMERICA S.A. DE C.V.",                    
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "zona_industrial":          true,
                    "plaza":                 false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "industry" 
                } 
            },   
            { 
                "type": "Feature",
                "geometry": { 
                    "coordinates": [-100.87841, 22.07123], 
                    "type": "Point" 
                },
                "properties": { 
                    "title": "CORPORATIVO INDUSTRIAL CAZVI S.A. DE C.V.",                    
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "zona_industrial":          true,
                    "plaza":                 false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "industry" 
                } 
            },   
            { 
                "type": "Feature",
                "geometry": { 
                    "coordinates": [-100.87400, 22.07330], 
                    "type": "Point" 
                },
                "properties": { 
                    "title": "INTER MOTORS CAR",                    
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "zona_industrial":          true,
                    "plaza":                 false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "industry" 
                } 
            },   
            { 
                "type": "Feature",
                "geometry": { 
                    "coordinates": [-100.87493, 22.07503], 
                    "type": "Point" 
                },
                "properties": { 
                    "title": "GRUPO ACERERO S.A. DE C.V.",                    
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "zona_industrial":          true,
                    "plaza":                 false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "industry" 
                } 
            },   
            { 
                "type": "Feature",
                "geometry": { 
                    "coordinates": [-100.87859, 22.07374], 
                    "type": "Point" 
                },
                "properties": { 
                    "title": "OMEGA ALEACIONES SA DE CV",                    
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "zona_industrial":          true,
                    "plaza":                 false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "industry" 
                } 
            },   
            { 
                "type": "Feature",
                "geometry": { 
                    "coordinates": [-100.87952, 22.07321], 
                    "type": "Point" 
                },
                "properties": { 
                    "title": "REYNOSO INTERNATIONAL SYSTEMS",                    
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "zona_industrial":          true,
                    "plaza":                 false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "industry" 
                } 
            },   
            { 
                "type": "Feature",
                "geometry": { 
                    "coordinates": [-100.87690, 22.07812], 
                    "type": "Point" 
                },
                "properties": { 
                    "title": "PACCAR PARTS",                    
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "zona_industrial":          true,
                    "plaza":                 false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "industry" 
                } 
            },   
            { 
                "type": "Feature",
                "geometry": { 
                    "coordinates": [-100.87917, 22.07780], 
                    "type": "Point" 
                },
                "properties": { 
                    "title": "SYNGENTA",                    
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "zona_industrial":          true,
                    "plaza":                 false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "industry" 
                } 
            },   
            { 
                "type": "Feature",
                "geometry": { 
                    "coordinates": [-100.87976, 22.07723], 
                    "type": "Point" 
                },
                "properties": { 
                    "title": "PEASA",                    
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "zona_industrial":          true,
                    "plaza":                 false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "industry" 
                } 
            },   
            { 
                "type": "Feature",
                "geometry": { 
                    "coordinates": [-100.88088, 22.07657], 
                    "type": "Point" 
                },
                "properties": { 
                    "title": "CONSULTORÍA INTEGRAL EN SISTEMAS Y TELECOMUNICACIONES, S.A. DE C.V.",                    
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "zona_industrial":          true,
                    "plaza":                 false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "industry" 
                } 
            },   
            { 
                "type": "Feature",
                "geometry": { 
                    "coordinates": [-100.88284, 22.07601], 
                    "type": "Point" 
                },
                "properties": { 
                    "title": "ARGO STEEL WORKS",                    
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "zona_industrial":          true,
                    "plaza":                 false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "industry" 
                } 
            },   
            { 
                "type": "Feature",
                "geometry": { 
                    "coordinates": [-100.88407, 22.07444], 
                    "type": "Point" 
                },
                "properties": { 
                    "title": "MAXIONWHEELS",                    
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "zona_industrial":          true,
                    "plaza":                 false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "industry" 
                } 
            },   
            { 
                "type": "Feature",
                "geometry": { 
                    "coordinates": [-100.88853, 22.07240], 
                    "type": "Point" 
                },
                "properties": { 
                    "title": "3M MÉXICO, S.A. DE C.V",                    
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "zona_industrial":          true,
                    "plaza":                 false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "industry" 
                } 
            },   
            { 
                "type": "Feature",
                "geometry": { 
                    "coordinates": [-100.89258, 22.07231], 
                    "type": "Point" 
                },
                "properties": { 
                    "title": "MABE SAN LUIS",                    
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "zona_industrial":          true,
                    "plaza":                 false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "industry" 
                } 
            },   
            { 
                "type": "Feature",
                "geometry": { 
                    "coordinates": [-100.88699, 22.07554], 
                    "type": "Point" 
                },
                "properties": { 
                    "title": "VALEO TÉRMICO",                    
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "zona_industrial":          true,
                    "plaza":                 false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "industry" 
                } 
            },   
            { 
                "type": "Feature",
                "geometry": { 
                    "coordinates": [-100.87984, 22.07913], 
                    "type": "Point" 
                },
                "properties": { 
                    "title": "MARTINREA AUTOMOTIVE STRUCTURES",                    
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "zona_industrial":          true,
                    "plaza":                 false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "industry" 
                } 
            },   
            { 
                "type": "Feature",
                "geometry": { 
                    "coordinates": [-100.87902, 22.08362], 
                    "type": "Point" 
                },
                "properties": { 
                    "title": "CUMMINS ABO",                    
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "zona_industrial":          true,
                    "plaza":                 false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "industry" 
                } 
            },   
            { 
                "type": "Feature",
                "geometry": { 
                    "coordinates": [-100.88272, 22.08175], 
                    "type": "Point" 
                },
                "properties": { 
                    "title": "BIMBO SAN LUIS POTOSÍ",                    
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "zona_industrial":          true,
                    "plaza":                 false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "industry" 
                } 
            },   
            { 
                "type": "Feature",
                "geometry": { 
                    "coordinates": [-100.88508, 22.07995], 
                    "type": "Point" 
                },
                "properties": { 
                    "title": "BERRY GLOBAL",                    
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "zona_industrial":          true,
                    "plaza":                 false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "industry" 
                } 
            },   
            { 
                "type": "Feature",
                "geometry": { 
                    "coordinates": [-100.88097, 22.08411], 
                    "type": "Point" 
                },
                "properties": { 
                    "title": "SIDETLA",                    
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "zona_industrial":          true,
                    "plaza":                 false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "industry" 
                } 
            },   
            { 
                "type": "Feature",
                "geometry": { 
                    "coordinates": [-100.88191, 22.08388], 
                    "type": "Point" 
                },
                "properties": { 
                    "title": "ANVI MEXICANA",                    
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "zona_industrial":          true,
                    "plaza":                 false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "industry" 
                } 
            },   
            { 
                "type": "Feature",
                "geometry": { 
                    "coordinates": [-100.88855, 22.07950], 
                    "type": "Point" 
                },
                "properties": { 
                    "title": "DEEMSA DISEÑO EN EMPAQUES MODERNOS S.A. DE C.V.",                    
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "zona_industrial":          true,
                    "plaza":                 false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "industry" 
                } 
            },   
            { 
                "type": "Feature",
                "geometry": { 
                    "coordinates": [-100.88952, 22.07890], 
                    "type": "Point" 
                },
                "properties": { 
                    "title": "VALEO TERMICO",                    
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "zona_industrial":          true,
                    "plaza":                 false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "industry" 
                } 
            },   
            { 
                "type": "Feature",
                "geometry": { 
                    "coordinates": [-100.89252, 22.07715], 
                    "type": "Point" 
                },
                "properties": { 
                    "title": "MABE LEISER",                    
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "zona_industrial":          true,
                    "plaza":                 false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "industry" 
                } 
            },   
            { 
                "type": "Feature",
                "geometry": { 
                    "coordinates": [-100.89643, 22.07598], 
                    "type": "Point" 
                },
                "properties": { 
                    "title": "GRUPO ACERERO",                    
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "zona_industrial":          true,
                    "plaza":                 false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "industry" 
                } 
            },   
            { 
                "type": "Feature",
                "geometry": { 
                    "coordinates": [-100.89255, 22.08294], 
                    "type": "Point" 
                },
                "properties": { 
                    "title": "PLASTIGLAS DE MÉXICO S.A, DE C.V.",                    
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "zona_industrial":          true,
                    "plaza":                 false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "industry" 
                } 
            },   
            { 
                "type": "Feature",
                "geometry": { 
                    "coordinates": [-100.88634, 22.08603], 
                    "type": "Point" 
                },
                "properties": { 
                    "title": "WABTEC CORPORATION",                    
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "zona_industrial":          true,
                    "plaza":                 false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "industry" 
                } 
            },   
            { 
                "type": "Feature",
                "geometry": { 
                    "coordinates": [-100.89572, 22.08382], 
                    "type": "Point" 
                },
                "properties": { 
                    "title": "ARGO INDUSTRIAL PARK SLP",                    
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "zona_industrial":          true,
                    "plaza":                 false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "industry" 
                } 
            },   
            { 
                "type": "Feature",
                "geometry": { 
                    "coordinates": [-100.89705, 22.08376], 
                    "type": "Point" 
                },
                "properties": { 
                    "title": "PROESA",                    
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "zona_industrial":          true,
                    "plaza":                 false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "industry" 
                } 
            },   
            { 
                "type": "Feature",
                "geometry": { 
                    "coordinates": [-100.89801, 22.08429], 
                    "type": "Point" 
                },
                "properties": { 
                    "title": "CEFI CENTRO DE FOMENTO PARA LA INCLUSIÓN",                    
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "zona_industrial":          true,
                    "plaza":                 false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "industry" 
                } 
            },   
            { 
                "type": "Feature",
                "geometry": { 
                    "coordinates": [-100.89665, 22.08490], 
                    "type": "Point" 
                },
                "properties": { 
                    "title": "TYLSA",                    
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "zona_industrial":          true,
                    "plaza":                 false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "industry" 
                } 
            },   
            { 
                "type": "Feature",
                "geometry": { 
                    "coordinates": [-100.89532, 22.08577], 
                    "type": "Point" 
                },
                "properties": { 
                    "title": "BICICLETAS MERCURIO, S.A. DE C.V.",                    
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "zona_industrial":          true,
                    "plaza":                 false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "industry" 
                } 
            },   
            { 
                "type": "Feature",
                "geometry": { 
                    "coordinates": [-100.89738, 22.08904], 
                    "type": "Point" 
                },
                "properties": { 
                    "title": "THYSSENKRUPP BILSTEIN SASA",                    
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "zona_industrial":          true,
                    "plaza":                 false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "industry" 
                } 
            },   
            { 
                "type": "Feature",
                "geometry": { 
                    "coordinates": [-100.89625, 22.08907], 
                    "type": "Point" 
                },
                "properties": { 
                    "title": "FISCHER MEXICANA STAINLEES STEEL TUBING",                    
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "zona_industrial":          true,
                    "plaza":                 false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "industry" 
                } 
            },   
            { 
                "type": "Feature",
                "geometry": { 
                    "coordinates": [-100.90843, 22.08807], 
                    "type": "Point" 
                },
                "properties": { 
                    "title": "KANSAS CITY SOUTHERN - LA PILA",                    
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "zona_industrial":          true,
                    "plaza":                 false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "industry" 
                } 
            }

        ]
    };

    var map = L.mapbox.map('map')    
        .setView([22.06777, -100.86215], 12)
        .addLayer(L.mapbox.styleLayer('mapbox://styles/oliva123/cl7qbcuch000a14rugqz6f6sr'));

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
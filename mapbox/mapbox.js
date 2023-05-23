
(function () {
    //L.mapbox.accessToken = 'pk.eyJ1Ijoib2xpdmExMjMiLCJhIjoiY2wzdDZzMHh1MXh6ajNib2VhcHR4dWx3ZSJ9.e1SYRWtDEVsfVaId3w5tAg';
    L.mapbox.accessToken =   'pk.eyJ1Ijoib2xpdmExMjMiLCJhIjoiY2wzdDZzMHh1MXh6ajNib2VhcHR4dWx3ZSJ9.e1SYRWtDEVsfVaId3w5tAg';
    var geojson = { 
        type: 'FeatureCollection', 
        features: [ 
            { 
                "type": "Feature", 
                "geometry": { 
                    "coordinates": [-102.29264621534459,21.806370058722674], 
                    "type": "Point" 
                }, 
                "properties": { 
                    "title": "San Gerardo Residencial",               
                    "supermercados_servicios":  true, 
                    "hospitales_farmacias":     true,
                    "escuelas":                 true, 
                    "hoteles":                  true,
                    "restaurant_food":          true, 
                    "zona_industrial":          true,
                    "plaza":                    true, 
                    "marker-color": "#ff0000",
                    "marker-size": "large", 
                    "marker-symbol": "circle" 
                } 
            }, 
            {
                "type": "Feature", 
                "geometry": { 
                    "coordinates": [-102.2909968693108,21.804746438080755],
                    "type": "Point" 
                }, "properties": { 
                    "title": "Escuela San Gerardo",                    
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 true, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "zona_industrial":          false,
                    "plaza":                    false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "school" 
                } 
            },
            {
                "type": "Feature", 
                "geometry": { 
                    "coordinates": [-102.29541532698313,21.80551881052443],
                    "type": "Point" 
                }, "properties": { 
                    "title": "Universidad Politécnica de Aguascalientes",                    
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 true, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "zona_industrial":          false,
                    "plaza":                    false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "school" 
                } 
            },
            {
                "type": "Feature", 
                "geometry": { 
                    "coordinates": [ -102.2872649,21.793391163408483],
                    "type": "Point" 
                }, "properties": { 
                    "title": "UAA CAMPUS SUR",                    
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 true, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "zona_industrial":          false,
                    "plaza":                    false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "school" 
                } 
            },
            {
                "type": "Feature", 
                "geometry": { 
                    "coordinates": [-102.28390705581926,21.82438031770835],
                    "type": "Point" 
                }, "properties": { 
                    "title": "Universidad Panamericana",                    
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 true, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "zona_industrial":          false,
                    "plaza":                    false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "school" 
                } 
            },
            {
                "type": "Feature", 
                "geometry": { 
                    "coordinates": [-102.29243776612499,21.827178113910193],
                    "type": "Point" 
                }, "properties": { 
                    "title": 'ETV. Núm. 107 “Ma. Concepción Aguayo”',                    
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 true, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "zona_industrial":          false,
                    "plaza":                    false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "school" 
                } 
            },
            {
                "type": "Feature", 
                "geometry": { 
                    "coordinates": [-102.2934499809493,21.827826932329295],
                    "type": "Point" 
                }, "properties": { 
                    "title": "ESCUELA PRIMARIA NIÑOS HEROES",                    
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 true, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "zona_industrial":          false,
                    "plaza":                    false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "school" 
                } 
            },
            {
                "type": "Feature", 
                "geometry": { 
                    "coordinates": [-102.27370950422635,21.800782703605964],
                    "type": "Point" 
                }, "properties": { 
                    "title": "Escuela Primaria División Enrique Estrada",                    
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 true, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "zona_industrial":          false,
                    "plaza":                    false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "school" 
                } 
            },
            {
                "type": "Feature", 
                "geometry": { 
                    "coordinates": [-102.26686690422635,21.805629953621246],
                    "type": "Point" 
                }, "properties": { 
                    "title": "Obra Escuela Haciendas San Marcos",                    
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 true, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "zona_industrial":          false,
                    "plaza":                    false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "school" 
                } 
            },
            {
                "type": "Feature", 
                "geometry": { 
                    "coordinates": [-102.28374655952534,21.806750713835555],
                    "type": "Point" 
                }, "properties": { 
                    "title": "Universidad Nissan",                    
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 true, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "zona_industrial":          false,
                    "plaza":                    false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "school" 
                } 
            },
            {
                "type": "Feature", 
                "geometry": { 
                    "coordinates": [-102.27906769258783,21.82127962140045],
                    "type": "Point" 
                }, "properties": { 
                    "title": "Universidad Proyecto UP",                    
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 true, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "zona_industrial":          false,
                    "plaza":                    false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "school" 
                } 
            },
            {
                "type": "Feature", 
                "geometry": { 
                    "coordinates": [-102.28877206560472,21.82715911546573],
                    "type": "Point" 
                }, "properties": { 
                    "title": "UNIVERSIDAD DÍNAMO DE AMÉRICA",                    
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 true, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "zona_industrial":          false,
                    "plaza":                    false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "school" 
                } 
            },
            {
                "type": "Feature", 
                "geometry": { 
                    "coordinates": [-102.28399588940202,21.824356637523678],
                    "type": "Point" 
                }, "properties": { 
                    "title": "Escuela de Dirección de Negocios Gastronómicos",                    
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 true, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "zona_industrial":          false,
                    "plaza":                    false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "school" 
                } 
            },
            {
                "type": "Feature", 
                "geometry": { 
                    "coordinates": [-102.29124400793243,21.84628627123181],
                    "type": "Point" 
                }, "properties": { 
                    "title": "Universidad Chuautemoc",                    
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 true, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "zona_industrial":          false,
                    "plaza":                    false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "school" 
                } 
            },
            {
                "type": "Feature", 
                "geometry": { 
                    "coordinates": [-102.34203300052026,21.857138746032824],
                    "type": "Point" 
                }, "properties": { 
                    "title": "UVM Aguascalientes",                    
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 true, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "zona_industrial":          false,
                    "plaza":                    false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "school" 
                } 
            },
            {
                "type": "Feature", 
                "geometry": { 
                    "coordinates": [-102.32333732883616,21.84139185979447],
                    "type": "Point" 
                }, "properties": { 
                    "title": "Sam's Club Santa Mónica",                    
                    "supermercados_servicios":  true, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "zona_industrial":          false,
                    "plaza":                    false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "grocery" 
                } 
            },
            {
                "type": "Feature", 
                "geometry": { 
                    "coordinates": [-102.32079503068918,21.84459247158479],
                    "type": "Point" 
                }, "properties": { 
                    "title": "H-E-B Santa Mónica",                    
                    "supermercados_servicios":  true, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "zona_industrial":          false,
                    "plaza":                    false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "grocery" 
                } 
            },
            {
                "type": "Feature", 
                "geometry": { 
                    "coordinates": [-102.29613811349155,21.85979421024385],
                    "type": "Point" 
                }, "properties": { 
                    "title": "Walmart Mahatma Gandhi",                    
                    "supermercados_servicios":  true, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "zona_industrial":          false,
                    "plaza":                    false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "grocery" 
                } 
            },
            {
                "type": "Feature", 
                "geometry": { 
                    "coordinates": [-102.31518375396622,21.842931199538015],
                    "type": "Point" 
                }, "properties": { 
                    "title": "Super Paseos",                    
                    "supermercados_servicios":  true, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "zona_industrial":          false,
                    "plaza":                    false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "grocery" 
                } 
            },
            {
                "type": "Feature", 
                "geometry": { 
                    "coordinates": [-102.29190506560474,21.80813887364347],
                    "type": "Point" 
                }, "properties": { 
                    "title": "OXXO LOS OLIVOS",                    
                    "supermercados_servicios":  true, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "zona_industrial":          false,
                    "plaza":                    false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "grocery" 
                } 
            },
            {
                "type": "Feature", 
                "geometry": { 
                    "coordinates": [-102.29341687724326,21.805524959692622],
                    "type": "Point" 
                }, "properties": { 
                    "title": "Oxxo San Gerardo",                    
                    "supermercados_servicios":  true, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "zona_industrial":          false,
                    "plaza":                    false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "grocery" 
                } 
            },
            {
                "type": "Feature", 
                "geometry": { 
                    "coordinates": [-102.28400824232769,21.801560956875754],
                    "type": "Point" 
                }, "properties": { 
                    "title": "OXXO",                    
                    "supermercados_servicios":  true, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "zona_industrial":          false,
                    "plaza":                    false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "grocery" 
                } 
            },
            {
                "type": "Feature", 
                "geometry": { 
                    "coordinates": [-102.28600789814693,21.81380147772301],
                    "type": "Point" 
                }, "properties": { 
                    "title": "OXXO",                    
                    "supermercados_servicios":  true, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "zona_industrial":          false,
                    "plaza":                    false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "grocery" 
                } 
            },
            {
                "type": "Feature", 
                "geometry": { 
                    "coordinates": [-102.28654701957095,21.809463703526834],
                    "type": "Point" 
                }, "properties": { 
                    "title": "Walmart Express San Gerardo",                    
                    "supermercados_servicios":  true, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "zona_industrial":          false,
                    "plaza":                    false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "grocery" 
                } 
            },
            {
                "type": "Feature", 
                "geometry": { 
                    "coordinates": [-102.29872736189866,21.809180921178218],
                    "type": "Point" 
                }, "properties": { 
                    "title": "OXXO SAN GERARDO II",                    
                    "supermercados_servicios":  true, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "zona_industrial":          false,
                    "plaza":                    false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "grocery" 
                } 
            },
            {
                "type": "Feature", 
                "geometry": { 
                    "coordinates": [-102.27315948940203,21.808321683532302],
                    "type": "Point" 
                }, "properties": { 
                    "title": "Bodega Aurrera Express, Viñedos del Sur",                    
                    "supermercados_servicios":  true, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "zona_industrial":          false,
                    "plaza":                    false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "grocery" 
                } 
            },
            {
                "type": "Feature", 
                "geometry": { 
                    "coordinates": [-102.29273649444089,21.83232426295216],
                    "type": "Point" 
                }, "properties": { 
                    "title": "Central de Abastos Aguascalientes",                    
                    "supermercados_servicios":  true, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "zona_industrial":          false,
                    "plaza":                    false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "grocery" 
                } 
            },
            {
                "type": "Feature", 
                "geometry": { 
                    "coordinates": [-102.29273649444089,21.83232426295216],
                    "type": "Point" 
                }, "properties": { 
                    "title": "PLAZA COMERCIAL 21",                    
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "zona_industrial":          false,
                    "plaza":                    true, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "shop" 
                } 
            },
            {
                "type": "Feature", 
                "geometry": { 
                    "coordinates": [-102.31672218465539,21.842685992849095],
                    "type": "Point" 
                }, "properties": { 
                    "title": "Plaza Paseos de Santa Monica",                    
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "zona_industrial":          false,
                    "plaza":                    true, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "shop" 
                } 
            },
            {
                "type": "Feature", 
                "geometry": { 
                    "coordinates": [-102.2854307330625,21.81020181519873],
                    "type": "Point" 
                }, "properties": { 
                    "title": "Meridiam Park Aguascalientes",                    
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "zona_industrial":          false,
                    "plaza":                    true, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "shop" 
                } 
            },
            {
                "type": "Feature", 
                "geometry": { 
                    "coordinates": [-102.27495018650846,21.823336619540832],
                    "type": "Point" 
                }, "properties": { 
                    "title": "PLAZA VILLASUR",                    
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "zona_industrial":          false,
                    "plaza":                    true, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "shop" 
                } 
            },
            {
                "type": "Feature", 
                "geometry": { 
                    "coordinates": [-102.28896703491552,21.839645144034968],
                    "type": "Point" 
                }, "properties": { 
                    "title": "Plaza Vestir",                    
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "zona_industrial":          false,
                    "plaza":                    true, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "shop" 
                } 
            },
            {
                "type": "Feature", 
                "geometry": { 
                    "coordinates": [-102.2844311576723,21.82594247536854],
                    "type": "Point" 
                }, "properties": { 
                    "title": "PLAZA BONATERRA",                    
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "zona_industrial":          false,
                    "plaza":                    true, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "shop" 
                } 
            },
            {
                "type": "Feature", 
                "geometry": { 
                    "coordinates": [-102.26837854047464,21.82461315751959],
                    "type": "Point" 
                }, "properties": { 
                    "title": "Plaza Villafontana",                    
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "zona_industrial":          false,
                    "plaza":                    true, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "shop" 
                } 
            },
            {
                "type": "Feature", 
                "geometry": { 
                    "coordinates": [-102.28187006508448,21.85225484246481],
                    "type": "Point" 
                }, "properties": { 
                    "title": "PLAZA RESIDENCIAL DEL PARQUE",                    
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "zona_industrial":          false,
                    "plaza":                    true, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "shop" 
                } 
            },
            {
                "type": "Feature", 
                "geometry": { 
                    "coordinates": [-102.27333582883614,21.859703840013076],
                    "type": "Point" 
                }, "properties": { 
                    "title": "Plaza Casa Blanca 1",                    
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "zona_industrial":          false,
                    "plaza":                    true, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "shop" 
                } 
            },
            {
                "type": "Feature", 
                "geometry": { 
                    "coordinates": [ -102.2888856,21.859247421276784],
                    "type": "Point" 
                }, "properties": { 
                    "title": "Plaza Marbella",                    
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "zona_industrial":          false,
                    "plaza":                    true, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "shop" 
                } 
            },
            {
                "type": "Feature", 
                "geometry": { 
                    "coordinates": [ -102.29207219814695,21.858783511054206],
                    "type": "Point" 
                }, "properties": { 
                    "title": "Plaza Fiesta",                    
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "zona_industrial":          false,
                    "plaza":                    true, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "shop" 
                } 
            },
            {
                "type": "Feature", 
                "geometry": { 
                    "coordinates": [-102.32073185581926,21.83942989707145],
                    "type": "Point" 
                }, "properties": { 
                    "title": "Plaza Santa Mónica",                    
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "zona_industrial":          false,
                    "plaza":                    true, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "shop" 
                } 
            },
            {
                "type": "Feature", 
                "geometry": { 
                    "coordinates": [-102.30234129814696,21.86190203674826],
                    "type": "Point" 
                }, "properties": { 
                    "title": "Plaza del papa",                    
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "zona_industrial":          false,
                    "plaza":                    true, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "shop" 
                } 
            },
            {
                "type": "Feature", 
                "geometry": { 
                    "coordinates": [-102.31572163068917,21.85912546824353],
                    "type": "Point" 
                }, "properties": { 
                    "title": "Velaria Mall",                    
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "zona_industrial":          false,
                    "plaza":                    true, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "shop" 
                } 
            },
            {
                "type": "Feature", 
                "geometry": { 
                    "coordinates": [-102.30530445767229,21.876558009293813],
                    "type": "Point" 
                }, "properties": { 
                    "title": "Centro Comercial ExpoPlaza",                    
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "zona_industrial":          false,
                    "plaza":                    true, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "shop" 
                } 
            },
            {
                "type": "Feature", 
                "geometry": { 
                    "coordinates": [-102.29637539444089,21.879422455008225],
                    "type": "Point" 
                }, "properties": { 
                    "title": "Centro Comercial Plaza Patria",                    
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "zona_industrial":          false,
                    "plaza":                    true, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "shop" 
                } 
            },
            {
                "type": "Feature", 
                "geometry": { 
                    "coordinates": [-102.29279173491554,21.850590182109027],
                    "type": "Point" 
                }, "properties": { 
                    "title": "Centro Comercial Villasunción",                    
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "zona_industrial":          false,
                    "plaza":                    true, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "shop" 
                } 
            },
            {
                "type": "Feature", 
                "geometry": { 
                    "coordinates": [-102.308677366125,21.89748883478234],
                    "type": "Point" 
                }, "properties": { 
                    "title": "Plaza Comercial Altrea",                    
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "zona_industrial":          false,
                    "plaza":                    true, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "shop" 
                } 
            },
            {
                "type": "Feature", 
                "geometry": { 
                    "coordinates": [-102.29334442750337,21.80550075372459],
                    "type": "Point" 
                }, "properties": { 
                    "title": "Plaza Olivos",                    
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "zona_industrial":          false,
                    "plaza":                    true, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "shop" 
                } 
            },
            {
                "type": "Feature", 
                "geometry": { 
                    "coordinates": [-102.37498589009616,21.82713601373216],
                    "type": "Point" 
                }, "properties": { 
                    "title": "Capilla San José Obrero",                    
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "iglesia":                  true,
                    "plaza":                    false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "hospital" 
                } 
            },
            {
                "type": "Feature", 
                "geometry": { 
                    "coordinates": [-102.24366356745779,21.84867848639452],
                    "type": "Point" 
                }, "properties": { 
                    "title": "Parroquia de San Vicente de Paúl",                    
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "iglesia":                  true,
                    "plaza":                    false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "hospital" 
                } 
            },
            {
                "type": "Feature", 
                "geometry": { 
                    "coordinates": [-102.2970072367686,21.853184078583677],
                    "type": "Point" 
                }, "properties": { 
                    "title": "Parroquia de la Santa Cruz",                    
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "iglesia":                  true,
                    "plaza":                    false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "hospital" 
                } 
            },
            {
                "type": "Feature", 
                "geometry": { 
                    "coordinates": [-102.29007429444088,21.86320389370487],
                    "type": "Point" 
                }, "properties": { 
                    "title": "Parroquia Nuestra Señora de la Asunción",                    
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "iglesia":                  true,
                    "plaza":                    false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "hospital" 
                } 
            },
            {
                "type": "Feature", 
                "geometry": { 
                    "coordinates": [-102.29339324418075,21.88348171623402],
                    "type": "Point" 
                }, "properties": { 
                    "title": "Parroquia de San José",                    
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "iglesia":                  true,
                    "plaza":                    false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "hospital" 
                } 
            },
            {
                "type": "Feature", 
                "geometry": { 
                    "coordinates": [-102.33018967909629,21.876580265520328],
                    "type": "Point" 
                }, "properties": { 
                    "title": "Parroquia",                    
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "iglesia":                  true,
                    "plaza":                    false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "hospital" 
                } 
            },
            {
                "type": "Feature", 
                "geometry": { 
                    "coordinates": [-102.27221944336823,21.795222971513358],
                    "type": "Point" 
                }, "properties": { 
                    "title": "Capilla de Santa Rosa",                    
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "iglesia":                  true,
                    "plaza":                    false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "hospital" 
                } 
            },
            {
                "type": "Feature", 
                "geometry": { 
                    "coordinates": [-102.24519832327701,21.84064574198474],
                    "type": "Point" 
                }, "properties": { 
                    "title": "Capilla de San Francisco de Asis",                    
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "iglesia":                  true,
                    "plaza":                    false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "hospital" 
                } 
            },
            {
                "type": "Feature", 
                "geometry": { 
                    "coordinates": [-102.26241111163851,21.84380180110689],
                    "type": "Point" 
                }, "properties": { 
                    "title": "Parroquia Santa Maria Reina de la Paz",                    
                    "supermercados_servicios":  false, 
                    "hospitales_farmacias":     false,
                    "escuelas":                 false, 
                    "hoteles":                  false,
                    "restaurant_food":          false, 
                    "iglesia":                  true,
                    "plaza":                    false, 
                    "marker-color": "#016DA3",
                    "marker-size": "medium", 
                    "marker-symbol": "hospital" 
                } 
            }

        ]
    };

    var map = L.mapbox.map('map')    
        .setView([21.82715911546573, -102.28912611719763], 13)
        //.addLayer(L.mapbox.styleLayer('mapbox://styles/oliva123/cl7qbcuch000a14rugqz6f6sr'));
        .addLayer(L.mapbox.styleLayer('mapbox://styles/oliva123/clhpfijvk03f201p87l2ae92h'));
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
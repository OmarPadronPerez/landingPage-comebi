
function validarEmail( email ) {
   expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
   if ( !expr.test(email) )
   {
     return false;
    }
   else {
       return true;
    }
}
function solonumeros(e){
    key=e.keyCode || e.which;
    teclado=String.fromCharCode(key);
    numeros="0123456789";
    especiales="8-37-38-46";
    teclado_especial=false;
    for(var i in especiales){
      if(key==especiales[i]){
        teclado_especial=true;
      }
    }
    if(numeros.indexOf(teclado)==-1 && !teclado_especial){
      return false;
    }
}

	function camposFormulario(){
	  var vj_nombre = document.getElementById("nombre").value;
		  var vj_apellido = document.getElementById("apellidos").value;
		  var vj_email = document.getElementById("correo").value;
		  var vj_correo_valido = validarEmail(vj_email);
		  //var vj_telefono = document.getElementById("telefono").value;
		  $("#telefono").val($("#telefono").val().replace(/\s/g, ""));
		  var vj_telefono = $("#telefono").val();
		  var vj_localizacion = "GUANAJUATO";
		  var vj_plaza = "GTO";
		  var vj_fraccionamiento = "VIG";
		  var vj_nombre_micrositio = "Villas de Guanajuato";
		  var vj_campania = "";
		  var vj_informacion_requerida = "Catálogo Villas de Guanajuato";
		  var vj_aleatorio = Math.random();
		  
		  var ref = document.referrer;
		  var RutaBrochure = "https://casascomebi.mx/ViewerJS-Brochures/#../catalogos-casas-muestra/BROCHURE-VG2-VT.pdf";
		  var vj_httpref = RutaBrochure; 
			var url = window.location.href;
			if (url.indexOf("?f") >= 0) {
			  console.log("Visitante de facebook ");
			  vj_campania = "FACEBOOK";
			}else{
				if (url.indexOf("campania=adwords") >= 0) {
					console.log("Visitante de adwords ");
					vj_campania = "GOOGLE";
				}else{
					if (url.indexOf("campania=mailing") >= 0) {
						console.log("Visitante de mailing ");
						vj_campania = "MAILING";
					}else{
						console.log("Visitante orgánico ");
						vj_campania = "ORGANICO";
					}
				}
			}								
		  var vj_cuerpo_mensaje = "";
		  if  (vj_correo_valido) {
			vj_cuerpo_mensaje = "Le pedimos revisar la Información, favor de llenar todos los campos correctamente";
		  }
		  else {
			 vj_cuerpo_mensaje = "Le pedimos revisar la Información , el correo " + vj_email + " no es valido, favor de llenar todos los campos correctamente";
		  }
		 if  (document.getElementById("nombre").value!="" && document.getElementById("apellidos").value!="" && vj_correo_valido  &&  document.getElementById("telefono").value!="" )
		 {
			var valCheck = document.getElementById("chackAviso");
			if(valCheck.checked == true){
				
				if(vj_telefono.length == 10){
					console.log("guardo info");
					
					 window.open(RutaBrochure, "_blank");
					 
					 $.get("https://www.calypsonet.mx:8013/swift/brochuresLandingpages.php",{pw_plaza:vj_plaza,pw_fraccionamiento:vj_fraccionamiento,pw_nombre_micrositio:vj_nombre_micrositio,pw_nombre:vj_nombre,pw_email:vj_email,pw_telefono:vj_telefono,pw_aleatorio:vj_aleatorio,pw_httpref:vj_httpref,pw_apellido:vj_apellido,pw_campania:vj_campania,pw_localizacion:vj_localizacion,pw_informacion_requerida:vj_informacion_requerida,pw_pdf:'catalogo_SGE.pdf'},function(respuesta_consulta){ 
					  console.log("Correo enviado");
					  }); 
					 var varLocalizacion = JSON.parse(localStorage.getItem("countrbyIP")); 
					 var JSONObj = { 
						"ttPlaza" : vj_plaza.toUpperCase(), 
						"ttFraccionamiento"  : vj_fraccionamiento.toUpperCase(),    
						"ttNombre"  : vj_nombre.toUpperCase(),
						"ttApellidos"  : vj_apellido.toUpperCase(),
						"ttCorreo"  : vj_email,
						"ttTelefono"  : vj_telefono,
						"ttLocalizacion"  : vj_localizacion.toUpperCase(),
						"ttCampania"  : vj_campania.toUpperCase(),
						"ttHttp_reference"  : vj_httpref,
						"ttInformacion_requerida"  : vj_informacion_requerida.toUpperCase(),
						"ttNombre_micrositio"  : vj_nombre_micrositio.toUpperCase(),
						"ttorigen_prospecto": typeof varLocalizacion.country !== "undefined" ? varLocalizacion.country : "",
						"ttip_origen": typeof varLocalizacion.ipCliente !== "undefined" ?  varLocalizacion.ipCliente : ""
					  };
					  $.ajax({
						  url: "https://www.calypsonet.mx:8440/telemarketing_rst_visualiza_referidos/rest/telemarketing_rst/post_guarda_referido_web_Landing",
						  type: "post",
						  contentType: "application/json",
						  dataType: "text",
						  data: JSON.stringify(JSONObj)
					  })
					  .done(function(data, textStatus, jqXHR){
						//console.log(JSONObj);
						console.log(data);
						console.log("DATOS GUARDADOS");
						$("#nombre").val("");
						$("#apellidos").val("");
						$("#correo").val("");
						$("#telefono").val("");
						//alert("¡Gracias! Un asesor se comunicará con usted a la brevedad");
						
						try {
							console.log("conversión analytics");
							gtag('event', 'clic', {
							  'event_category': 'descargar catálogo landing ' + vj_fraccionamiento.toUpperCase(),
							  'event_label': 'conversión ' + vj_campania.toUpperCase()
							  //'value': vj_campania.toUpperCase()
							})
						}
						catch(err) {
							console.log("no se ejecutó evento analytics, msj: " + err.message);
						}
						if(vj_campania="GOOGLE"){
							gtag_report_conversion();
							console.log("Código conversión");
						}

					  })
					  .fail(function(jqXHR, textStatus, errorThrow){
						console.log(jqXHR);
					  });
					  
				}else{
					console.log("Teléfono menor a 10 dígitos");
					alert("Favor de escribir el teléfono a 10 dígitos" , function(){});
				}
					
			}else{      
						console.log("falta aviso privacidad");
						alert("Para continuar debe aceptar las políticas del Aviso de Privacidad");
					}
		 }
		 else
		 {
			alert("Información incorrecta " + vj_cuerpo_mensaje , function(){
			  });
		 }
	}


function gtag_report_conversion(url) {
  var callback = function () {
    if (typeof(url) != 'undefined') {
      window.location = url;
    }
  };
  gtag('event', 'conversion', {
      'send_to': 'AW-950493940/9cWpCPm0p2MQ9MWdxQM',
      'event_callback': callback
  });
  return false;
}
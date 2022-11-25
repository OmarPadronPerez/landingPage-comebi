	var url = window.location.href;
	
	var _glc =_glc || []; 
	_glc.push('all_ag9zfmNsaWNrZGVza2NoYXRyDwsSBXVzZXJzGJ3nodAMDA'); 
	var glcpath = (('https:' == document.location.protocol) ? 'https://my.clickdesk.com/clickdesk-ui/browser/' : 'http://my.clickdesk.com/clickdesk-ui/browser/'); 
	var glcp = (('https:' == document.location.protocol) ? 'https://' : 'http://'); 
	var glcspt = document.createElement('script'); 
	glcspt.type = 'text/javascript'; 
	glcspt.async = true; 
	glcspt.src = glcpath + 'livechat-new.js'; 
	var s = document.getElementsByTagName('script')[0];
	s.parentNode.insertBefore(glcspt, s); 

function detectaClicMenu(val){
	
	try {
		
		switch (val) {
		case 1:
			console.log("clic menu ciudades header");
			gtag('event', 'clic', {
			  'event_category': 'Menú ciudades',
			  'event_label': 'Desde: ' + window.location.href
			  //'value': vj_campania.toUpperCase()
			})
			break;
		case 2:
			console.log("clic menu ciudades Aguascalientes header");
			gtag('event', 'clic', {
			  'event_category': 'Menú ciudades Aguascalientes',
			  'event_label': 'Desde: ' + window.location.href
			  //'value': vj_campania.toUpperCase()
			})
			break;
		case 3:
			console.log("clic menu ciudades Guanajuato header");
			gtag('event', 'clic', {
			  'event_category': 'Menú ciudades Guanajuato',
			  'event_label': 'Desde: ' + window.location.href
			  //'value': vj_campania.toUpperCase()
			})
			break;
		case 4:
			console.log("clic menu ciudades Irapuato header");
			gtag('event', 'clic', {
			  'event_category': 'Menú ciudades Irapuato',
			  'event_label': 'Desde: ' + window.location.href
			  //'value': vj_campania.toUpperCase()
			})
			break;
		case 42:
			console.log("clic menu ciudades Salamanca header");
			gtag('event', 'clic', {
			  'event_category': 'Menú ciudades Salamanca',
			  'event_label': 'Desde: ' + window.location.href
			  //'value': vj_campania.toUpperCase()
			})
			break;
		case 5:
			console.log("clic menu ciudades Queretaro header");
			gtag('event', 'clic', {
			  'event_category': 'Menú ciudades Queretaro',
			  'event_label': 'Desde: ' + window.location.href
			  //'value': vj_campania.toUpperCase()
			})
			break;
		case 6:
			console.log("clic menu ciudades San Luis Potosí header");
			gtag('event', 'clic', {
			  'event_category': 'Menú ciudades San Luis Potosí',
			  'event_label': 'Desde: ' + window.location.href
			  //'value': vj_campania.toUpperCase()
			})
			break;
		case 7:
			console.log("clic menu Cómo comprar casa header");
			gtag('event', 'clic', {
			  'event_category': 'Menú Cómo comprar casa',
			  'event_label': 'Desde: ' + window.location.href
			  //'value': vj_campania.toUpperCase()
			})
			break;
		case 8:
			console.log("clic menu Créditos header");
			gtag('event', 'clic', {
			  'event_category': 'Menú Créditos',
			  'event_label': 'Desde: ' + window.location.href
			  //'value': vj_campania.toUpperCase()
			})
			break;
		case 9:
			console.log("clic menu Cómo comprar casa en México desde Estados Unidos header");
			gtag('event', 'clic', {
			  'event_category': 'Menú Cómo comprar casa en México desde Estados Unidos',
			  'event_label': 'Desde: ' + window.location.href
			  //'value': vj_campania.toUpperCase()
			})
			break;
		case 10:
			console.log("clic menu Preguntas frecuentes header");
			gtag('event', 'clic', {
			  'event_category': 'Menú Preguntas frecuentes',
			  'event_label': 'Desde: ' + window.location.href
			  //'value': vj_campania.toUpperCase()
			})
			break;
		case 11:
			console.log("clic menu Contacto header");
			gtag('event', 'clic', {
			  'event_category': 'Menú Contacto',
			  'event_label': 'Desde: ' + window.location.href
			  //'value': vj_campania.toUpperCase()
			})
			break;
		case 12:
			console.log("clic menu Contactar a un asesor header");
			gtag('event', 'clic', {
			  'event_category': 'Menú Contactar a un asesor',
			  'event_label': 'Desde: ' + window.location.href
			  //'value': vj_campania.toUpperCase()
			})
			break;
		case 13:
			console.log("clic menu Precalificación gratis header");
			gtag('event', 'clic', {
			  'event_category': 'Menú Precalificación gratis',
			  'event_label': 'Desde: ' + window.location.href
			  //'value': vj_campania.toUpperCase()
			})
			break;
		}
	}
	catch(err) {
		console.log("no se ejecutó evento analytics clic menu header, msj: " + err.message);
	}
	
}

function clicTraduceIngles(){
	console.log("clic traduce inglés");
	gtag('event', 'clic', {
	  'event_category': 'Botón traduce inglés',
	  'event_label': 'Desde: ' + window.location.href
	  //'value': vj_campania.toUpperCase()
	})
}

function visitaFacebook(){
	console.log("clic facebook");
	gtag('event', 'clic', {
	  'event_category': 'Botón Facebook',
	  'event_label': 'Desde: ' + window.location.href
	  //'value': vj_campania.toUpperCase()
	})
}

function visitaYoutube(){
	console.log("clic youtube");
	gtag('event', 'clic', {
	  'event_category': 'Botón Youtube',
	  'event_label': 'Desde: ' + window.location.href
	  //'value': vj_campania.toUpperCase()
	})
}

function verMisionVision(){
	console.log("clic ver misión y visión");
	gtag('event', 'clic', {
	  'event_category': 'Botón ver misión y visión',
	  'event_label': 'Desde: ' + window.location.href
	  //'value': vj_campania.toUpperCase()
	})
}

var parametro = 0;
var srcChat = "";
var srcBackground = "";
var srcBackgroundMaxMin = "";
var estiloCuadroMin = "";
detectaUrlChat();
function detectaUrlChat(){
	
	srcChat = '';//https://cumbresdelmarques.com.mx/img/prueba-chat.png
	srcBackground = 'background-color: #01545A !important';
	srcBackgroundMaxMin = 'background-color: #000 !important';
	estiloCuadroMin = 'background-color: #000000 !important; border: 1px solid #000000!important;';
	detectaChat();
	
}

function detectaChat(){
		if($('#clickdesk_container').length > 0){
			console.log("ok");
			//console.log($('.click-desk-visitor img').val());
			$('.click-desk-visitor img').attr('src',srcChat,'important');
			$('.click-desk-visitor img:after').attr('src',srcChat,'important');
			$('.click-desk-closed-header').attr('style', srcBackground); 
			$('.click-desk-closed a').attr('style', srcBackgroundMaxMin);
			$('#cd_agent_image').attr('src',srcChat,'important');
			$('#cd_agent_image:after').attr('src',srcChat,'important');
			$('#clickdesk_header').attr('style', srcBackground); 
			$('.cdw-chat-header').attr('style', srcBackground); 
			$('#cd_prechat_button').attr('style', srcBackground); 
			$('.cd-chat-inner-top').attr('style', srcBackground);
			$('.cdw-chat-bar-buttons span').attr({
				style: estiloCuadroMin
			});
			$('#clickdesk_min').click(function() {
			  $('.click-desk-visitor img').attr('src',srcChat,'important');
			});
			$('.click-desk-closed a').click(function() {
			  $('.click-desk-visitor img').attr('src',srcChat,'important');
			});
			$('.click-desk-closed a').click(function() {
				$('#cd_agent_image').attr('src',srcChat);
				$('#clickdesk_header').attr('style', srcBackground); 
				$('.cdw-chat-header').attr('style', srcBackground); 
				$('#cd_prechat_button').attr('style', srcBackground);
				$('.cd-chat-inner-top').attr('style', srcBackground);
				$('.cdw-chat-bar-buttons span').attr({
					style: estiloCuadroMin
				});
			});
			$('.click-desk-visitor img').click(function() {
				$('#cd_agent_image').attr('src',srcChat);
				$('#clickdesk_header').attr('style', srcBackground); 
				$('.cdw-chat-header').attr('style', srcBackground); 
				$('#cd_prechat_button').attr('style', srcBackground); 

				$('.cdw-chat-bar-buttons span').attr({
					style: estiloCuadroMin
				});
			});
			$('.click-desk-closed-header').click(function() {
				setTimeout(function(){ 
					$('#cd_agent_image').attr('src',srcChat); 
				}, 500);
			});
			$('.click-desk-bar-text').click(function() {
				setTimeout(function(){ 
					$('#cd_agent_image').attr('src',srcChat);
					console.log("prueba");  
					console.log("variable ok");
				}, 500);
			});
			$('#cd_agent_image').attr('src',srcChat).change(function() {
				setTimeout(function(){ 
					$('#cd_agent_image').attr('src',srcChat);
					console.log("proactivo");  
				}, 500);
			});
			
			if (url.indexOf("residencialloslagos.com.mx/terrenos/") >= 0) {
				$('.click-desk-bar-text').text("Chat en vivo");
			}
	
		}
		else{
			setTimeout(function(){ 
				detectaChat();
			}, 100);
		}

}

	
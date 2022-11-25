/* Before and After image script By Dynamic Drive
* Created: Oct 15th', 2014 by DynamicDrive.com. This notice must stay intact for usage 
* Author: Dynamic Drive at http://www.dynamicdrive.com/
* Visit http://www.dynamicdrive.com/ for full source code
*/

var ddbeforeandafter_b = (function($){

	var gallerydefaults_b = {
		dragUI: '<div class="drag"><div class="draghandle"></div></div>',
		revealduration: 0.4,
		initialreveal: ['50%', 1],
		initialrevealeasing: 'cubic-bezier(0.390, 0.575, 0.510, 1.650)',
		hidedragbardelay: 1
	}

	var detecttouch_b = (('ontouchstart' in window) || (navigator.msMaxTouchPoints > 0))

	function ddbeforeandafter_b(options){
      		var s_b = $.extend({}, gallerydefaults_b, options)
		s_b._imagesloaded = false
		s_b._draghidetimer = null
		var thisobj = this
      		var $container = $('#'+s_b.wrapperid)
      		var $before = $container.find('div.beforeb:eq(0)')
		var $after = $container.find('div.afterb:eq(0)')
		$container.append(s_b.dragUI)
      		var $dragbar = $container.find('div.drag-b')
		var $draghandle = $dragbar.find('div.draghandle_b')
      		var dimensions = {containerw: $container.width(), dragbarw: $dragbar.width(), draghandlew: $draghandle.outerWidth()}
		s_b.defaultTimingFunction = $dragbar.css('transitionTimingFunction')
		var isdirectclick = false
		var mousemoveevtstr_b = 'mousemove.dragstart' + s_b.wrapperid + ' touchmove.dragstart' + s_b.wrapperid

		this.s = s_b
		this.$container = $container
		this.$before = $before
		this.$after = $after
		this.$dragbar = $dragbar
		this.$draghandle = $draghandle
		this.dimensions = dimensions

		this._init()

		$container.on('mousedown touchstart', function(e){
			isdirectclick = true
      			if (e.target.tagName != 'A')
      				e.preventDefault()
		})
	      	$container.on(detecttouch_b? 'touchstart' : 'click', function(e){
			if (s_b._imagesloaded && (isdirectclick || detecttouch_b)){
				var e = (e.type.indexOf('touch') != '-1')? e.originalEvent.changedTouches[0] : e
		      		var newx = e.pageX - $container.offset().left
		      		$dragbar.add($before).css({transitionTimingFunction: s_b.defaultTimingFunction, transitionDuration: s_b.revealduration+'s'})
		      		$dragbar.css({left: newx})
		      		$before.css({width: newx})
				if (e.target.tagName != 'A')
					e.preventDefault()
			}
			isdirectclick = false
	      	})
		$container.hover(
			function(){
				clearTimeout(s_b._draghidetimer)
				$dragbar.stop().animate({opacity:1})
			},
			function(){
				s_b._draghidetimer = setTimeout(function(){$dragbar.stop().animate({opacity:0.3})}, s_b.hidedragbardelay*1000)
			}
		)
	      	$dragbar.bind('click', function(e){
	      		e.stopPropagation()
	      	})
	      	$dragbar.bind('mousedown touchstart', function(e){
			if (!s_b._imagesloaded)
				return
	      		var e = (e.type.indexOf('touch') != -1)? e.originalEvent.changedTouches[0] : e
			dimensions = thisobj.dimensions // refresh dimensions var
	      		var initialx = parseInt($dragbar.css('left'))
			var containerleft = $container.offset().left
	      		$dragbar.add($before).css({transitionDuration: '0s'})
	      		$(document).bind(mousemoveevtstr_b, function(e){
	      			var e = (e.type.indexOf('touch') != '-1')? e.originalEvent.changedTouches[0] : e
	      			var dx=e.pageX-containerleft-initialx //distance to move horizontally
	      			var newx=(dx<0)? Math.max(0, initialx+dx) : Math.min(dimensions.containerw-dimensions.dragbarw, initialx+dx) //Set horizonal bonds. dx>0 indicates drag right versus 
	      			$dragbar.css({left: newx})
	      			$before.css({width: newx})
	      			return false //cancel default drag action
	      		})
	      		return false //cancel default drag action
	      	})
	      	$(document).bind('mouseup touchend', function(e){
	      		var e = (e.type.indexOf('touch') != -1)? e.originalEvent.changedTouches[0] : e
	      		$(document).unbind(mousemoveevtstr_b)
	      	})

	      	$(window).bind('resize', function(e){
			dimensions.containerw = $container.width()
			thisobj._centerelement($dragbar, $draghandle)
			$before.find('img:eq(0)').css({width: dimensions.containerw, height: 'auto'})
			$after.find('img:eq(0)').css({width: dimensions.containerw, height: 'auto'})
			thisobj.unveil(s_b.initialreveal[0], s_b.initialreveal[1], s_b.initialrevealeasing)
	      	})

	} // end main function

	ddbeforeandafter_b.prototype = {

		_centerelement: function($parent, $target, offsetx, offsety){
      			var dimensions = {parentw: $parent.width(), parenth: $parent.height(), targetw: $target.outerWidth(), targeth: $target.outerHeight()}
			$target.css({left: dimensions.parentw/2 - dimensions.targetw/2 + (offsetx || 0), top: dimensions.parenth/2 - dimensions.targeth/2 + (offsety || 0)})
		},

		_init: function(initoptions){
			var thisobj = this,
				s_b = this.s,
				$container = this.$container,
				$before = this.$before,
				$after = this.$after,
				$dragbar = this.$dragbar,
				$draghandle = this.$draghandle
			s_b._imagesloaded = false
			if (initoptions && initoptions
				.before1afterhtml){
				$before.html(initoptions.before1afterhtml[0])
				$after.html(initoptions.before1afterhtml[1])
			}
			if (initoptions && initoptions.dimensions){
				$container.css({width: initoptions.dimensions[0], height: initoptions.dimensions[1]})
				this.dimensions = {containerw: $container.width(), dragbarw: $dragbar.width(), draghandlew: $draghandle.outerWidth()}
			}
			this._centerelement($dragbar, $draghandle)
			this.unveil(0, 0)
			clearTimeout(s_b._draghidetimer)
			$dragbar.css({opacity:0.3})
			var $beforeimage = this.$before.css({opacity:0.5}).find('img:eq(0)').css({width: this.dimensions.containerw, height: 'auto'})
			var $afterimage = this.$after.css({opacity:0}).find('img:eq(0)').css({width: this.dimensions.containerw, height: 'auto'})
			var imagesloadeddfd = [$.Deferred(), $.Deferred()]
			if ($beforeimage.prop('complete') === true)
				imagesloadeddfd[0].resolve()
			if ($afterimage.prop('complete') === true)
				imagesloadeddfd[1].resolve()
			$beforeimage.on('load error', function(){imagesloadeddfd[0].resolve()})
			$afterimage.on('load error', function(){imagesloadeddfd[1].resolve()})
			$.when(imagesloadeddfd[0], imagesloadeddfd[1]).done(function(){
				s_b._imagesloaded = true
      				$after.css({opacity:1})
      				$before.animate({opacity:1}, function(){
      					$dragbar.animate({opacity:1}, function(){
      						thisobj.unveil(s_b.initialreveal[0], s_b.initialreveal[1], s_b.initialrevealeasing)
      					})
      				})
			})
			
		},

		reload: function(beforeafterhtml, dimensions){
			var options = {beforeafterhtml: beforeafterhtml, dimensions: dimensions}
			this._init(options)
		},
		
		unveil: function(amt, dur, timingfunc){
			var s_b = this.s,
				$container = this.$container,
				$before = this.$before,
				$dragbar = this.$dragbar,
				dimensions = this.dimensions,
				amt = parseInt(amt)
			amt = (amt < 0)? 0 : (amt > 100)? 100 : amt
			var dur = ((typeof dur != 'undefined')? dur : s_b.revealduration) + 's'
			var timingfunction = timingfunc || s_b.defaultTimingFunction
			amt = 100 - amt
			var newx = (dimensions.containerw - dimensions.dragbarw) * amt/100
			$dragbar.add($before).css({transitionTimingFunction: timingfunction, transitionDuration: dur})
	      		$dragbar.css({left: newx})
	      		$before.css({width: newx})

		}

	}

	return ddbeforeandafter_b;
}) (jQuery)

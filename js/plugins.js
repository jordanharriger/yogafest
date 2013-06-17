window.log=function(){log.history=log.history||[];log.history.push(arguments);if(this.console){arguments.callee=arguments.callee.caller;var a=[].slice.call(arguments);(typeof console.log==="object"?log.apply.call(console.log,console,a):console.log.apply(console,a))}};
(function(b){function c(){}for(var d="assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,timeStamp,profile,profileEnd,time,timeEnd,trace,warn".split(","),a;a=d.pop();){b[a]=b[a]||c}})((function(){try
{console.log();return window.console;}catch(err){return window.console={};}})());

/*! http://mths.be/placeholder v2.0.7 by @mathias */
;(function(f,h,$){var a='placeholder' in h.createElement('input'),d='placeholder' in h.createElement('textarea'),i=$.fn,c=$.valHooks,k,j;if(a&&d){j=i.placeholder=function(){return this};j.input=j.textarea=true}else{j=i.placeholder=function(){var l=this;l.filter((a?'textarea':':input')+'[placeholder]').not('.placeholder').bind({'focus.placeholder':b,'blur.placeholder':e}).data('placeholder-enabled',true).trigger('blur.placeholder');return l};j.input=a;j.textarea=d;k={get:function(m){var l=$(m);return l.data('placeholder-enabled')&&l.hasClass('placeholder')?'':m.value},set:function(m,n){var l=$(m);if(!l.data('placeholder-enabled')){return m.value=n}if(n==''){m.value=n;if(m!=h.activeElement){e.call(m)}}else{if(l.hasClass('placeholder')){b.call(m,true,n)||(m.value=n)}else{m.value=n}}return l}};a||(c.input=k);d||(c.textarea=k);$(function(){$(h).delegate('form','submit.placeholder',function(){var l=$('.placeholder',this).each(b);setTimeout(function(){l.each(e)},10)})});$(f).bind('beforeunload.placeholder',function(){$('.placeholder').each(function(){this.value=''})})}function g(m){var l={},n=/^jQuery\d+$/;$.each(m.attributes,function(p,o){if(o.specified&&!n.test(o.name)){l[o.name]=o.value}});return l}function b(m,n){var l=this,o=$(l);if(l.value==o.attr('placeholder')&&o.hasClass('placeholder')){if(o.data('placeholder-password')){o=o.hide().next().show().attr('id',o.removeAttr('id').data('placeholder-id'));if(m===true){return o[0].value=n}o.focus()}else{l.value='';o.removeClass('placeholder');l==h.activeElement&&l.select()}}}function e(){var q,l=this,p=$(l),m=p,o=this.id;if(l.value==''){if(l.type=='password'){if(!p.data('placeholder-textinput')){try{q=p.clone().attr({type:'text'})}catch(n){q=$('<input>').attr($.extend(g(this),{type:'text'}))}q.removeAttr('name').data({'placeholder-password':true,'placeholder-id':o}).bind('focus.placeholder',b);p.data({'placeholder-textinput':q,'placeholder-id':o}).before(q)}p=p.removeAttr('id').hide().prev().attr('id',o).show()}p.addClass('placeholder');p[0].value=p.attr('placeholder')}else{p.removeClass('placeholder')}}}(this,document,jQuery));

// place any jQuery/helper plugins in here, instead of separate, slower script files.
/*!
 * Vallenato 1.0
 * A Simple JQuery Accordion
 *
 * Designed by Switchroyale
 * 
 * Use Vallenato for whatever you want, enjoy!
 */

$(document).ready(function()
{
	//Add Inactive Class To All Accordion Headers
	$('.accordion-header').toggleClass('inactive-header');
	
	//Set The Accordion Content Width
	var contentwidth = $('.accordion-header').width();
	$('.accordion-content').css({'width' : contentwidth });
	
	//Open The First Accordion Section When Page Loads
	$('.accordion-header').first().toggleClass('active-header').toggleClass('inactive-header');
	$('.accordion-content').first().slideDown().toggleClass('open-content');
	
	// The Accordion Effect
	$('.accordion-header').click(function () {
		if($(this).is('.inactive-header')) {
			$('.active-header').toggleClass('active-header').toggleClass('inactive-header').next().slideToggle().toggleClass('open-content');
			$(this).toggleClass('active-header').toggleClass('inactive-header');
			$(this).next().slideToggle().toggleClass('open-content');
		}
		
		else {
			$(this).toggleClass('active-header').toggleClass('inactive-header');
			$(this).next().slideToggle().toggleClass('open-content');
		}
	});
	
	return false;
});

/*!
	jQuery Colorbox v1.4.15 - 2013-04-22
	(c) 2013 Jack Moore - jacklmoore.com/colorbox
	license: http://www.opensource.org/licenses/mit-license.php
*/
(function(t,e,i){function o(i,o,n){var r=e.createElement(i);return o&&(r.id=te+o),n&&(r.style.cssText=n),t(r)}function n(){return i.innerHeight?i.innerHeight:t(i).height()}function r(t){var e=H.length,i=(j+t)%e;return 0>i?e+i:i}function h(t,e){return Math.round((/%/.test(t)?("x"===e?E.width():n())/100:1)*parseInt(t,10))}function l(t,e){return t.photo||t.photoRegex.test(e)}function s(t,e){return t.retinaUrl&&i.devicePixelRatio>1?e.replace(t.photoRegex,t.retinaSuffix):e}function a(t){"contains"in x[0]&&!x[0].contains(t.target)&&(t.stopPropagation(),x.focus())}function d(){var e,i=t.data(A,Z);null==i?(_=t.extend({},Y),console&&console.log&&console.log("Error: cboxElement missing settings object")):_=t.extend({},i);for(e in _)t.isFunction(_[e])&&"on"!==e.slice(0,2)&&(_[e]=_[e].call(A));_.rel=_.rel||A.rel||t(A).data("rel")||"nofollow",_.href=_.href||t(A).attr("href"),_.title=_.title||A.title,"string"==typeof _.href&&(_.href=t.trim(_.href))}function c(i,o){t(e).trigger(i),se.trigger(i),t.isFunction(o)&&o.call(A)}function u(){var t,e,i,o,n,r=te+"Slideshow_",h="click."+te;_.slideshow&&H[1]?(e=function(){clearTimeout(t)},i=function(){(_.loop||H[j+1])&&(t=setTimeout(J.next,_.slideshowSpeed))},o=function(){M.html(_.slideshowStop).unbind(h).one(h,n),se.bind(ne,i).bind(oe,e).bind(re,n),x.removeClass(r+"off").addClass(r+"on")},n=function(){e(),se.unbind(ne,i).unbind(oe,e).unbind(re,n),M.html(_.slideshowStart).unbind(h).one(h,function(){J.next(),o()}),x.removeClass(r+"on").addClass(r+"off")},_.slideshowAuto?o():n()):x.removeClass(r+"off "+r+"on")}function f(i){G||(A=i,d(),H=t(A),j=0,"nofollow"!==_.rel&&(H=t("."+ee).filter(function(){var e,i=t.data(this,Z);return i&&(e=t(this).data("rel")||i.rel||this.rel),e===_.rel}),j=H.index(A),-1===j&&(H=H.add(A),j=H.length-1)),g.css({opacity:parseFloat(_.opacity),cursor:_.overlayClose?"pointer":"auto",visibility:"visible"}).show(),V&&x.add(g).removeClass(V),_.className&&x.add(g).addClass(_.className),V=_.className,K.html(_.close).show(),$||($=q=!0,x.css({visibility:"hidden",display:"block"}),W=o(ae,"LoadedContent","width:0; height:0; overflow:hidden").appendTo(v),D=b.height()+k.height()+v.outerHeight(!0)-v.height(),B=C.width()+T.width()+v.outerWidth(!0)-v.width(),N=W.outerHeight(!0),z=W.outerWidth(!0),_.w=h(_.initialWidth,"x"),_.h=h(_.initialHeight,"y"),J.position(),u(),c(ie,_.onOpen),O.add(F).hide(),x.focus(),e.addEventListener&&(e.addEventListener("focus",a,!0),se.one(he,function(){e.removeEventListener("focus",a,!0)})),_.returnFocus&&se.one(he,function(){t(A).focus()})),w())}function p(){!x&&e.body&&(X=!1,E=t(i),x=o(ae).attr({id:Z,"class":t.support.opacity===!1?te+"IE":"",role:"dialog",tabindex:"-1"}).hide(),g=o(ae,"Overlay").hide(),S=o(ae,"LoadingOverlay").add(o(ae,"LoadingGraphic")),y=o(ae,"Wrapper"),v=o(ae,"Content").append(F=o(ae,"Title"),I=o(ae,"Current"),P=t('<button type="button"/>').attr({id:te+"Previous"}),R=t('<button type="button"/>').attr({id:te+"Next"}),M=o("button","Slideshow"),S,K=t('<button type="button"/>').attr({id:te+"Close"})),y.append(o(ae).append(o(ae,"TopLeft"),b=o(ae,"TopCenter"),o(ae,"TopRight")),o(ae,!1,"clear:left").append(C=o(ae,"MiddleLeft"),v,T=o(ae,"MiddleRight")),o(ae,!1,"clear:left").append(o(ae,"BottomLeft"),k=o(ae,"BottomCenter"),o(ae,"BottomRight"))).find("div div").css({"float":"left"}),L=o(ae,!1,"position:absolute; width:9999px; visibility:hidden; display:none"),O=R.add(P).add(I).add(M),t(e.body).append(g,x.append(y,L)))}function m(){function i(t){t.which>1||t.shiftKey||t.altKey||t.metaKey||t.control||(t.preventDefault(),f(this))}return x?(X||(X=!0,R.click(function(){J.next()}),P.click(function(){J.prev()}),K.click(function(){J.close()}),g.click(function(){_.overlayClose&&J.close()}),t(e).bind("keydown."+te,function(t){var e=t.keyCode;$&&_.escKey&&27===e&&(t.preventDefault(),J.close()),$&&_.arrowKey&&H[1]&&!t.altKey&&(37===e?(t.preventDefault(),P.click()):39===e&&(t.preventDefault(),R.click()))}),t.isFunction(t.fn.on)?t(e).on("click."+te,"."+ee,i):t("."+ee).live("click."+te,i)),!0):!1}function w(){var e,n,r,a=J.prep,u=++de;q=!0,U=!1,A=H[j],d(),c(le),c(oe,_.onLoad),_.h=_.height?h(_.height,"y")-N-D:_.innerHeight&&h(_.innerHeight,"y"),_.w=_.width?h(_.width,"x")-z-B:_.innerWidth&&h(_.innerWidth,"x"),_.mw=_.w,_.mh=_.h,_.maxWidth&&(_.mw=h(_.maxWidth,"x")-z-B,_.mw=_.w&&_.w<_.mw?_.w:_.mw),_.maxHeight&&(_.mh=h(_.maxHeight,"y")-N-D,_.mh=_.h&&_.h<_.mh?_.h:_.mh),e=_.href,Q=setTimeout(function(){S.show()},100),_.inline?(r=o(ae).hide().insertBefore(t(e)[0]),se.one(le,function(){r.replaceWith(W.children())}),a(t(e))):_.iframe?a(" "):_.html?a(_.html):l(_,e)?(e=s(_,e),t(U=new Image).addClass(te+"Photo").bind("error",function(){_.title=!1,a(o(ae,"Error").html(_.imgError))}).one("load",function(){var e;u===de&&(U.alt=t(A).attr("alt")||t(A).attr("data-alt")||"",_.retinaImage&&i.devicePixelRatio>1&&(U.height=U.height/i.devicePixelRatio,U.width=U.width/i.devicePixelRatio),_.scalePhotos&&(n=function(){U.height-=U.height*e,U.width-=U.width*e},_.mw&&U.width>_.mw&&(e=(U.width-_.mw)/U.width,n()),_.mh&&U.height>_.mh&&(e=(U.height-_.mh)/U.height,n())),_.h&&(U.style.marginTop=Math.max(_.mh-U.height,0)/2+"px"),H[1]&&(_.loop||H[j+1])&&(U.style.cursor="pointer",U.onclick=function(){J.next()}),U.style.width=U.width+"px",U.style.height=U.height+"px",setTimeout(function(){a(U)},1))}),setTimeout(function(){U.src=e},1)):e&&L.load(e,_.data,function(e,i){u===de&&a("error"===i?o(ae,"Error").html(_.xhrError):t(this).contents())})}var g,x,y,v,b,C,T,k,H,E,W,L,S,F,I,M,R,P,K,O,_,D,B,N,z,A,j,U,$,q,G,Q,J,V,X,Y={transition:"elastic",speed:300,fadeOut:300,width:!1,initialWidth:"600",innerWidth:!1,maxWidth:!1,height:!1,initialHeight:"450",innerHeight:!1,maxHeight:!1,scalePhotos:!0,scrolling:!0,inline:!1,html:!1,iframe:!1,fastIframe:!0,photo:!1,href:!1,title:!1,rel:!1,opacity:.9,preloading:!0,className:!1,retinaImage:!1,retinaUrl:!1,retinaSuffix:"@2x.$1",current:"image {current} of {total}",previous:"previous",next:"next",close:"close",xhrError:"This content failed to load.",imgError:"This image failed to load.",open:!1,returnFocus:!0,reposition:!0,loop:!0,slideshow:!1,slideshowAuto:!0,slideshowSpeed:2500,slideshowStart:"start slideshow",slideshowStop:"stop slideshow",photoRegex:/\.(gif|png|jp(e|g|eg)|bmp|ico|webp)((#|\?).*)?$/i,onOpen:!1,onLoad:!1,onComplete:!1,onCleanup:!1,onClosed:!1,overlayClose:!0,escKey:!0,arrowKey:!0,top:!1,bottom:!1,left:!1,right:!1,fixed:!1,data:void 0},Z="colorbox",te="cbox",ee=te+"Element",ie=te+"_open",oe=te+"_load",ne=te+"_complete",re=te+"_cleanup",he=te+"_closed",le=te+"_purge",se=t("<a/>"),ae="div",de=0;t.colorbox||(t(p),J=t.fn[Z]=t[Z]=function(e,i){var o=this;if(e=e||{},p(),m()){if(t.isFunction(o))o=t("<a/>"),e.open=!0;else if(!o[0])return o;i&&(e.onComplete=i),o.each(function(){t.data(this,Z,t.extend({},t.data(this,Z)||Y,e))}).addClass(ee),(t.isFunction(e.open)&&e.open.call(o)||e.open)&&f(o[0])}return o},J.position=function(t,e){function i(t){b[0].style.width=k[0].style.width=v[0].style.width=parseInt(t.style.width,10)-B+"px",v[0].style.height=C[0].style.height=T[0].style.height=parseInt(t.style.height,10)-D+"px"}var o,r,l,s=0,a=0,d=x.offset();E.unbind("resize."+te),x.css({top:-9e4,left:-9e4}),r=E.scrollTop(),l=E.scrollLeft(),_.fixed?(d.top-=r,d.left-=l,x.css({position:"fixed"})):(s=r,a=l,x.css({position:"absolute"})),a+=_.right!==!1?Math.max(E.width()-_.w-z-B-h(_.right,"x"),0):_.left!==!1?h(_.left,"x"):Math.round(Math.max(E.width()-_.w-z-B,0)/2),s+=_.bottom!==!1?Math.max(n()-_.h-N-D-h(_.bottom,"y"),0):_.top!==!1?h(_.top,"y"):Math.round(Math.max(n()-_.h-N-D,0)/2),x.css({top:d.top,left:d.left,visibility:"visible"}),t=x.width()===_.w+z&&x.height()===_.h+N?0:t||0,y[0].style.width=y[0].style.height="9999px",o={width:_.w+z+B,height:_.h+N+D,top:s,left:a},0===t&&x.css(o),x.dequeue().animate(o,{duration:t,complete:function(){i(this),q=!1,y[0].style.width=_.w+z+B+"px",y[0].style.height=_.h+N+D+"px",_.reposition&&setTimeout(function(){E.bind("resize."+te,J.position)},1),e&&e()},step:function(){i(this)}})},J.resize=function(t){$&&(t=t||{},t.width&&(_.w=h(t.width,"x")-z-B),t.innerWidth&&(_.w=h(t.innerWidth,"x")),W.css({width:_.w}),t.height&&(_.h=h(t.height,"y")-N-D),t.innerHeight&&(_.h=h(t.innerHeight,"y")),t.innerHeight||t.height||(W.css({height:"auto"}),_.h=W.height()),W.css({height:_.h}),J.position("none"===_.transition?0:_.speed))},J.prep=function(e){function i(){return _.w=_.w||W.width(),_.w=_.mw&&_.mw<_.w?_.mw:_.w,_.w}function n(){return _.h=_.h||W.height(),_.h=_.mh&&_.mh<_.h?_.mh:_.h,_.h}if($){var h,a="none"===_.transition?0:_.speed;W.empty().remove(),W=o(ae,"LoadedContent").append(e),W.hide().appendTo(L.show()).css({width:i(),overflow:_.scrolling?"auto":"hidden"}).css({height:n()}).prependTo(v),L.hide(),t(U).css({"float":"none"}),h=function(){function e(){t.support.opacity===!1&&x[0].style.removeAttribute("filter")}var i,n,h=H.length,d="frameBorder",u="allowTransparency";$&&(n=function(){clearTimeout(Q),S.hide(),c(ne,_.onComplete)},F.html(_.title).add(W).show(),h>1?("string"==typeof _.current&&I.html(_.current.replace("{current}",j+1).replace("{total}",h)).show(),R[_.loop||h-1>j?"show":"hide"]().html(_.next),P[_.loop||j?"show":"hide"]().html(_.previous),_.slideshow&&M.show(),_.preloading&&t.each([r(-1),r(1)],function(){var e,i,o=H[this],n=t.data(o,Z);n&&n.href?(e=n.href,t.isFunction(e)&&(e=e.call(o))):e=t(o).attr("href"),e&&l(n,e)&&(e=s(n,e),i=new Image,i.src=e)})):O.hide(),_.iframe?(i=o("iframe")[0],d in i&&(i[d]=0),u in i&&(i[u]="true"),_.scrolling||(i.scrolling="no"),t(i).attr({src:_.href,name:(new Date).getTime(),"class":te+"Iframe",allowFullScreen:!0,webkitAllowFullScreen:!0,mozallowfullscreen:!0}).one("load",n).appendTo(W),se.one(le,function(){i.src="//about:blank"}),_.fastIframe&&t(i).trigger("load")):n(),"fade"===_.transition?x.fadeTo(a,1,e):e())},"fade"===_.transition?x.fadeTo(a,0,function(){J.position(0,h)}):J.position(a,h)}},J.next=function(){!q&&H[1]&&(_.loop||H[j+1])&&(j=r(1),f(H[j]))},J.prev=function(){!q&&H[1]&&(_.loop||j)&&(j=r(-1),f(H[j]))},J.close=function(){$&&!G&&(G=!0,$=!1,c(re,_.onCleanup),E.unbind("."+te),g.fadeTo(_.fadeOut||0,0),x.stop().fadeTo(_.fadeOut||0,0,function(){x.add(g).css({opacity:1,cursor:"auto"}).hide(),c(le),W.empty().remove(),setTimeout(function(){G=!1,c(he,_.onClosed)},1)}))},J.remove=function(){x&&(x.stop(),t.colorbox.close(),x.stop().remove(),g.remove(),G=!1,x=null,t("."+ee).removeData(Z).removeClass(ee),t(e).unbind("click."+te))},J.element=function(){return t(A)},J.settings=Y)})(jQuery,document,window);

/*! Stellar.js v0.6.2 | Copyright 2013, Mark Dalgleish | http://markdalgleish.com/projects/stellar.js | http://markdalgleish.mit-license.org */
(function(e,t,n,r){function d(t,n){this.element=t,this.options=e.extend({},s,n),this._defaults=s,this._name=i,this.init()}var i="stellar",s={scrollProperty:"scroll",positionProperty:"position",horizontalScrolling:!0,verticalScrolling:!0,horizontalOffset:0,verticalOffset:0,responsive:!1,parallaxBackgrounds:!0,parallaxElements:!0,hideDistantElements:!0,hideElement:function(e){e.hide()},showElement:function(e){e.show()}},o={scroll:{getLeft:function(e){return e.scrollLeft()},setLeft:function(e,t){e.scrollLeft(t)},getTop:function(e){return e.scrollTop()},setTop:function(e,t){e.scrollTop(t)}},position:{getLeft:function(e){return parseInt(e.css("left"),10)*-1},getTop:function(e){return parseInt(e.css("top"),10)*-1}},margin:{getLeft:function(e){return parseInt(e.css("margin-left"),10)*-1},getTop:function(e){return parseInt(e.css("margin-top"),10)*-1}},transform:{getLeft:function(e){var t=getComputedStyle(e[0])[f];return t!=="none"?parseInt(t.match(/(-?[0-9]+)/g)[4],10)*-1:0},getTop:function(e){var t=getComputedStyle(e[0])[f];return t!=="none"?parseInt(t.match(/(-?[0-9]+)/g)[5],10)*-1:0}}},u={position:{setLeft:function(e,t){e.css("left",t)},setTop:function(e,t){e.css("top",t)}},transform:{setPosition:function(e,t,n,r,i){e[0].style[f]="translate3d("+(t-n)+"px, "+(r-i)+"px, 0)"}}},a=function(){var t=/^(Moz|Webkit|Khtml|O|ms|Icab)(?=[A-Z])/,n=e("script")[0].style,r="",i;for(i in n)if(t.test(i)){r=i.match(t)[0];break}return"WebkitOpacity"in n&&(r="Webkit"),"KhtmlOpacity"in n&&(r="Khtml"),function(e){return r+(r.length>0?e.charAt(0).toUpperCase()+e.slice(1):e)}}(),f=a("transform"),l=e("<div />",{style:"background:#fff"}).css("background-position-x")!==r,c=l?function(e,t,n){e.css({"background-position-x":t,"background-position-y":n})}:function(e,t,n){e.css("background-position",t+" "+n)},h=l?function(e){return[e.css("background-position-x"),e.css("background-position-y")]}:function(e){return e.css("background-position").split(" ")},p=t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.oRequestAnimationFrame||t.msRequestAnimationFrame||function(e){setTimeout(e,1e3/60)};d.prototype={init:function(){this.options.name=i+"_"+Math.floor(Math.random()*1e9),this._defineElements(),this._defineGetters(),this._defineSetters(),this._handleWindowLoadAndResize(),this._detectViewport(),this.refresh({firstLoad:!0}),this.options.scrollProperty==="scroll"?this._handleScrollEvent():this._startAnimationLoop()},_defineElements:function(){this.element===n.body&&(this.element=t),this.$scrollElement=e(this.element),this.$element=this.element===t?e("body"):this.$scrollElement,this.$viewportElement=this.options.viewportElement!==r?e(this.options.viewportElement):this.$scrollElement[0]===t||this.options.scrollProperty==="scroll"?this.$scrollElement:this.$scrollElement.parent()},_defineGetters:function(){var e=this,t=o[e.options.scrollProperty];this._getScrollLeft=function(){return t.getLeft(e.$scrollElement)},this._getScrollTop=function(){return t.getTop(e.$scrollElement)}},_defineSetters:function(){var t=this,n=o[t.options.scrollProperty],r=u[t.options.positionProperty],i=n.setLeft,s=n.setTop;this._setScrollLeft=typeof i=="function"?function(e){i(t.$scrollElement,e)}:e.noop,this._setScrollTop=typeof s=="function"?function(e){s(t.$scrollElement,e)}:e.noop,this._setPosition=r.setPosition||function(e,n,i,s,o){t.options.horizontalScrolling&&r.setLeft(e,n,i),t.options.verticalScrolling&&r.setTop(e,s,o)}},_handleWindowLoadAndResize:function(){var n=this,r=e(t);n.options.responsive&&r.bind("load."+this.name,function(){n.refresh()}),r.bind("resize."+this.name,function(){n._detectViewport(),n.options.responsive&&n.refresh()})},refresh:function(n){var r=this,i=r._getScrollLeft(),s=r._getScrollTop();(!n||!n.firstLoad)&&this._reset(),this._setScrollLeft(0),this._setScrollTop(0),this._setOffsets(),this._findParticles(),this._findBackgrounds(),n&&n.firstLoad&&/WebKit/.test(navigator.userAgent)&&e(t).load(function(){var e=r._getScrollLeft(),t=r._getScrollTop();r._setScrollLeft(e+1),r._setScrollTop(t+1),r._setScrollLeft(e),r._setScrollTop(t)}),this._setScrollLeft(i),this._setScrollTop(s)},_detectViewport:function(){var e=this.$viewportElement.offset(),t=e!==null&&e!==r;this.viewportWidth=this.$viewportElement.width(),this.viewportHeight=this.$viewportElement.height(),this.viewportOffsetTop=t?e.top:0,this.viewportOffsetLeft=t?e.left:0},_findParticles:function(){var t=this,n=this._getScrollLeft(),i=this._getScrollTop();if(this.particles!==r)for(var s=this.particles.length-1;s>=0;s--)this.particles[s].$element.data("stellar-elementIsActive",r);this.particles=[];if(!this.options.parallaxElements)return;this.$element.find("[data-stellar-ratio]").each(function(n){var i=e(this),s,o,u,a,f,l,c,h,p,d=0,v=0,m=0,g=0;if(!i.data("stellar-elementIsActive"))i.data("stellar-elementIsActive",this);else if(i.data("stellar-elementIsActive")!==this)return;t.options.showElement(i),i.data("stellar-startingLeft")?(i.css("left",i.data("stellar-startingLeft")),i.css("top",i.data("stellar-startingTop"))):(i.data("stellar-startingLeft",i.css("left")),i.data("stellar-startingTop",i.css("top"))),u=i.position().left,a=i.position().top,f=i.css("margin-left")==="auto"?0:parseInt(i.css("margin-left"),10),l=i.css("margin-top")==="auto"?0:parseInt(i.css("margin-top"),10),h=i.offset().left-f,p=i.offset().top-l,i.parents().each(function(){var t=e(this);if(t.data("stellar-offset-parent")===!0)return d=m,v=g,c=t,!1;m+=t.position().left,g+=t.position().top}),s=i.data("stellar-horizontal-offset")!==r?i.data("stellar-horizontal-offset"):c!==r&&c.data("stellar-horizontal-offset")!==r?c.data("stellar-horizontal-offset"):t.horizontalOffset,o=i.data("stellar-vertical-offset")!==r?i.data("stellar-vertical-offset"):c!==r&&c.data("stellar-vertical-offset")!==r?c.data("stellar-vertical-offset"):t.verticalOffset,t.particles.push({$element:i,$offsetParent:c,isFixed:i.css("position")==="fixed",horizontalOffset:s,verticalOffset:o,startingPositionLeft:u,startingPositionTop:a,startingOffsetLeft:h,startingOffsetTop:p,parentOffsetLeft:d,parentOffsetTop:v,stellarRatio:i.data("stellar-ratio")!==r?i.data("stellar-ratio"):1,width:i.outerWidth(!0),height:i.outerHeight(!0),isHidden:!1})})},_findBackgrounds:function(){var t=this,n=this._getScrollLeft(),i=this._getScrollTop(),s;this.backgrounds=[];if(!this.options.parallaxBackgrounds)return;s=this.$element.find("[data-stellar-background-ratio]"),this.$element.data("stellar-background-ratio")&&(s=s.add(this.$element)),s.each(function(){var s=e(this),o=h(s),u,a,f,l,p,d,v,m,g,y=0,b=0,w=0,E=0;if(!s.data("stellar-backgroundIsActive"))s.data("stellar-backgroundIsActive",this);else if(s.data("stellar-backgroundIsActive")!==this)return;s.data("stellar-backgroundStartingLeft")?c(s,s.data("stellar-backgroundStartingLeft"),s.data("stellar-backgroundStartingTop")):(s.data("stellar-backgroundStartingLeft",o[0]),s.data("stellar-backgroundStartingTop",o[1])),p=s.css("margin-left")==="auto"?0:parseInt(s.css("margin-left"),10),d=s.css("margin-top")==="auto"?0:parseInt(s.css("margin-top"),10),v=s.offset().left-p-n,m=s.offset().top-d-i,s.parents().each(function(){var t=e(this);if(t.data("stellar-offset-parent")===!0)return y=w,b=E,g=t,!1;w+=t.position().left,E+=t.position().top}),u=s.data("stellar-horizontal-offset")!==r?s.data("stellar-horizontal-offset"):g!==r&&g.data("stellar-horizontal-offset")!==r?g.data("stellar-horizontal-offset"):t.horizontalOffset,a=s.data("stellar-vertical-offset")!==r?s.data("stellar-vertical-offset"):g!==r&&g.data("stellar-vertical-offset")!==r?g.data("stellar-vertical-offset"):t.verticalOffset,t.backgrounds.push({$element:s,$offsetParent:g,isFixed:s.css("background-attachment")==="fixed",horizontalOffset:u,verticalOffset:a,startingValueLeft:o[0],startingValueTop:o[1],startingBackgroundPositionLeft:isNaN(parseInt(o[0],10))?0:parseInt(o[0],10),startingBackgroundPositionTop:isNaN(parseInt(o[1],10))?0:parseInt(o[1],10),startingPositionLeft:s.position().left,startingPositionTop:s.position().top,startingOffsetLeft:v,startingOffsetTop:m,parentOffsetLeft:y,parentOffsetTop:b,stellarRatio:s.data("stellar-background-ratio")===r?1:s.data("stellar-background-ratio")})})},_reset:function(){var e,t,n,r,i;for(i=this.particles.length-1;i>=0;i--)e=this.particles[i],t=e.$element.data("stellar-startingLeft"),n=e.$element.data("stellar-startingTop"),this._setPosition(e.$element,t,t,n,n),this.options.showElement(e.$element),e.$element.data("stellar-startingLeft",null).data("stellar-elementIsActive",null).data("stellar-backgroundIsActive",null);for(i=this.backgrounds.length-1;i>=0;i--)r=this.backgrounds[i],r.$element.data("stellar-backgroundStartingLeft",null).data("stellar-backgroundStartingTop",null),c(r.$element,r.startingValueLeft,r.startingValueTop)},destroy:function(){this._reset(),this.$scrollElement.unbind("resize."+this.name).unbind("scroll."+this.name),this._animationLoop=e.noop,e(t).unbind("load."+this.name).unbind("resize."+this.name)},_setOffsets:function(){var n=this,r=e(t);r.unbind("resize.horizontal-"+this.name).unbind("resize.vertical-"+this.name),typeof this.options.horizontalOffset=="function"?(this.horizontalOffset=this.options.horizontalOffset(),r.bind("resize.horizontal-"+this.name,function(){n.horizontalOffset=n.options.horizontalOffset()})):this.horizontalOffset=this.options.horizontalOffset,typeof this.options.verticalOffset=="function"?(this.verticalOffset=this.options.verticalOffset(),r.bind("resize.vertical-"+this.name,function(){n.verticalOffset=n.options.verticalOffset()})):this.verticalOffset=this.options.verticalOffset},_repositionElements:function(){var e=this._getScrollLeft(),t=this._getScrollTop(),n,r,i,s,o,u,a,f=!0,l=!0,h,p,d,v,m;if(this.currentScrollLeft===e&&this.currentScrollTop===t&&this.currentWidth===this.viewportWidth&&this.currentHeight===this.viewportHeight)return;this.currentScrollLeft=e,this.currentScrollTop=t,this.currentWidth=this.viewportWidth,this.currentHeight=this.viewportHeight;for(m=this.particles.length-1;m>=0;m--)i=this.particles[m],s=i.isFixed?1:0,this.options.horizontalScrolling?(h=(e+i.horizontalOffset+this.viewportOffsetLeft+i.startingPositionLeft-i.startingOffsetLeft+i.parentOffsetLeft)*-(i.stellarRatio+s-1)+i.startingPositionLeft,d=h-i.startingPositionLeft+i.startingOffsetLeft):(h=i.startingPositionLeft,d=i.startingOffsetLeft),this.options.verticalScrolling?(p=(t+i.verticalOffset+this.viewportOffsetTop+i.startingPositionTop-i.startingOffsetTop+i.parentOffsetTop)*-(i.stellarRatio+s-1)+i.startingPositionTop,v=p-i.startingPositionTop+i.startingOffsetTop):(p=i.startingPositionTop,v=i.startingOffsetTop),this.options.hideDistantElements&&(l=!this.options.horizontalScrolling||d+i.width>(i.isFixed?0:e)&&d<(i.isFixed?0:e)+this.viewportWidth+this.viewportOffsetLeft,f=!this.options.verticalScrolling||v+i.height>(i.isFixed?0:t)&&v<(i.isFixed?0:t)+this.viewportHeight+this.viewportOffsetTop),l&&f?(i.isHidden&&(this.options.showElement(i.$element),i.isHidden=!1),this._setPosition(i.$element,h,i.startingPositionLeft,p,i.startingPositionTop)):i.isHidden||(this.options.hideElement(i.$element),i.isHidden=!0);for(m=this.backgrounds.length-1;m>=0;m--)o=this.backgrounds[m],s=o.isFixed?0:1,u=this.options.horizontalScrolling?(e+o.horizontalOffset-this.viewportOffsetLeft-o.startingOffsetLeft+o.parentOffsetLeft-o.startingBackgroundPositionLeft)*(s-o.stellarRatio)+"px":o.startingValueLeft,a=this.options.verticalScrolling?(t+o.verticalOffset-this.viewportOffsetTop-o.startingOffsetTop+o.parentOffsetTop-o.startingBackgroundPositionTop)*(s-o.stellarRatio)+"px":o.startingValueTop,c(o.$element,u,a)},_handleScrollEvent:function(){var e=this,t=!1,n=function(){e._repositionElements(),t=!1},r=function(){t||(p(n),t=!0)};this.$scrollElement.bind("scroll."+this.name,r),r()},_startAnimationLoop:function(){var e=this;this._animationLoop=function(){p(e._animationLoop),e._repositionElements()},this._animationLoop()}},e.fn[i]=function(t){var n=arguments;if(t===r||typeof t=="object")return this.each(function(){e.data(this,"plugin_"+i)||e.data(this,"plugin_"+i,new d(this,t))});if(typeof t=="string"&&t[0]!=="_"&&t!=="init")return this.each(function(){var r=e.data(this,"plugin_"+i);r instanceof d&&typeof r[t]=="function"&&r[t].apply(r,Array.prototype.slice.call(n,1)),t==="destroy"&&e.data(this,"plugin_"+i,null)})},e[i]=function(n){var r=e(t);return r.stellar.apply(r,Array.prototype.slice.call(arguments,0))},e[i].scrollProperty=o,e[i].positionProperty=u,t.Stellar=d})(jQuery,this,document);

/*
 * jQuery spritely 0.6.4
 * http://spritely.net/
 *
 * Documentation:
 * http://spritely.net/documentation/
 *
 * Copyright 2010-2011, Peter Chater, Artlogic Media Ltd, http://www.artlogic.net/
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 */

(function($) {
    $._spritely = {
        // shared methods and variables used by spritely plugin
        animate: function(options) {
            var el = $(options.el);
            var el_id = el.attr('id');
            if (!$._spritely.instances[el_id]) {
                return this;
            }
            options = $.extend(options, $._spritely.instances[el_id] || {});
            if (options.play_frames && !$._spritely.instances[el_id]['remaining_frames']) {
                $._spritely.instances[el_id]['remaining_frames'] = options.play_frames + 1;
            }
            if (options.type == 'sprite' && options.fps) {
                var frames;
                var animate = function(el) {
                    var w = options.width, h = options.height;
                    if (!frames) {
                        frames = [];
                        total = 0
                        for (var i = 0; i < options.no_of_frames; i ++) {
                            frames[frames.length] = (0 - total);
                            total += w;
                        }
                    }
                    if ($._spritely.instances[el_id]['current_frame'] == 0) {
                        if (options.on_first_frame) {
                            options.on_first_frame(el);
                        }
                    } else if ($._spritely.instances[el_id]['current_frame'] == frames.length - 1) {
                        if (options.on_last_frame) {
                            options.on_last_frame(el);
                        }
                    }
                    if (options.on_frame && options.on_frame[$._spritely.instances[el_id]['current_frame']]) {
                        options.on_frame[$._spritely.instances[el_id]['current_frame']](el);
                    }
                    if (options.rewind == true) {
                        if ($._spritely.instances[el_id]['current_frame'] <= 0) {
                            $._spritely.instances[el_id]['current_frame'] = frames.length - 1;
                        } else {
                            $._spritely.instances[el_id]['current_frame'] = $._spritely.instances[el_id]['current_frame'] - 1;
                        };
                    } else {
                        if ($._spritely.instances[el_id]['current_frame'] >= frames.length - 1) {
                            $._spritely.instances[el_id]['current_frame'] = 0;
                        } else {
                            $._spritely.instances[el_id]['current_frame'] = $._spritely.instances[el_id]['current_frame'] + 1;
                        }
                    }

                    var yPos = $._spritely.getBgY(el);
                    el.css('background-position', frames[$._spritely.instances[el_id]['current_frame']] + 'px ' + yPos);
                    if (options.bounce && options.bounce[0] > 0 && options.bounce[1] > 0) {
                        var ud = options.bounce[0]; // up-down
                        var lr = options.bounce[1]; // left-right
                        var ms = options.bounce[2]; // milliseconds
                        el
                            .animate({top: '+=' + ud + 'px', left: '-=' + lr + 'px'}, ms)
                            .animate({top: '-=' + ud + 'px', left: '+=' + lr + 'px'}, ms);
                    }
                }
                if ($._spritely.instances[el_id]['remaining_frames'] && $._spritely.instances[el_id]['remaining_frames'] > 0) {
                    $._spritely.instances[el_id]['remaining_frames'] --;
                    if ($._spritely.instances[el_id]['remaining_frames'] == 0) {
                        $._spritely.instances[el_id]['remaining_frames'] = -1;
                        delete $._spritely.instances[el_id]['remaining_frames'];
                        return this;
                    } else {
                        animate(el);
                    }
                } else if ($._spritely.instances[el_id]['remaining_frames'] != -1) {
                    animate(el);
                }
            } else if (options.type == 'pan') {
                if (!$._spritely.instances[el_id]['_stopped']) {

                    // As we pan, reduce the offset to the smallest possible
                    // value to ease the load on the browser. This step is
                    // skipped if the image hasn't loaded yet.
                    var speed = options.speed || 1;

                    switch (options.dir) {

                        case 'up':
                            speed *= -1;
                        case 'down':
                            if (!$._spritely.instances[el_id]['l'])
                                $._spritely.instances[el_id]['l'] = $._spritely.getBgX(el).replace('px', '');
                            $._spritely.instances[el_id]['t'] = ($._spritely.instances[el_id]['t'] + speed) || 0;
                            if (options.img_height)
                                $._spritely.instances[el_id]['t'] %= options.img_height;
                            break;

                        case 'left':
                            speed *= -1;
                        case 'right':
                            if (!$._spritely.instances[el_id]['t'])
                                $._spritely.instances[el_id]['t'] = $._spritely.getBgY(el).replace('px', '');
                            $._spritely.instances[el_id]['l'] = ($._spritely.instances[el_id]['l'] + speed) || 0;
                            if (options.img_width)
                                $._spritely.instances[el_id]['l'] %= options.img_width;
                            break;
                    }

                    // When assembling the background-position string, care must be taken
                    // to ensure correct formatting.
                    var bg_left = $._spritely.instances[el_id]['l'].toString();
                    if (bg_left.indexOf('%') == -1) {
                        bg_left += 'px ';
                    } else {
                        bg_left += ' ';
                    }

                    var bg_top = $._spritely.instances[el_id]['t'].toString();
                    if (bg_top.indexOf('%') == -1) {
                        bg_top += 'px ';
                    } else {
                        bg_top += ' ';
                    }

                    $(el).css('background-position', bg_left + bg_top);
                }
            }
            $._spritely.instances[el_id]['options'] = options;
            $._spritely.instances[el_id]['timeout'] = window.setTimeout(function() {
                $._spritely.animate(options);
            }, parseInt(1000 / options.fps));
        },
        randomIntBetween: function(lower, higher) {
            return parseInt(rand_no = Math.floor((higher - (lower - 1)) * Math.random()) + lower);
        },
        getBgUseXY: (function() {
            try {
                return typeof $('body').css('background-position-x') == 'string';
            } catch(e) {
                return false;
            }
        })(),
        getBgY: function(el) {
            if ($._spritely.getBgUseXY) {
                return $(el).css('background-position-y') || '0';
            } else {
                return ($(el).css('background-position') || ' ').split(' ')[1];
            }
        },
        getBgX: function(el) {
            if ($._spritely.getBgUseXY) {
                return $(el).css('background-position-x') || '0';
            } else {
                return ($(el).css('background-position') || ' ').split(' ')[0];
            }
        },
        get_rel_pos: function(pos, w) {
            // return the position of an item relative to a background
            // image of width given by w
            var r = pos;
            if (pos < 0) {
                while (r < 0) {
                    r += w;
                }
            } else {
                while (r > w) {
                    r -= w;
                }
            }
            return r;
        },

        _spStrip: function(s, chars) {
            // Strip any character in 'chars' from the beginning or end of
            // 'str'. Like Python's .strip() method, or jQuery's $.trim()
            // function (but allowing you to specify the characters).
            while (s.length) {
                var i, sr, nos = false, noe = false;
                for (i=0;i<chars.length;i++) {
                    var ss = s.slice(0, 1);
                    sr = s.slice(1);
                    if (chars.indexOf(ss) > -1)
                        s = sr;
                    else
                        nos = true;
                }
                for (i=0;i<chars.length;i++) {
                    var se = s.slice(-1);
                    sr = s.slice(0, -1);
                    if (chars.indexOf(se) > -1)
                        s = sr;
                    else
                        noe = true;
                }
                if (nos && noe)
                    return s;
            }
            return '';
        }
    };
    $.fn.extend({

        spritely: function(options) {

            var $this = $(this),
                el_id = $this.attr('id'),
                background_image = (new Image()),
                background_image_src = $._spritely._spStrip($this.css('background-image'), 'url("); ');

            options = $.extend({
                    type: 'sprite',
                    do_once: false,
                    width: null,
                    height: null,
                    img_width: 0,
                    img_height: 0,
                    fps: 12,
                    no_of_frames: 2,
                    stop_after: null
                }, options || {});

            background_image.onload = function() {
                options.img_width = background_image.width;
                options.img_height = background_image.height;
            }

            background_image.src = background_image_src;

            options.img = background_image;

            if (!$._spritely.instances) {
                $._spritely.instances = {};
            }

            if (!$._spritely.instances[el_id]) {
                if (options.start_at_frame) {
                    $._spritely.instances[el_id] = {current_frame: options.start_at_frame - 1};
                } else {
                    $._spritely.instances[el_id] = {current_frame: -1};
                }
            }

            $._spritely.instances[el_id]['type'] = options.type;
            $._spritely.instances[el_id]['depth'] = options.depth;

            options.el = this;
            options.width = options.width || $this.width() || 100;
            options.height = options.height || $this.height() || 100;

            var get_rate = function() {
                return parseInt(1000 / options.fps);
            }

            if (!options.do_once) {
                setTimeout(function() {
                    $._spritely.animate(options);
                }, get_rate(options.fps));
            } else {
                setTimeout(function() {
                    $._spritely.animate(options);
                }, 0);
            }

            return this;

        },

        sprite: function(options) {
            var options = $.extend({
                type: 'sprite',
                bounce: [0, 0, 1000] // up-down, left-right, milliseconds
            }, options || {});
            return $(this).spritely(options);
        },
        pan: function(options) {
            var options = $.extend({
                type: 'pan',
                dir: 'left',
                continuous: true,
                speed: 1 // 1 pixel per frame
            }, options || {});
            return $(this).spritely(options);
        },
        flyToTap: function(options) {
            var options = $.extend({
                el_to_move: null,
                type: 'moveToTap',
                ms: 1000, // milliseconds
                do_once: true
            }, options || {});
            if (options.el_to_move) {
                $(options.el_to_move).active();
            }
            if ($._spritely.activeSprite) {
                if (window.Touch) { // iphone method see http://cubiq.org/remove-onclick-delay-on-webkit-for-iphone/9 or http://www.nimblekit.com/tutorials.html for clues...
                    $(this)[0].ontouchstart = function(e) {
                        var el_to_move = $._spritely.activeSprite;
                        var touch = e.touches[0];
                        var t = touch.pageY - (el_to_move.height() / 2);
                        var l = touch.pageX - (el_to_move.width() / 2);
                        el_to_move.animate({
                            top: t + 'px',
                            left: l + 'px'
                        }, 1000);
                    };
                } else {
                    $(this).click(function(e) {
                        var el_to_move = $._spritely.activeSprite;
                        $(el_to_move).stop(true);
                        var w = el_to_move.width();
                        var h = el_to_move.height();
                        var l = e.pageX - (w / 2);
                        var t = e.pageY - (h / 2);
                        el_to_move.animate({
                            top: t + 'px',
                            left: l + 'px'
                        }, 1000);
                    });
                }
            }
            return this;
        },
        // isDraggable requires jQuery ui
        isDraggable: function(options) {
            if ((!$(this).draggable)) {
                //console.log('To use the isDraggable method you need to load jquery-ui.js');
                return this;
            }
            var options = $.extend({
                type: 'isDraggable',
                start: null,
                stop: null,
                drag: null
            }, options || {});
            var el_id = $(this).attr('id');
            if (!$._spritely.instances[el_id]) {
                return this;
            }
            $._spritely.instances[el_id].isDraggableOptions = options;
            $(this).draggable({
                start: function() {
                    var el_id = $(this).attr('id');
                    $._spritely.instances[el_id].stop_random = true;
                    $(this).stop(true);
                    if ($._spritely.instances[el_id].isDraggableOptions.start) {
                        $._spritely.instances[el_id].isDraggableOptions.start(this);
                    }
                },
                drag: options.drag,
                stop: function() {
                    var el_id = $(this).attr('id');
                    $._spritely.instances[el_id].stop_random = false;
                    if ($._spritely.instances[el_id].isDraggableOptions.stop) {
                        $._spritely.instances[el_id].isDraggableOptions.stop(this);
                    }
                }
            });
            return this;
        },
        active: function() {
            // the active sprite
            $._spritely.activeSprite = this;
            return this;
        },
        activeOnClick: function() {
            // make this the active script if clicked...
            var el = $(this);
            if (window.Touch) { // iphone method see http://cubiq.org/remove-onclick-delay-on-webkit-for-iphone/9 or http://www.nimblekit.com/tutorials.html for clues...
                el[0].ontouchstart = function(e) {
                    $._spritely.activeSprite = el;
                };
            } else {
                el.click(function(e) {
                    $._spritely.activeSprite = el;
                });
            }
            return this;
        },
        spRandom: function(options) {
            var options = $.extend({
                top: 50,
                left: 50,
                right: 290,
                bottom: 320,
                speed: 4000,
                pause: 0
            }, options || {});
            var el_id = $(this).attr('id');
            if (!$._spritely.instances[el_id]) {
                return this;
            }
            if (!$._spritely.instances[el_id].stop_random) {
                var r = $._spritely.randomIntBetween;
                var t = r(options.top, options.bottom);
                var l = r(options.left, options.right);
                $('#' + el_id).animate({
                    top: t + 'px',
                    left: l + 'px'
                }, options.speed)
            }
            window.setTimeout(function() {
                $('#' + el_id).spRandom(options);
            }, options.speed + options.pause)
            return this;
        },
        makeAbsolute: function() {
            // remove an element from its current position in the DOM and
            // position it absolutely, appended to the body tag.
            return this.each(function() {
                var el = $(this);
                var pos = el.position();
                el.css({position: "absolute", marginLeft: 0, marginTop: 0, top: pos.top, left: pos.left })
                    .remove()
                    .appendTo("body");
            });

        },
        spSet: function(prop_name, prop_value) {
            var el_id = $(this).attr('id');
            $._spritely.instances[el_id][prop_name] = prop_value;
            return this;
        },
        spGet: function(prop_name, prop_value) {
            var el_id = $(this).attr('id');
            return $._spritely.instances[el_id][prop_name];
        },
        spStop: function(bool) {
            $(this).each(function() {
                var el_id = $(this).attr('id');
                if ($._spritely.instances[el_id]['options']['fps']) {
                    $._spritely.instances[el_id]['_last_fps'] = $._spritely.instances[el_id]['options']['fps'];
                }
                $._spritely.instances[el_id]['_stopped'] = true;
                $._spritely.instances[el_id]['_stopped_f1'] = bool;
                if ($._spritely.instances[el_id]['type'] == 'sprite') {
                    $(this).spSet('fps', 0);
                }
                if (bool) {
                    // set background image position to 0
                    var bp_top = $._spritely.getBgY($(this));
                    $(this).css('background-position', '0 ' + bp_top);
                }
            });
            return this;
        },
        spStart: function() {
            $(this).each(function() {
                var el_id = $(this).attr('id');
                var fps = $._spritely.instances[el_id]['_last_fps'] || 12;
                if ($._spritely.instances[el_id]['type'] == 'sprite') {
                    $(this).spSet('fps', fps);
                }
                $._spritely.instances[el_id]['_stopped'] = false;
            });
            return this;
        },
        spToggle: function() {
            var el_id = $(this).attr('id');
            var stopped = $._spritely.instances[el_id]['_stopped'] || false;
            var stopped_f1 = $._spritely.instances[el_id]['_stopped_f1'] || false;
            if (stopped) {
                $(this).spStart();
            } else {
                $(this).spStop(stopped_f1);
            }
            return this;
        },
        fps: function(fps) {
            $(this).each(function() {
                $(this).spSet('fps', fps);
            });
            return this;
        },
        goToFrame: function(n) {
            var el_id = $(this).attr('id');
            if ($._spritely.instances && $._spritely.instances[el_id]) {
                $._spritely.instances[el_id]['current_frame'] = n - 1;
            }
            return this;
        },
        spSpeed: function(speed) {
            $(this).each(function() {
                $(this).spSet('speed', speed);
            });
            return this;
        },
        spRelSpeed: function(speed) {
            $(this).each(function() {
                var rel_depth = $(this).spGet('depth') / 100;
                $(this).spSet('speed', speed * rel_depth);
            });
            return this;
        },
        spChangeDir: function(dir) {
            $(this).each(function() {
                $(this).spSet('dir', dir);
            });
            return this;
        },
        spState: function(n) {
            $(this).each(function() {
                // change state of a sprite, where state is the vertical
                // position of the background image (e.g. frames row)
                var yPos = ((n - 1) * $(this).height()) + 'px';
                var xPos = $._spritely.getBgX($(this));
                var bp = xPos + ' -' + yPos;
                $(this).css('background-position', bp);
            });
            return this;
        },
        lockTo: function(el, options) {
            $(this).each(function() {
                var el_id = $(this).attr('id');
                if (!$._spritely.instances[el_id]) {
                    return this;
                }
                $._spritely.instances[el_id]['locked_el'] = $(this);
                $._spritely.instances[el_id]['lock_to'] = $(el);
                $._spritely.instances[el_id]['lock_to_options'] = options;
                $._spritely.instances[el_id]['interval'] = window.setInterval(function() {
                    if ($._spritely.instances[el_id]['lock_to']) {
                        var locked_el = $._spritely.instances[el_id]['locked_el'];
                        var locked_to_el = $._spritely.instances[el_id]['lock_to'];
                        var locked_to_options = $._spritely.instances[el_id]['lock_to_options'];
                        var locked_to_el_w = locked_to_options.bg_img_width;
                        var locked_to_el_h = locked_to_el.height();
                        var locked_to_el_y = $._spritely.getBgY(locked_to_el);
                        var locked_to_el_x = $._spritely.getBgX(locked_to_el);
                        var el_l = (parseInt(locked_to_el_x) + parseInt(locked_to_options['left']));
                        var el_t = (parseInt(locked_to_el_y) + parseInt(locked_to_options['top']));
                        el_l = $._spritely.get_rel_pos(el_l, locked_to_el_w);
                        $(locked_el).css({
                            'top': el_t + 'px',
                            'left': el_l + 'px'
                        });
                    }
                }, options.interval || 20);
            });
            return this;
        },
        destroy: function() {
            var el = $(this);
            var el_id = $(this).attr('id');
            if ($._spritely.instances[el_id] && $._spritely.instances[el_id]['timeout']){
                window.clearTimeout($._spritely.instances[el_id]['timeout']);
            }
            if ($._spritely.instances[el_id] && $._spritely.instances[el_id]['interval']) {
                window.clearInterval($._spritely.instances[el_id]['interval']);
            }
            delete $._spritely.instances[el_id]
            return this;
        }
    })
})(jQuery);
// Stop IE6 re-loading background images continuously
try {
  document.execCommand("BackgroundImageCache", false, true);
} catch(err) {} 
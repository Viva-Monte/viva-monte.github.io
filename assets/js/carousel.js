function Carousel (settings) {
		// required settings:
		// wrappingElement (dom Element)
		//
		// optinoal settings:
		// enableInfinteScroll (boolean)

		this.wrap = settings.wrappingElement;
		var wrap = this.wrap;
    wrap.scrollLeft = 2795;

		HTMLElement.prototype.completeWidth = function() {
			var style = window.getComputedStyle(this);
			return this.offsetWidth +
				parseInt(style.marginLeft) +
				parseInt(style.marginRight);
		}

		function infiniteScroll() {
			if (wrap.scrollLeft < wrap.firstElementChild.offsetWidth) {
				wrap.insertBefore(wrap.lastElementChild,wrap.firstElementChild);
				wrap.scrollLeft += wrap.firstElementChild.completeWidth();
			} if(wrap.scrollWidth - wrap.scrollLeft - wrap.offsetWidth < wrap.lastElementChild.offsetWidth){
				var el = wrap.firstElementChild;
				wrap.appendChild(el);
				wrap.scrollLeft -= wrap.firstElementChild.completeWidth();
			}
		}

		function animateElement () {

			for(var i = 0; (el = wrap.children.item(i)) != null; i++) {
				var scale = - Math.pow((( el.offsetLeft - wrap.scrollLeft - wrap.offsetLeft ) / wrap.offsetWidth) -.4 , 2) +1 ;
				var opacity = -1.5 * Math.pow((( el.offsetLeft - wrap.scrollLeft - wrap.offsetLeft ) / wrap.offsetWidth) -.4 , 2) +1 ;
				el.style.webkitTransform =
				el.style.MozTransform =
				el.style.msTransform =
				el.style.OTransform =
				el.style.transform =
				"scale(" + scale + ")";
				el.style.opacity = opacity;
			}
		}

		if (settings.enableInfinteScroll != undefined && settings.enableInfinteScroll) {
			while (wrap.scrollWidth <= wrap.offsetWidth + 2*wrap.firstElementChild.offsetWidth) {
				var children = wrap.children;
				var childrenCount = children.length;
				for (var i = 0; i < childrenCount; i++) {
					wrap.appendChild(children[i].cloneNode());
				}
			}
			wrap.addEventListener('scroll', infiniteScroll);
		}
	  wrap.addEventListener('scroll', animateElement);
		animateElement();
	}

var moveLeft = document.getElementById('carousel-left');
var moveRight= document.getElementById('carousel-right');
var wrapperElement = document.getElementById('carousel');
var carousel = new Carousel({
	wrappingElement: wrapperElement,
});

var currentAction;

moveLeft.onmousedown = function() {
 			currentAction = setInterval(function() {
			wrapperElement.scrollLeft-= 3;
	}, 1);
};
moveRight.onmousedown = function() {
			currentAction = setInterval(function() {
			wrapperElement.scrollLeft+= 3;
	}, 1);
};

moveLeft.onmouseup = moveRight.onmouseup = function (){
	clearInterval(currentAction);
};

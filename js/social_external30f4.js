/* eslint-disable */
(function(g,d,o){
	g._ltq=g._ltq||[];g._lt=g._lt||function(){g._ltq.push(arguments)};
	var h=location.protocol==='https:'?'https://d.line-scdn.net':'https://d.line-cdn.net';
	var s=d.createElement('script');s.async=1;
	s.src=o||h+'/n/line_tag/public/release/v1/lt.js';
	var t=d.getElementsByTagName('script')[0];t.parentNode.insertBefore(s,t);
})(window, document);
_lt('init', {
	customerType: 'lap',
	tagId: '345b1f25-4a6f-4421-aac4-893fd36c1be8'
});
_lt('send', 'pv', ['345b1f25-4a6f-4421-aac4-893fd36c1be8']);
_lt('send', 'cv', {
	type: 'CustomEvent'
},['345b1f25-4a6f-4421-aac4-893fd36c1be8']);
_lt('send', 'cv', {
	type: 'Conversion'
},['345b1f25-4a6f-4421-aac4-893fd36c1be8']);


window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-JF62M826QS');


//Facebook Pixel Event Tracking
window.onload = function () {
	var fbInterval = setInterval(fbFunction, 1000);

	function fbFunction () {
		if (typeof fbq == 'function') {
			clearTimeout(fbInterval);

			let last_known_scroll_position = 0;
			let ticking = false;
			let checker = 0;
			let diffHeight = document.body.scrollHeight - screen.height;
	
			function trackCustom(scrollTop) {
				let scrollPercent = scrollTop / diffHeight;
				let scrollPercentRounded = Math.round(scrollPercent * 100);
				if (scrollPercentRounded >= 25 && checker === 0) {
					fbq('trackCustom', 'Scroll-25');
					checker = 25;
				}
				if (scrollPercentRounded >= 50 && checker === 25) {
					fbq('trackCustom', 'Scroll-50');
					checker = 50;
				}
				if (scrollPercentRounded >= 75 && checker === 50) {
					fbq('trackCustom', 'Scroll-75');
					checker = 75;
				}
				if (scrollPercentRounded >= 100 && checker === 75) {
					fbq('trackCustom', 'Scroll-100');
					checker = 100;
				}
			}
	
			window.addEventListener('scroll', function(e) {
				last_known_scroll_position = window.scrollY;
	
				if (!ticking) {
					window.requestAnimationFrame(function() {
						trackCustom(last_known_scroll_position);
						ticking = false;
					});
	
					ticking = true;
				}
			});
	
			var timeLeft = 180;
			var timerId = setInterval(countdown, 1000);
	
			function countdown() {
					if (timeLeft === -1) {
							clearTimeout(timerId);
					} else {
							if (timeLeft === 0) {
									//ผ่านไป 180 วินาที
									fbq('trackCustom', 'ViewTimer-180s');
							}
							if (timeLeft === 30) {
									//ผ่านไป 150 วินาที
									fbq('trackCustom', 'ViewTimer-150s');
							}
							if (timeLeft === 60) {
									//ผ่านไป 120 วินาที
									fbq('trackCustom', 'ViewTimer-120s');
							}
							if (timeLeft === 90) {
									//ผ่านไป 90 วินาที
									fbq('trackCustom', 'ViewTimer-90s');
							}
							if (timeLeft === 120) {
									//ผ่านไป 60 วินาที
									fbq('trackCustom', 'ViewTimer-60s');
							}
							if (timeLeft === 135) {
									//ผ่านไป 45 วินาที
									fbq('trackCustom', 'ViewTimer-45s');
							}
							if (timeLeft === 150) {
									//ผ่านไป 30 วินาที
									fbq('trackCustom', 'ViewTimer-30s');
							}
							if (timeLeft === 160) {
									//ผ่านไป 20 วินาที
									fbq('trackCustom', 'ViewTimer-20s');
							}
							if (timeLeft === 165) {
									//ผ่านไป 15 วินาที
									fbq('trackCustom', 'ViewTimer-15s');
							}
							if (timeLeft === 170) {
									//ผ่านไป 10 วินาที
									fbq('trackCustom', 'ViewTimer-10s');
							}
							if (timeLeft === 175) {
									//ผ่านไป 5 วินาที
									fbq('trackCustom', 'ViewTimer-5s');
							}
							timeLeft--;
					}
			}
		}
	}
}
window.addEventListener("load", main, false);
function main() {
	function rect(ctx, x, y, l, a) {
		ctx.save();
		ctx.translate(x, y);
		ctx.rotate(a);
		ctx.fillRect(0, 0, l, l);
		ctx.restore();
	}
	
	function draw(ctx, x, y, l, a, ang) {
		
		if (l > 1) {
			var g = alpha.value;
			g += 2;
			ctx.fillStyle = 'rgb(0, ' + g + ', 0)';
			rect(ctx, x, y, l, a);
	
			var ln = l * Math.cos(ang);
			draw(ctx, x - ln * Math.cos(a + ang), y - ln * Math.sin(a + ang), ln, a - ang, ang, g);
			draw(ctx, x + ln * Math.sin(a + ang) + ln * Math.cos(a - ang), y - ln * Math.cos(a + ang) + ln * Math.sin(a - ang), ln, a + ang, ang, g);
		}
		
	}
	
	var canvas = document.querySelector('canvas');
	var ctx = canvas.getContext('2d');
	
	var w = 900;
	var h = 500;
	
	canvas.width = w;
	canvas.height = h;
	
	var l = (w > h ? h / 4.5 : w / 6);
	var x = w / 2 - l / 2;
	var y = h - l - (h - l * 4) / 2;
	

    
    
	alpha.onclick=function(){
     draw(ctx, x, y, l, 0, Math.PI / 4 );
	}
}


//取样式函数
function getStyle(obj, attr) {
	if (obj.currentStyle) {
		return obj.currentStyle[attr]; //Ie支持
	} else {
		return getComputedStyle(obj, false)[attr]; //
	}
}
//完美的运动框架
/* 要实现同时运动必须
 * starMove(obj,{attr1:iTarget,attr2:iTarget2...},fn)
 * 即 starMove(obj,json,fn)然后遍历循环json。
 * */
function starMove(obj, json, fn) {
	var flag = true;
	clearInterval(obj.timer);
	 obj.timer = setInterval(function() {
		//遍历实现同时运动
		for (var attr in json) {
			//1.取当前的值
			var sty = 0;
			if (attr == 'opacity') {
				sty = Math.round(parseFloat(getStyle(obj,attr)) * 100);
			} else {
				sty = parseInt(getStyle(obj, attr));
				//console.log(sty);
			}

			//2.算速度，变速运动
			var speed = (json[attr] - sty) / 8;
			speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);

			//3.检测停止
			if (sty != json[attr]) {
				flag = false;
			}
			if (attr == 'opacity') {
				obj.style.filter='alpha(opacity:'+(sty+speed)+')';//ie
				obj.style.opacity = (sty + speed) / 100;//css3
			} else {
				obj.style[attr] = sty + speed + 'px';
			}
		}
		if (flag) {
			clearInterval(obj.timer);
			if (fn) {
				fn();
			}
		}
	}, 30)
}
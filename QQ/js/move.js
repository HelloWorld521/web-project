function starMove (obj,attr,iTarget) {
				clearInterval(obj.timer);
				obj.timer=setInterval(function(){ 
					if(attr!='opacity'){
						var sty=parseInt(getStyle(obj,attr));						
					}else{
						var sty=Math.round(parseFloat(iTarget)*100);
						//console.log(sty);
					}
					var speed=(iTarget-sty)/8;
					speed=speed>0?Math.ceil(speed):Math.floor(speed);
					if(sty==iTarget){
						clearInterval(obj.timer);
		 			}else{
						if(attr=='opacity'){
						//	obj.style.filter='alpha(opacity:'+(sty+speed)+')';
							obj.style.opacity=(sty+speed)/100;
						}else{
							obj.style[attr]=sty+speed+'px';					
						}
					}
				},30)
			}
			//取样式函数
			function getStyle (obj,attr) {
				if(obj.currentStyle){
				return obj.currentStyle[attr];//Ie支持
			}else{
				return getComputedStyle(obj,false)[attr];//
			}
			}
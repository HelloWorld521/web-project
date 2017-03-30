function showTime () {
			var dd=document.getElementById("show");
			var myDate=new Date();
			var year=myDate.getFullYear();
			var month=myDate.getMonth()+1;
			var date=myDate.getDate();
			var week=new Array('星期日','星期一','星期二','星期三','星期四','星期五','星期六');
			var h=myDate.getHours();
			var min=myDate.getMinutes();
			var sen=myDate.getSeconds();
			var m=chickTime(min);
			var s=chickTime(sen);
			dd.innerHTML=year+'年'+month+'月'+date+'日&nbsp'+week[myDate.getDay()]+h+':'+m+':'+s;
			setTimeout(showTime,500);
		}
function chickTime (i) {
			if(i<10){
				i='0'+i;
			}
			return i;
		}
function FreshTime(){
	var nowtime=new Date();
		//	var end=new Date("2018,6,6"); //ie不兼容
			var end=new Date();
				end.setFullYear(2018);
				end.setMonth(5);
				end.setDate(6); 
				end.setHours(8);
				end.setMinutes(0);
				end.setSeconds(0);
			var lefttime=parseInt((end.getTime()-nowtime.getTime())/1000) ; 
        	var d= parseInt(lefttime/(60*60*24));
        	var h= parseInt((lefttime/(60*60))%24);
        	var m= parseInt((lefttime/60)%60);
        	var s= parseInt(lefttime%60) ;
		//	var left=Math.ceil((end.getTime()-now.getTime())/(24*60*60*1000));
			var sh=document.getElementById("show1");
			sh.innerHTML=d+'天'+h+'小时'+m+'分'+s+'秒';
			setTimeout(FreshTime,1000);
		//	clearInterval(timer);
}
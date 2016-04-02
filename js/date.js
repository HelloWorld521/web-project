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
			dd.innerHTML=year+'年'+month+'月'+date+'日&nbsp'+week[myDate.getDate()]+h+':'+m+':'+s;
			setTimeout(showTime,500);
		}
function chickTime (i) {
			if(i<10){
				i='0'+i;
			}
			return i;
		}


window.onload = function(){
var _wheel = document.getElementsByClassName("wheel");
//console.log(_wheel)
var _img = _wheel[0].getElementsByTagName("img");
var _cir = document.getElementsByClassName("cir");
var _span = _cir[0].getElementsByTagName("span");
var time = null,index = 0;
setOpacity(_img[0],100);
//setOpacity(_img[2],0);
function setOpacity(elme,opt){//兼容
	if(elme.filters){
		elme.style.filter = "alpha(opacity=" + opt + ")";
	}else{
		elme.style.opacity = opt / 100;
	}
}
function fadeIn(elme){//淡入
	setOpacity(elme,0);
	for(var i = 0;i <= 100;i++){
		(function(){
			var pos = i;
			setTimeout(function(){
				setOpacity(elme,pos);
			},10*pos);
		})();
		
	}
}
function fadeOut(elem){//淡出
	setOpacity(elem,0);
	for(var i = 0;i <= 100;i++){
		(function(){
		var pos = i;
		setTimeout(function(){
			setOpacity(elem,pos);
		},10*(100 - pos));
	})();
	}
}
function cira(){//小圆点样式改变
	for(var i = 0;i < _span.length;i++){
		if(_span[i].className == "new"){
			_span[i].className = "";
		}
	}
	_span[index].className = "new";
}
for(var j = 0;j < _span.length;j++){ //小圆点绑定点击事件
			_span[j].setAttribute("aIndex",j);
			_span[j].onclick = function(){
				if(this.className == "new"){
					return;
				}else{
					var newIndex = this.getAttribute("aIndex") * 1;
					fadeOut(_img[index]);
					fadeIn(_img[newIndex]);
					index = newIndex;
					cira();
				}
				
			}
		}
function play(){
	if(index == _img.length-1){  //当索引号为最后一张的索引号时
				fadeOut(_img[index]);//index == _pics.length-1  把当前的这张消失（即最后这张消失）
				index = 0; //把索引号重新赋为0
				fadeIn(_img[index]);//index==0   让第一张出现（即索引号为0的这张）的这张出现
			}else{
				fadeOut(_img[index]);   //当前这张消失
				fadeIn(_img[index + 1]); //下一张出现
				index++;
			}
			cira();
}
_span.onmouseover = function(){  //鼠标放上去 停止自动轮播
			clearInterval(timer);
		}
_span.onmouseout = function(){  //鼠标离开  自动轮播
			autoPlay();
		}
function autoPlay(){  //自动轮播
			timer = setInterval(play,2000);  //隔两秒调用右侧按钮的函数
		}
		autoPlay();
}
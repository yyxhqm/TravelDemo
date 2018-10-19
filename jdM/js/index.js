window.onload = function(){
	//1.顶部搜索 
	search();
	//2.轮播图
	banner();
	//3.倒计时
	downTime();
	
};
var search = function(){
	//1.默认固定顶部，透明背景	
	var searchBox = document.querySelector('.jd_search_box');
	var banner = document.querySelector('.jd_banner');
	var height = banner.offsetHeight;
	//监听页面滚动事件
	window.onscroll = function(){
		/*支持谷歌浏览器document.body.scrollTop*/
		//支持火狐浏览器document.documentElement.scrollTop
		var scrollTop = document.documentElement.scrollTop;
		var opacity = 0;
		if(scrollTop < height){
			//2.当页面滚动的时候，随着页面卷曲的高度变大，透明度变大
			opacity = scrollTop / height * 0.85;
		}else{
			//3.当页面滚动的时候，超过某一个高度透明度不变
			opacity = 0.85;
		}
		searchBox.style.background = 'rgba(201,21,35,'+opacity+')';
	}
};
var banner = function(){
	//1.自动轮播且无缝  定时器+过渡
	//2.点要随着图片的轮播改变   根据索引切换
	//3.滑动效果    利用touch事件完成
	//4.滑动结束的时候，如果滑动的距离不超过屏幕的1/3,吸附回去  过渡
	//5.滑动结束的时候，如果滑动的距离超过屏幕的1/3,切换(上一张/下一张）根据滑动的方向 +过渡
		
	//轮播图
	var banner = document.querySelector('.jd_banner');
	//屏幕宽度
	var width = banner.offsetWidth;
	//图片容器
	var imageBox = banner.querySelector('ul:first-child');
	//点容器
	var pointBox = banner.querySelector('ul:last-child');
	//所有的点
	var points = pointBox.querySelectorAll('li');
	
	//加过渡
	var addTransition = function(){
		imageBox.style.transition = 'all 0.2s';
		imageBox.style.webkitTransition = 'all 0.2s';
	}
	//清过渡
	var removeTransition = function(){
		imageBox.style.transition = 'none';
		imageBox.style.webkitTransition = 'none';
	}
	//做位移
	var setTranslateX = function(translateX){
		imageBox.style.transform = 'translateX('+translateX+'px)';
		imageBox.style.webkitTransform='translateX('+translateX+'px)';
	}
	
	//程序的核心 index
	var index = 1;
	var timer = setInterval(function(){
		index++;
		//加过渡
		addTransition();
		//做位移
		setTranslateX(-index*width);
	},1000);
	//需要等最后一张动画结束去判断，是否瞬间定位第一张
	imageBox.addEventListener('transitionend',function(){
		if(index >=9){
			index = 1;
			//瞬间定位
			//清过渡
			removeTransition();
			//做位移
			setTranslateX(-index*width);
		}
		//滑动的时候也需要无缝(一直左滑的时候，会到0)
		else if(index <=0){
			index = 8;
			//瞬间定位
			//清过渡
			removeTransition();
			//做位移
			setTranslateX(-index*width);
		}
		//根据索引设置点
		setPoint();
	});	
	//设置点的方法
	var setPoint = function(){
		//清除样式
		for(var i =0;i<points.length;i++){
			var obj = points[i];
			obj.classList.remove('now');
		}
		//给对应的加上样式
		points[index-1].classList.add('now');
	}
	//绑定事件
	var startX = 0;
	var distanceX = 0
	var isMove = false;
	imageBox.addEventListener('touchstart',function(e){
		//清除定时器
		clearInterval(timer);
		//记录起始位置的X坐标
		startX = e.touches[0].clientX;
	});
	imageBox.addEventListener('touchmove',function(e){
		//滑动过程当中的X坐标
		var moveX = e.touches[0].clientX;
		//计算位移，有正负方向
		distanceX = moveX - startX;
		//计算目标元素的位移  不用管正负
		//元素将要的定位 = 当前定位 + 手指移动的距离
		var translateX = -index * width + distanceX;
		//滑动，随手指的滑动做位置的改变
		removeTransition();
		setTranslateX(translateX);
		isMove = true;
	});
	imageBox.addEventListener('touchend',function(e){
		//4. 5.功能
		//要使用移动的距离
		if(isMove){
			if(Math.abs(distanceX) < width/3){
			//吸附
			addTransition();
			setTranslateX(-index*width);
		}else{
			//切换
			//上一张(往右滑动)
			if(distanceX > 0){
				index --;
			}
			//下一张(往左滑动)
			else{
				index ++;
			}
			//根据index去动画的移动
			addTransition();
			setInterval(-index*width);
		}
		//最好做一次参数的重置
		startX = 0;
		distanceX = 0;
		isMove = false;
		//加上定时器
		clearInterval(timer);
		timer = setInterval(function() {
	        index++;
	        //加过渡
	        addTransition();
	        //做位移
	        setTranslateX(-index * width);
            }, 1000);
		}	
	});
	
};


var downTime = function(){
	//倒计时的时间
	var time = 2*60*60;
	//时间盒子
	var spans = document.querySelector('.sk_time').querySelectorAll('span');
	//每一秒去更新显示的时间
	var timer = setInterval(function(){
		time--;
		//格式还是秒 ， 转换
		var h = Math.floor(time/3600);
		var m = Math.floor(time%3600/60);
		var s = time%60;
		
		spans[0].innerHTML = Math.floor(h/10);
		spans[1].innerHTML = h%10;
		spans[3].innerHTML = Math.floor(m/10);
		spans[4].innerHTML = m%10;
		spans[6].innerHTML = Math.floor(s/10);
		spans[7].innerHTML = s%10;
		
		if(time <= 0){
			clearInterval(timer);
		}
		
	},1000)
}

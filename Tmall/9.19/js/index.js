/*
* @Author: 张秀荣
* @Date:   2017-09-18 17:30:28
* @Last Modified by:   张秀荣
* @Last Modified time: 2017-09-19 22:30:32
*/
window.onload=function(){
	let fenlei=document.getElementsByClassName("fenlei")[0];
	let fenleili=fenlei.getElementsByTagName("li");
	// let item=document.getElementsByClassName("item");


	let banner1=document.getElementsByClassName("banner1")[0];
	let bannerimg=banner1.getElementsByTagName("img");
	console.log(bannerimg);
	let btn=document.getElementsByClassName("btn")[0];
	let bannerbtn=btn.getElementsByTagName("li");
	console.log(bannerbtn);
	let bgcolor=document.getElementsByClassName("banner")[0];
	let banner=document.getElementsByClassName("banner")[0];
	console.log(banner);

	
// 侧导航
	// for(let i=0;i<fenleili.length;i++){
	// 	fenleili[i].onmouseover=function(){
	// 		item[i].style.display="block";
	// 	}
	// 	fenleili[i].onmouseout=function(){
	// 		item[i].style.display="none";
	// 	}
	// }
	
	// 事件源与发生事件的在同一元素，可以使用这种方法:
	// 确定i之后再获取要动的那个元素，利用this
	for(let i=0;i<fenleili.length;i++){
		fenleili[i].onmouseover=function(){
			let item=this.getElementsByClassName("item")[0];
			item.style.display="block";
		}
		fenleili[i].onmouseout=function(){
			let item=this.getElementsByClassName("item")[0];
			item.style.display="none";
		}
	}

// 轮播图
  // 点击事件
	// 其他全隐藏，只有这个出现
	for(let i=0;i<bannerbtn.length;i++){
		bannerbtn[i].onclick=function(){
			for(let j=0;j<bannerbtn.length;j++){
				bannerimg[j].style.display="none";
				bannerbtn[j].style.background="#a2a2a2";
			}	
			bannerimg[i].style.display="block";
			bannerbtn[i].style.background="#f1f1f1";
			num=i;
		}
	}

	// now用来判断每次正在播放的图片，只涉及到两个元素
	// let now=0;
	// for(let i=0;i<bannerbtn.length;i++){
	// 	bannerbtn[i].onclick=function(){			
	// 		bannerimg[now].style.display="none";
	// 		bannerimg[i].style.display="block";
	// 		now=i;
	// 		switch(i){
	// 			case 0:
	// 					bgcolor.style.background="red";
	// 					break;
	// 			case 1:
	// 					bgcolor.style.background="blue";
	// 					break;
	// 			case 2:
	// 					bgcolor.style.background="yellow";
	// 					break;
	// 			case 3:
	// 					bgcolor.style.background="pink";
	// 					break;	
	// 			case 4:
	// 					bgcolor.style.background="black";
	// 					break;	
	// 			case 5:
	// 					bgcolor.style.background="red";
	// 					break;
	// 			case 6:
	// 					bgcolor.style.background="yellow";
	// 					break;
	// 		}
	// 	}
	// }


	// var方法：
	// 利用闭包函数，里边的函数的执行环境是外边的函数，每次循环外边函数的形参i发生变化，
	// 即里边函数的执行环境发生变化，每次的i都可以存下来
	// 闭包函数：将内部函数的主体返回给外部函数，调用外部函数即调用这个函数
	// let now=0;
	// for(var i=0;i<bannerbtn.length;i++){
	// 	bannerbtn[i].onclick=(function(j){
	// 		return function(){
	// 			bannerimg[now].style.display="none";
	// 			bannerimg[j].style.display="block";
	// 			now=j;
	// 		}
	// 	})(i)
	// }

	// 为btn这个对象添加一个新的属性index，这个属性用来存每次i的值
	// let now=0;
	// for(var i=0;i<bannerbtn.length;i++){
	// 	bannerbtn[i].index=i;
	// 	bannerbtn[i].onclick=function(){
	// 		bannerimg[now].style.display="none";
	// 		bannerimg[this.index].style.display="block";
	// 		now=this.index;
	// 	}
	// }
	

  // 自动播放事件
  	let num=0;

  	let t=setInterval(move, 2000);

  	function move(){
  		num++;
  		if(num==bannerimg.length){
  			num=0;
  		}
  		for(let i=0;i<bannerimg.length;i++) 		
	  		for(let i=0;i<bannerimg.length;i++){
	  			bannerimg[i].style.display="none";
	  			bannerbtn[i].style.background="#a2a2a2";
	  		}
  		bannerimg[num].style.display="block";
  		bannerbtn[num].style.background="#f1f1f1"
  	}



// 两者结合
	banner.onmouseover=function(){
		clearInterval(t);
	}
	banner.onmouseout=function(){
		t=setInterval(move, 2000);
	}


}

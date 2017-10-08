// /*
// * @Author: 张秀荣
// * @Date:   2017-09-19 08:49:23
// * @Last Modified by:   张秀荣
// * @Last Modified time: 2017-09-30 22:33:39
// */

window.onload=function(){
// 预加载
	// 获取每个楼层
	// let sec1=document.getElementsByTagName("section");
	// console.log(sec1)
	// 楼层的集合转为数组形式，遍历后将每个楼层的上高放入新建数组中
	// let secT=[];
	// let sec=Array.from(sec1);
	// console.log(sec)
	// sec.forEach(function(value){
	// 	secT.push(value.offsetTop)
	// 	console.log(value.offsetTop)
	// })
	// console.log(secT);
	// window.onscroll=function(){
	// 	let ch=document.body.scrollTop;
	// 	对新数组遍历，并且传入参数：每个元素（即每个楼层的上高）以及下标，
	// 	判断是否到达那个楼层，到达时，将这个楼层的所有图片提取出来，将存有图片的
	// 	路径地址的那个属性赋值给src属性
	// 	secT.forEach(function(value,index){
	// 	判断方法：浏览器高度+body超出部分是否大于这个楼层的上高
	// 		if(ch+innerHeight>=value+800){
	// 			console.log(value);
	// 			let imgs=sec1[index].getElementsByTagName("img");
	// 			for(let i=0;i<imgs.length;i++){
	// 				imgs[i].src=imgs[i].getAttribute("pathname")
	// 			}
	// 		}
	// 	})
	// }
		
	

// 	// 侧导航
	let aside=$(".aside")[0];
	let asideli=$("li",aside);
	console.log(aside);
	console.log(asideli);
	
// 	// 轮播
	let banner1=$(".banner1")[0];
	console.log(banner1);
	let bannerli=$("li",banner1);
	console.log(bannerli);
	let imgW=parseInt(window.getComputedStyle(banner1,null).width);
	console.log(imgW);
	
	let left=$(".leftyi")[0];
	let right=$(".rightyi")[0];
	console.log(left);
	let flag=true;

	let btn=$(".btn")[0];
	let bannerbtn=$("li",btn);
	console.log( bannerbtn);

	let banner=$(".banner")[0];
	console.log(banner);
	
	let next=0;
	let now=0;
	let t=setInterval(move, 3000);


// 	// 明星单品
	let star=$(".star")[0];
	console.log(star)
	let startu=$(".startu")[0];
	console.log(startu);
	let starziright=$(".starzi-right")[0];
	console.log(starziright);
	let starright=$("a",starziright);
	console.log(starright);

	let a=setInterval(starmove1,2000);
	console.log(startu.offsetLeft)
	let flag1=true;
	let i=0;

// 为你推荐
	let tuijian=$(".xinstar")[0];
	console.log(tuijian)
	let xinstartu=$(".startui",tuijian)[0];
	console.log(xinstartu);
	let j=0;
	let flag2=true;

	let b=setInterval(starmove2,2000);

	// 大导航
	let nav=document.getElementsByClassName("nav1")[0];
	let nava=nav.getElementsByTagName("a");
	let navitem=nav.getElementsByClassName("navitem");
	let navli=nav.getElementsByTagName("li");
	let newnava=Array.from(nava);
	let newnavitem=Array.from(navitem);


// 吴亦凡
	let Containt=$(".newcontaint");
	let conZuojian=$(".zuojian");
	let conYoujian=$(".youjian");
	console.log(conZuojian)
	let flag3=0;
	let newcontaint=Array.from(Containt);
	let cBtn=$(".xiaoyuan");
	let newc=Array.from(cBtn);
	console.log(newc);


// 相似楼层
	let zi=$(".jiadianzi");
	let tuk=$(".jiadiantu2");
	console.log(tuk);
	// console.log(floor);
	let azi=Array.from(zi);
	zi.forEach(function(element,index){
		let select=$("a",element);
		let newsel=Array.from(select);
		newsel.forEach(function(elem,i){
			elem.onmouseover=function(){
				let tuli=$("li",tuk[index]);
				let newtuli=Array.from(tuli);
				newtuli.forEach(function(ele,j){
					console.log(ele);
					let tu=$(".ma1",ele);
					console.log(tu);
					let newtu=Array.from(tu);
					// console.log(newtu);
					// console.log(j);
					// console.log(newtu);
					newtu.forEach(function(el){
						console.log(el);
						el.style.display="none";
						console.log(el);
					})
					// // console.log(newtu[j]);
					// // console.log(newtu[1]);
					newtu[i].style.display='block';
				})
			}
		})
	})
	
// 吴亦凡
	let Youjian=Array.from(conYoujian)
	let Zuojian=Array.from(conZuojian)
	newcontaint.forEach(function(element,index){
		console.log(Youjian[index]);
		Youjian[index].onclick=function(){
			if(flag3==2){
				return;
			}
			flag3++;
			animate(element,{left:flag3*-296},300);
			console.log(index);
			let conBtn=$(".yuan",cBtn[index]);
			conBtn.forEach(function(element){
				element.classList.add("noclick");
				element.classList.remove("click")
			})
			conBtn[flag3].classList.remove("noclick");
			conBtn[flag3].classList.add("click");
			// console.log(Containt.style.left)
		}
	});
	newcontaint.forEach(function(element,index){
		// console.log(Youjian[index]);
		Zuojian[index].onclick=function(){
			if(flag3==0){
				return;
			}
			flag3--;
			animate(element,{left:flag3*-296},300);
			console.log(1);
			let conBtn=$(".yuan",cBtn[index]);
			conBtn.forEach(function(element){
				element.classList.add("noclick");
				element.classList.remove("click");
			})
			conBtn[flag3].classList.remove("noclick");
			conBtn[flag3].classList.add("click");
			// console.log(Containt.style.left)
		}
	});

	newcontaint.forEach(function(element,index){
		// newc[index].forEach(function(elem){
		// 	console.log(newc)
		let conBtn=$(".yuan",newc[index]);
		let newconB=Array.from(conBtn);
		newconB.forEach(function(ele,i){
			ele.onclick=function(){
				console.log(6)
				animate(element,{left:i*-296},300);
				console.log(1);
				conBtn.forEach(function(elem){
					console.log(elem)
					elem.classList.add("noclick");
					elem.classList.remove("click");
				})
				conBtn[i].classList.remove("noclick");
				conBtn[i].classList.add("click");
				}
	})
})
	// 大导航
	newnava.forEach(function(element,index){
		navli[index].onmouseover=function(){
			newnavitem[index].style.display="block";
		}
		navli[index].onmouseout=function(){
			newnavitem[index].style.display="none";
		}

	})

	// 明星单品
	function starmove1(){
		if(flag1==true){
			if(i<2){
				animate(startu,{left:i*-1239})	
				i++;
			}
			else{
				flag1=false;
			}
		}

		if(flag1==false){
			if(i>0){
				animate(startu,{left:i*-1239})	
				i--;
			}
			else{
				flag1=true;
			}
		}
	}
	// 为你推荐
	function starmove2(){
		if(flag2==true){
			if(j<2){
				animate(xinstartu,{left:i*-1239})	
				j++;
			}
			else{
				flag2=false;
			}
		}

		if(flag2==false){
			if(j>0){
				animate(xinstartu,{left:i*-1239})	
				j--;
			}
			else{
				flag2=true;
			}
		}
	}
	
// 	错误的小广告
	// let speed=-500;
	// function starmove1(){
	// 	let wid=startu.offsetLeft;
	// 	console.log(wid);
	// 	wid=wid+speed;
	// 	if(wid<=star.offsetWidth-startu.offsetWidth){
	// 		wid=star.offsetWidth-startu.offsetWidth
	// 	// 	console.log(wid)
	// 		speed=500;
	// 		console.log(speed);
	// 	}
	// 	if(wid>=0){
	// 		wid=0;
	// 		speed=-speed;
	// 	}
	// 	startu.style.left=`${wid}px`;
	// }
	// starmove1();
	
	// 错误方法
	// let a=setInterval(starmove1,3500);
// 	// let b=setInterval(starmove2,200);
// 	// function starmove1(){
// 	// 	animate(startu,{left:-1239});
// 	// 	if(startu.offsetLeft<=startu.offsetWidth-star.offsetWidth){
// 	// 		clearInterval(a);	
// 	// 	}
// 	// 	console.log(startu.offsetLeft)

// 	// 	b=setInterval(starmove2,1800)
// 	// }
// 	// function starmove2(){
// 	// 	animate(startu,{left:0});
// 	// 	console.log(startu.offsetLeft)
// 	// 	if(startu.offsetLeft>=0){
// 	// 		clearInterval(b);
// 	// 	}
// 	// 	a=setInterval(starmove1,1800); 
// 	// }
	// 点击事件，利用点击次数来确定左边距离是多少，左边距离的范围是-num*width~0，
	// 并且左右可以点击的次数是固定的，通过Num加减来确定
	let num=0;
	starright[0].onclick=function(){
		if(num==2){
			return;
		}
		num++;
		animate(startu,{left:num*-1239})
	}
	starright[1].onclick=function(){
		if(num==0){
			return;
		}
		num--;
		animate(startu,{left:num*-1239})
	}
// // 导航

// // 侧导航
	for(let i=0;i<asideli.length;i++){
		asideli[i].onmouseover=function(){
			let item=$(".item",this);
			// console.log(item);
			item[0].style.display="block";
			// animate(item[0],{opacity:1},200)
		}

		asideli[i].onmouseout=function(){
			let item=$(".item",this);
			// console.log(item);
			item[0].style.display="none";
			animate(item[0],{opacity:0},200)
		}
	}
	
// // 轮播
// // 自动播放
// 	// 先将next放置在框外部右边
// 	// 将now往左移出框外
// 	// 再将next移入框内
// 	// 将Next赋值给now
	function move(){
		next++;
		if(next==bannerli.length){
			next=0;
		}
		bannerbtn[now].style.background="rgba(22,22,27,0.5)";
		// bannerbtn[next].style.background="rgba(124,124,129,0.5)";
		bannerli[next].style.left=`${imgW}px`;		
		animate(bannerli[now],{left:-imgW});		
		animate(bannerli[next],{left:0},function(){
			// 一个图片执行完进去操作时将false为true,通道打开
			flag=true;
		});
		animate(bannerli[now],{left:-imgW});				
		now=next;		
	}

// // 左击右击
	left.onclick=function(){
		// 如果flsg是false则不执行下边的move,因为flag是false则表示正在由其他图片执行
		// 进入操作，这个不可以执行
		// 如果flag是true,则表明这个操作可以执行
		if(!flag){
			return;
		}
		move();
		flag=false;
// 		// 一个图片执行进去操作时将通道关闭
	}
	right.onclick=function(){
		moveR();
		if(!flag){
			return;
		}
		moveR();
		flag=false;
// 		// 一个图片执行进去操作时将通道关闭
	}
	function moveR(){
		next--;
		console.log(bannerli[now]);
		if(next<0){
			next=bannerli.length-1;
		}
		console.log(bannerli[next]);

		bannerbtn[now].style.background="rgba(22,22,27,0.5)";
		bannerbtn[next].style.background="rgba(124,124,129,0.5)";
		bannerli[next].style.left=`${-imgW}px`;	
		animate(bannerli[next],{left:0},function(){
			// 一个图片执行完进去操作时将false为true,通道打开
			flag=true;
		});	
		animate(bannerli[now],{left:imgW});
		// console.log(bannerli[now]);
		
		now=next;

	}

// // 单击
	for(let i=0;i<bannerbtn.length;i++){
		bannerbtn[i].onclick=function(){
// 			// 循环的i就相当于next,要把next进入框，先把next放在图片框右边
// 			// 再将now移动到框的左边
// 			// 再将i移入框中
// 			// 最后将现在的这个i赋值给轮播的now和next，重新开始
// 			// 注意：现在轮播的就是i时，函数直接结束
			if(now==i){
				return;
			}
			bannerbtn[now].style.background="rgba(22,22,27,0.5)";
			bannerbtn[i].style.background="rgba(124,124,129,0.5)";
			bannerli[i].style.left=`${imgW}px`;
			animate(bannerli[now],{left:-imgW});
			animate(bannerli[i],{left:0});
			now=next=i;
		}
	}

// // 移入停止
	banner.onmouseover=function(){
		clearInterval(t);
	}
	banner.onmouseout=function(){
// 		// 必须赋值给t,否则有两个时间函数
		t=setInterval(move, 3000);
	}
}




// 吴亦凡


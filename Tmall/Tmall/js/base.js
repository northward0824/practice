/*
* @Author: 张秀荣
* @Date:   2017-09-19 18:30:45
* @Last Modified by:   张秀荣
* @Last Modified time: 2017-09-20 15:03:09
*/


// 需要使用范围调用时，先把范围range获取出来，且赋予给一个变量a，再获取目标o,格式为：
	// 	$("o",a),注意：变量a没有引号，

// 类名与标签名都有范围

function $(select,ranger){
		ranger = ranger ? ranger :document;
		var first=select.charAt(0);
		if(first=="."){
			return gotclassname(select.substring(1),ranger);
		}
		else if(first=="#"){
			return document.getElementById(select.substring(1));
		}
		else if(/^[a-z][a-z1-6]{0,7}$/.test(select)){
			return ranger.getElementsByTagName(select);
		}
	}


// 类名的兼容性设置
	// ranger是一个对象，调用时不加引号
function gotclassname(classname,ranger){
		ranger = ranger ? ranger :document;
		if(false){
			return ranger.getElementsByClassName(classname);
		}else{
			var newarr=[];
			var all=ranger.getElementsByTagName("*");
			for(var i=0;i<all.length;i++){
				if(checkclass(all[i].className,classname)){
					newarr.push(all[i]);
				}
			}
		return newarr;
		}
	}


// 将一个元素的，用一个引号包住的几个类，通过空格分割开来组成数组，再把每个单独
// 的类和需要取的那个类名做比较，只要有相等的就返回true，将这个元素放入最后的那个数组中
function checkclass(className,classname){
		var arr=className.split(" ");
		for(var i=0;i<arr.length;i++){
			if(arr[i]==classname){
				return true;
			}
		}
		// if(arr.includes(classname)){
		// 		return true;
		// }
	}






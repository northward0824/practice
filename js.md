## 9.4

### 1.历史

### 2.干什么

​	数据验证

​	操作页面中的元素内容、样式、属性

​	动态地添加或删除页面中的元素

​	动画

​	cookie	本地存储

​	ajax,动态获取数据

### 3.组成

​	ECMAscript

​		基础语法：变量	数据类型		运算符	执行流程		函数		

​	BOM，浏览器对象模型

​		地址		历史记录		

​	DOM

​		节点



### 4.引入方式

​	`<script></script>`页面任意位置

调试工具

警视框

		alert(1);
		alert('a');
		alert('哈')；
控制台

		   console.log('hah');
文件写入

		  document.write('hah');
### 变量

放置数据的容器

#### 声明变量

​	var     变量名

​			变量名：数字、字母、下划线、$都可以

​					不可以数字开头，区分大小写

​					关键字、保留字不能作为变量名

​					驼峰命名法

#### 变量赋值方式

​	先声明，后赋值		

​	`var a;		a=10;`

​	声明同时赋值

​	`var a=10;`

​	多个同时声明、赋值，逗号隔开

​	`var a=10,`

#### 注意

##### var

​	变量值可以更新修改

​	变量允许重复声明，新的变量会覆盖旧的变量，如果新的不赋值，则还是旧值；如果赋值，新值会覆盖旧值

​	声明一个变量要用var去修饰这个变量，如果没有用var修饰，也没赋值，会报错

​													直接进行赋值，不会报错，这个会成为全局变量

```CSS
alert(a);	报错

a=10;		全局变量
alert(a);		10;
```



​	变量声明未赋值，或者在赋值之前调用，默认undifined

```CSS
var a;
alert(a);		undefined

alert(a);	undefined
var a=10;
```

##### let:

```CSS
不可以在声明、赋值前使用，赋值前部分成为暂时性死区
alert(a);		报错
var let a;
在同一个作用域中不可以重复定义赋值
let a=10;
let a=20;		报错
```

块级作用域：

​	Let带来的块级作用域，由大括号生成

```CSS
{
  let num=10;
  {
  	let num=20;
	}
}
```

消除var缺点

```CSS
// var arr=[];
// for(var i=0;i<10;i++){
// 	arr[i]=function(){
// 		alert(i);
// 	}
// }
// arr[2]();		输出10，i这个变量在循环完后成为10

// var arr=[];
// for(let i=0;i<10;i++){
//  arr[i]=function(){
//      alert(i);
//  }
// }
// arr[2]();        输出2，i这个变量有1~10
let变量每次循环都是一个新的块级作用域，会记录每次i的值
```

​	循环完成后释放全局变量i

```CSS
for(var i=0;i<10;i++){
	console.log(i);
}
console.log(i);		/10

for(let i=0;i<10;i++){
	console.log(i);
}
console.log(i);		/报错，i的作用域只在循环中
```

​	局部变量覆盖全局变量

```CSS
// var num=10;
// function fn(){
// 	alert(num);			undefined
// 	if(true){
// 		var num=20;			var的作用域在fn这个函数中
// 		alert(num);			20	
// 	}
// }
// fn();
// alert(num);				10

var num=10;
function fn(){
	alert(num);			10
	if(true){
		let num=10;			let的作用域在if这个块中
		alert(num);			10
	}
}
fn();
alert(num);			10
```

##### const ，识别块级作用域

```CSS
const a=2;赋值后不可以修改,声明同时赋值
```

### 数据类型

根据在内存中的存储位置分为两种

​	初始数据：放在栈区，容量小，读取速度快

​		undefined

​		string

​		number

​		boolean

​		null	

​	复合数据：放在堆区，容量大，读取速度慢

​		object

#### 检查数据

typeof 变量名

|   数据类型    |               值                |  typeof   |
| :-------: | :----------------------------: | :-------: |
| undefined |           undefined            | undefined |
|  boolean  |           true,false           |  boolea   |
|  object   |              null              |  object   |
|  number   | 十进制、二进制(0b)、八进制(0o，0)、十六进制(0x) |  number   |
|  string   |        "        "，'   '        |  string   |
|  object   |           属性和方法的无序集合           |  object   |

## 运算符

### 算数运算符

​		+	-		*		/		%

​		取余得到范围之内的数

​		加号可以进行字符串的拼接，同类相加，不同类连接

​		减号数字与字符串可以相减

​	var++	先参与运算，后自增

​	++var	先自增，后参与运算

​	常量不可以自增自减

​	undefined，false不能进行加法，	返回nan	不是一个数值

​	true相当于1

## 9.5

/n换行

### 模板字符串	（esc）下方

​	保持在代码中的原有格式，变量用${var}表示

### 赋值运算符

​	=	+=	-+	*=	/=		%=

a+=5	即		a=a+5

### 比较运算符

​		>	  <    	    >=	   <=   	==		===（全等）

运算结果是布尔值：

​	两个数字比较，正数>0>负数

​	字符串比较		A（65）a（67）	，字符串按照ASCII值进行比较大小，从左到右开始比较

```CSS
alert("aa"<"b")			true		ASCII中a是97,b是98		97<98,所以字符aa<b
```

​	两个数字型的字符串比较

```css
alert("10">"2")   false		先比较首位，ASCII中1是49，2是50，49>50,所以字符"10"<"2"
```

​	数字和字符串比较，先尝试将字符串转为数字，成功后两个数字比较，否则，转化值为Non，表达式返回值为false

```css
		 alert(10>"2")				true
		 alert(10>"2px")			false
```

​	===必须两个的数值类型也相同

```CSS
		// alert(1=="1")		true
		// alert(1==="1")		false
```

​	数字和布尔值比较时，false=0,	true=1

​	默认undefined==null

### 逻辑运算符

***先判断真假，再判断数值***

**所有常数，除了0为false，布尔值均为true**

**undefined、null、""、0都为false**

###### &&（与）：两个为真才为真，一个假则全假

第一个为真，则判断第二个

第一个为假，第二个不进行判断与运算

即：整个表达式为真时显示最后一个真，为假时显示第一个假

```CSS
		// var num=12;
		// console.log(0 && num++)		0		/num自增就没有进行计算，因为第一个是假的
		// console.log(num)			12
		// console.log(num++ && 0)		0
		// console.log(num)			13
```

###### ||（或）：一个为真则真，两个假才假

第一个为假，则判断第二个

第一个为真，第二个不进行判断与运算

即：整个表达式为真时显示第一个真，为假时显示最后一个假

```CSS
		var num=12;
		console.log(1 || num++)		1			//num自增就没有进行计算，因为第一个是真的
		console.log(num)		12
		console.log(num++ || 1)		12
		console.log(num)		13
```

new创建一个对象，delete删除对象的属性和方法，+  -还能表示正负

##### 三元运算符：

```CSS
var flag=21
flag%2===0?alert(true):alert(false)；

如果flag是偶数，返回true,是奇数，返回false
```

### 执行流程

#### 1.顺序结构

#### 2.分支（选择）结构（条件是范围）

##### 单路

```CSS
if(条件){
  //条件成立后执行的代码
}
```

##### 双路

```CSS
if(条件){
   //条件成立后执行的代码
}else{
  //条件不成立执行的代码
}
```

##### 多路

```CSS
if(条件1){
  条件1执行的代码
}else if(条件2){
  条件2执行的代码
}else if(条件3){
  条件3执行的代码
}
······
else{
  上述条件都不满足执行的代码
}
```

var name=prompt("请输入你的成绩",60);		输入类型为字符串

分支结构条件中不要有重复

#### 3.switch（条件是某个确定的值）

```CSS
var week=1*prompt("请录入",1);		
		switch(week){
			case 1:
				alert("一组");
				break;
			case 2:
				alert("二组");
				break;
			case 3:
				alert("三组");
				break;
			case 4:
				alert("四组");
				break;
			case 5:
				alert("五组");
				break;
			case 6:
				alert("六组");
				break;
			case 7:
				alert("七组");
				break;
			default:		
				alert("输入错误");
		}

/1*可以转换输入的数据类型为数字，或者也可以将case后的条件1、2等加引号，改为字符型
```

### 4.循环

#### for循环（次数）

```CSS
		for(var i=1;i<=10;i++){
		 	alert(1);					/输出10个1
		 }
```

#### while循环（条件）——先判断再执行

```
	 var i=1;
	 var sum=0;
	 while(i<=10){
	 	sum=sum+i;				输出1~10相加的和
	 	i++;
	 }
	 document.write(sum);
```

#### do-while循环（条件）——先执行再判断

```CSS
	var i=1;
	var sum=0;
	do{									输出1~10相加的和
		sum=sum+i;
		i++;
	}while(i<=10)
	document.write(sum);
```

初始条件不满足时，while一次循环都没有，do-while进行一次循环

continue跳出本次循环，条件满足时会继续下次循环。break终止整个循环

## 9.6

### 数组

存储一系列相同或相关的数据，任意数据类型

```CSS
	var a=[0,1,2,3, ,];
	下标取值范围：0~length-1
	// console.log(a);		/查询数组全部内容
	// console.log(a[0]);		/第一个内容
	// console.log(a[1]);		/第二个内容
	// console.log(a.length);		/查询数组长度
	// console.log(a[a.length-1]);		/查询倒数第二个
	// a[5]=5;			/创建一个新的内容
	// console.log(a[5]);		/查询新内容
	// console.log(a[4])		/未定义的内容，返回undefined
	// 遍历
	// for(i=0;i<=a.length-1;i++){
	// 	console.log(a[i])
	// }
```

二维数组：

```CSS
	var a=[0,1,2,3,4];
	var b=[5,6,7,8,9];
	var c=[a,b];		/二维数组
```

### 函数

```CSS
重复声明时会覆盖前面的
function name(形参（rows），形参(cols)){
  
}
调用：name(实参(2)，实参(3));		任意位置
或者：
var a=function(形参（rows），形参(cols)){
  
}
调用:	a(实参(2)，实参(3));		函数之后
自调用函数，立即执行：
(function name(){
  
}){}

返回值：return:;
	在函数调用的地方返回一个值
	终止函数，在return之后的函数全部不执行
	默认值Undefined
	可以是任意数据类型
```

### 参数：

动态的改变函数体内部的变量

形参：没有具体的值，函数定义时写在函数小括号内，可以接收实参传过来的值

实参：函数调用时小括号内的值，传递信号给实参

注意：1.形参可以是任意数据类型

​	    2.形参形参名字是可以相同的

​	    3.多余的形参默认undefined

​	    4.实参比形参数多时：

​		不设定形参，在函数内部使用arguments,

​		arguments（不是数组）可以接收所有传过来的实参值

```CSS
name(a,1,2,3);
function name(arr){
  console.log(arguments)	/arguments=[a,1,2,3]
}   
```

​		剩余参数（形参）：接收没有形参可以对应的实参，是一个数组

​			  	    必须写在最后，如果没有剩余，是一个空数组

```CSS
name(a,1,2,3)
function name(arr,...value){		/数组 value=[1,2,3]
	~~~~~~~rest 	(数组)
    ~~~~~~~...rest(一系列数字)
}	
...是逆运算
```

​	5.默认参数写在最后

​		If-else

​		三元运算符

```CSS
 type=type==undefined?"默认值":type;
```

​		或

```css
type=type||"默认值";
```

​		type="默认值"（传入实参undefined，type还是默认值）

### 作用域

​	全局

​	局部

```CSS
	// a();
	// var num=10;
	// function a(){
	// 	alert(num);		undefined	函数内部有自己的变量时，不使用外部的变量
	// 	var num="a";		定义了一个新的num
	// 	alert(num);		a	弹出函数内部的变量num
	// 	a1();		调用a1
	// 		function a1(){
	// 			alert(num);		a	函数a1的执行环境是a1,并且没有自己的num,所以可以使用a1的变量num
	// 		}
	// }

	
	// var num=10;
	// function a(){
	// 	alert(num);		10	没有自己的num变量，使用外部的num变量
	// 	num="a";		外部变量Num被修改
	// 	alert(num);		a	弹出上边被修改的num
	// 	a1();
	// 		function a1(){
	// 			alert(num);			undefined	使用自己的num,但还没有被定义
	// 			var num=12;
	// 		}
	// }
	// a();
```



### 环境

​	宿主

​	执行

### 预编译

​	按照从上到下  script

​	function		变量var

## 9.9

### 函数做形参

```CSS
	// var result=a(2,3,add);
	// console.log(result);

	// function add(num1,num2){
	// 	return num1+num2;			运算函数
	// }

	// function a(num1,num2,fn){
	// 	return fn(num1,num2)			直接应用
	// }
```

### 映射

```CSS
	   var a=[0,1,2,3];
	// var result=change(a,function(value){		function(value)是回调函数
	// 	return value*2;
	// })
	// console.log(result);

	// function change(arr,fn){
	// 	var newarr=[];
	// 	for(var i=0;i<arr.length;i++){
	// 		newarr[newarr.length]=fn(arr[i]);
	// 	}
	// 	return newarr;
	// }
```

### 递归函数

```CSS
fn(0);
function fn(num){
	if(num<5){
		fn(++num);	
	}
	alert(num);		弹出5,5,4,3,2
}
```

### 拷贝

浅拷贝(复制地址)：一个改了另一个也会改

```CSS
var arr=[1,2,3]
var arr1=arr
```

深拷贝（复制内容）：两个无关

```CSS
var arr=[1,2,3]
var arr1=[];
for(var i=0;i<arr.length;i++){
  arr1[i]=arr[i];
}
```

## 9.11

### 闭包函数

```CSS
function fn(){
	var name=10;
	return fn1;		返回函数fn1本身
	function fn1(){
		num++;
		return num;
	}
}
var result=fn();	调用函数fn1本身
alert(result());		加括号后，函数fn1在外部被执行，返回num:11
```

### 箭头函数(主要用于回调函数)

```CSS
var fn=function(a){
	return a;
}
即：
var fn=a=>a;				
alert(fn(10));				
没有形参时：  var fn=()=>a;
参数很多时：	var fn=(a,b)=>a*b;	
代码很多时：	var fn=(a,b)=>{
  。。。
  return[a,b];
}
箭头函数中没有argumennts对象
```

### 内置顶层函数

内置：js自己定义的函数，只需要会用

顶层：在页面的任意位置可以使用

#### 强制类型转换

escape/unescape		对汉字进行编码、解码

Number	  本身就是数字型转换成数字	null转成0，undefined转成nan

​	数字型：

​			数字型的00123会被默认为八进制：83

​	字符串型：

​			非数字型字符串（“a,b,c,d”）不可以识别。转为nan

​			字符串的“0123”转数字123

​			“0o123”识别八进制，转为83

Boolean			undefined	nan		null		0		""		false	

parseInt			字符串转为整型数字	

​				字符串必须以数字、空格、正负号开始，

​				转换时，第一个数字字符开始，到第一个非数字字符结束

​				如果第一个是字符则返回nan

parsefloat			字符串转为小数	

isNan			提问？不可以转为数字			如果可以转返回false，不可以转返回true				

#### 隐式类型转换

​	算数运算符：*	-	/

​	关系运算符

​	逻辑运算符

​	if

```CSS
num=4;
if(num%2){				num%2=1时，返回true，执行if条件
	alert(num);
}else{					num%2=0时，返回false，执行else条件
	alert(++num);		5
}
```

​	while

​	三元表达式

## 9.12

### 对象

注意：

​	访问不存在的属性：undefined		
​    	调用不存在的方法：报错

1. jason：

   ``` CSS
   注意：每个属性完后使用逗号，而不是引号
       // let he = {
   	// 	"age" : 21,
   	// 	"sex" : "man",
   	// 	"name" : "su",
   	// 	"say" : function(){
   	// 		alert(1)
   	// 	 },
   	// };
   	// console.log(he);
   ```

   2.构造函数：

   ```CSS
   第一步：创建类
     function person(){
     	   
     }
   第二步：创建对象：
     let name = new person();
     let name1 = new person();

   第三步：添加属性：
     name.age = 18;
     	   添加方法:
     name.say = function(){}
   访问：
     name.something

   或者在构造函数时直接添加属性：
     function phone(color,price,size){
   		this.color = color;
   		this.price = price;
   		this.size = size;
   		this.all = function(all){
   			alert(all)
   		};
   	}
     构造对象：
       let iphone = new phone("seablue",500,"5");		/iphone拥有上述全部属性包括函数方法all

     访问属性：
   	iphone.all("ha");		弹出ha
   	console.log(iphone);
     也可以这样访问属性：
       // console.log(iphone["size"]);
   	// iphone["all"](1);
   	alert(ipone["all"](1));		先弹出1,再弹出undefined,因为all这个函数没有返回值

     遍历属性：
   	for(let i in iphone){
   		console.log(`${i}---${iphone[i]}`);		/此处的i是"size"，所以需要使用[]
   	}
   ```

   3.通过类构造函数：

   ```CSS
   方法最好写在constructor方法外（例如study、play）
      定义类：
      class Student{
     		constructor(){
     		  this.name="";
             this.sex="";
             this.say=function(){
   			}
   		}
           study(){
     	        alert("学习")
            };
        	play(){
     	        alert("玩耍")
            }
      }
      定义对象：
      let he = new Student();
      访问对象;
      he.study();
      console.log(he);

      或者：
      class Student{
       	constructor(name,sex){
             	this[1] = "a";
        	    this.name = name;
               this.sex = sex;
               this.say = function(value){
   				alert(value);
   		   	}
   	    }
           study(){
        		alert("学习")
           };
           play(){
        	    alert(this.name);			/一个方法引用自己的属性
           };
           speech(value){
           	this.say(value);		  	/一个方法引用另一个方法
           }
       }
       let he = new Student("su","man");
       console.log(he);
       he.study();			学习	
       he.play();			su		
       he.speech("演讲")				演讲		
       he["say"]("good");   		  good
   	console.log(he[1])			  a		/使用数字下标时必须使用[]访问
   ```

   ​



为什么做

目的

功能

如何盈利、推广

技术

创建自己的新数组时：

​	返回本数组：`return this;`

​	倒着遍历时：`i=this.length-1`

​	添加一些功能需要将元素放入一个创建的新对象：不可以创建新数组

​		`let newarr = new myArr();`

​		`newarr.push(this.[i]);`			引用插入构造函数的push方法

​		注意：赋值给新对象不可以使用`newarr[newarr.length]=this[i]`因为this的length不会动态更新，长度     		

​			   只有1，只能赋值一个

​			   也不能使用`newarr[i]=this[i]`，因为这样会将i的位置也一起赋值给newarr，即：

​				如果筛选偶数的话，

​				对象arr：0 : 1，1 : 2，2 : 3，3 : 4，

​				新对象newarr:1 : 2，3 : 4，不按照顺序排列

## 9.13

### 原型对象：

​	这是构造函数的属性，不是对象的属性

​	**一般把属性放入构造函数中，方法放入原型对象中,原型对象中的方法是公用的，对象的方法都存在其中，而不是存在某个对象中**

```CSS
function phone(color,price,size){
		this.color = color;
		this.price = price;
		this.size = size;
	    this.all = function(){
		alert(all)
		};
	}
	phone.prototype = {
		one : function(){
			alert(all)
		}
	}
	也可以在外边添加为prototype添加属性：
	phone.prototype.eat = function(){
  		alert(eat);
	}
	let iphone = new phone();
	let iphone1 = new phone();

	// console.log(iphone==iphone1);		false	比较的是这两个对象的位置
	// console.log(iphone.all()==iphone1.all());		true	比较这两个函数的返回值undefined
	// console.log(iphone.all==iphone1.all);		false	比较这两个函数的存储位置，一个在iphne															中，另一个在iphone1中
	

	console.log(iphone.one==iphone1.one)		true	比较这两个函数的存储位置，都在prototype中
	iphone.eat();			弹出eat

```

删除构造函数中的属性：`delete name.sex;`		返回undefined

删除对象：`name=null;`				返回null

判断某个对象是否从某个构造函数中实例化的：`name  instanceof functionname`，是的话返回true

### 继承：

```CSSS
function person(){};
function student(){};

student.prototype=new person(); 子函数student的原型对象继承父函数person的属性
let someone=new student();	someone既有student的属性，也有person的属性

同一个方法优先级：子函数构造函数>子函数原型对象>父函数构造函数>父函数原型对象

__proto__是对象的属性，指向他的构造函数的原型对象
	console.log((su.__proto__)==student.prototype);
	console.log((student.prototype.__proto__)==person.prototype);
	console.log(person.prototype.__proto__==Object.prototype);
	全部返回true
```

### 内置顶层对象

#### string

​	属性：

​	length :返回字符串的长度，不区分中英文

​	constructor :返回构造函数

​	方法：

​	查找：对原来字符串无影响

​	str.charAt)(n) :返回指定位置的字符

​	str.charCodeAt)(n) :返回指定位置的字符对应的编码

​	String.fromCharCode)(n) :返回Unicode编码对应的字符串

​	位置：

​	str.lndexOf("ah") 	返回第一个字符"ha"的位置

​	str.lastlndexOf("ah")	返回最后一个字符"ha"的位置，没有返回-1

​	模拟是否存在的问题：includes

​	存在

​	includes 判断一个字符串中是否存在另一个字符串，存在返回true,否则false

​	截取：对原来字符串无影响

​	slice(start,end)：从指定位置开始，到指定位置结束，不包括第end个

​					支持负数，从末尾开始计数

​					省略结束位置，从开始位置截取到字符串结束

​	substring：不支持负数

​	substr(start,num)：从指定位置开始，截取Num个

​					  省略结束位置，从开始位置截取到字符串结束

​	替换：

​	rePlace("aba","---")：将aba替换成---，对原字符串没有影响，且只能换一次

​	重复：

```CSS
let star = "*".repeat(n);    将*重复n次
```

​	匹配：

​	match：在某个字符串中匹配另一个字符串

​			匹配成功：返回数组（0，index，input）

​			返回失败：null

​	查找：

​	search	查找

​	去空：对原来字符串无影响

​	trim		去掉空格

​	转换

​	split("something"，num) 	在字符串中有something的地方拆分开，组成一个数组

​							num确定分割后数组的长度

​	大小写转换：

​	toUpperCase		toLowerCase	
// 单行注释，在注释内容前加符号 “//”。 

document.write("引用JS文件!");
var mystr="我是";
var mychar="JavaScript";
document.write(mychar+"<br>"); //输出HTML标签，并起作用，标签使用""括起来。
document.write(mystr+mychar+"的忠实粉丝~");


/*
JS是区分大小写的，如：classname和ClassName是不一样的。同时注意方法、属性、变量等的大小写 

 javascript作为一种脚本语言可以放在html页面中任何位置，但是浏览器解释html时是按先后顺序的，所以前面的script就先被执行。比如进行页面显示初始化的js必须放在head里面，因为初始化都要求提前进行（如给页面body设置css等）；而如果是通过事件调用执行的function那么对位置没什么要求的。

 变量名 必须以字母、下划线或美元符号开头，后面可以跟字母、下划线、美元符号和数字。正确:           
    mysum            
    _mychar         
    $numa1    

    JavaScript 创建动态页面。事件是可以被 JavaScript 侦测到的行为。 网页中的每个元素都可以产生某些可以触发 JavaScript 函数或程序的事件。

	比如说，当用户单击按钮或者提交表单数据时，就发生一个鼠标单击（onclick）事件，需要浏览器做出处理，返回给用户一个结果。 

	onclick  鼠标点击
	onmouseover 鼠标经过
	onmouseout  鼠标移开     
	onchange    文本框内容改变
	onselect	文本框内容被选中
	onfocus	 	光标聚焦
	onblur		光标离开
	onload      网页导入
	onunload 	关闭网页

	JavaScript 中的所有事物都是对象，如:字符串、数值、数组、函数等，每个对象带有属性和方法。

	window对象是BOM的核心，window对象指当前的浏览器窗口。

	

*/
console.log("这是一个js脚本！");

// js字面量
// 一个字面量就是的一个常量，有数字字面量，可以是整数、小数或者科学计数比如打印如下数字字面量：
console.log(3.14);
console.log(123e5);
console.log(1001);

// 还有字符串字面量，字符串必须使用单引号或者双引号
console.log("hello world！");
console.log('你好，世界！');

//还有表达字面量，就是表达式的值作为一个字面量，比如：
console.log(5 + 6);
console.log(5 * 6);

//数组字面量，且支持混合数组，数组内可以包含各种对象和数据类型，比如：
console.log([40, 100]);
console.log([40, 100, 12.5, 'abc', "345"]);

//对象字面量，感觉更像一个结构体……
var me = { firstName: "chan", lastName: "jeason", age: 20 };
console.log(me);

//函数字面量
function getCurrentTime(inputVar) {
    console.log("input var is :" + inputVar)
    return Date();
}
console.log(getCurrentTime(23333));

//js解释器，有时候会j将几行合并在一起解释，为了避免误解释，确保和Java/C++一样的以分号作为断句的习惯！！！！

//js变量，变量用与存储数据值，js使用关键字 var 来定义变量，使用等号进行赋值
var x, y, z;
x = 5;
y = 6;
z = 7;

//变量可以通过变量名访问其值或者对其值进行赋值修改。变量通常是可变的，字面量是恒定的，字面量相当于存储在C++中的静态存储区内存中。





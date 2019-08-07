function printDate() {
    console.log(Date());
}

var Person = {
    name: new String(),
    age: new Number(),
    country: new String(),
    doSth: printDate()  //这一步js解释器会以为你想把函数返回值作为变量值赋值给  doSth 变量，而该函数是无返回值的，因此赋予的值为 undefined
    //若换成 doSth: printDate，解释器会以为你想把这个 函数名赋值给变量，即 [Function: printDate] 赋值给变量
};  //这是类模板，想要生成相应的类还是要手的

var PersonA = Person;//或者 var PersonA={};  var PersonA=new Object();
PersonA.age = 12;
PersonA.country = "China";
PersonA.name = "jeason";
console.log(PersonA);


//原始模式的改进模式
function newPerson(age, country, name) {  //函数名不能和之前的变量名重合，虽然是弱类型语言……
    return { age: age, country: country, name: name };
}
var personAA = newPerson(12, "China", "Jeason");
var personBB = newPerson(12, "China", "Jackson");
console.log(personAA, personBB);
console.log("对象的构造函数及真正的类型是：" + personAA.constructor);


//构造函数模式，解决了从原型对象生成实例的问题
//所谓“构造函数”，其实就是一个普通函数，但是其内部采用了this变量。
//对构造函数使用一次new运算符，就可以生成一个实例，并且this变量会绑定在实例上。
function CoustructorForPerson(age, country, name) {
    this.age = age;
    this.country = country;
    this.name = name;
}
var pesonJeason = new CoustructorForPerson(12, "China", "Jeason");
console.log(pesonJeason.name);
//使用构造函数创建出来的对象，都自动包含的constructor属性，值为构造函数的函数名
//本质上，原始模式对象的constructor其实是Object
console.log(pesonJeason.constructor);  //打印创造自己的真正的构造函数名字/类名
console.log(pesonJeason instanceof CoustructorForPerson);//是否为这个类的实例 true
console.log(pesonJeason instanceof Object);//是否为这个类的实例 true
//可以看出！！所有对象都默认继承于Object，因此都是Object的实例！！和java、c++一样


//构造函数模式缺点:写死的属性和方法会造成内存浪费，比如下面的result和sleep
function PersonTest(name) {
    this.name = name;
    this.sleep = function () {  //在类中定义类实例
        console.log("sleep函数被执行了！")
    };
    this.result = "dead";
    this.doSth2 = printDate();
}
var personTest = new PersonTest("Jeason");
personTest.sleep();//调用实例方法
var personTest2 = new PersonTest("Jeason");
//要解决公共属性或者方法的资源浪费问题，采用下面的模式ProtoType模式


//ProtoType模式
//JavaScript规定，每一个构造函数 或者 原型 都有一个prototype属性，指向另外一个对象。
//这个对象的所有属性和方法，都被构造函数的实例继承。
//给原型增加prototype属性的方式对上面的类进行改造
function PersonTest2(name) {
    this.name = name;
}
PersonTest2.prototype.result = "dead";//通过类名添加属性
PersonTest2.prototype.sleep = function () {//通过类名添加实例方法
    console.log("sleep函数被执行了！");
};
//再生成实例，实例的type属性和live()方法，其实都是同一个内存地址，
//指向prototype对象，提高了运行效率。
var personTest3 = new PersonTest2("jeason");
console.log(personTest3.result);
console.log(personTest3.sleep());//先打印函数体中的文字，再打印函数的返回值“undefined”


//配合protptype而存在的一些方法
//isPrototypeOf，判断某类的prototype属性是否被某实例继承了
console.log(PersonTest2.prototype.isPrototypeOf(personTest3));//true
//hasOwnProperty()，判断是否为自己独有的本地属性，而不是prototype共享的
console.log(personTest3.hasOwnProperty("result"));//false
console.log(personTest3.hasOwnProperty("name"));//true
//in 运算法，用于是否包含该属性，无论本地属性还是prototype属性
console.log("result" in PersonTest2);//fasle，类本身是不包含prototype属性
console.log("result" in personTest3);//true，实例化的时候才会自动包含prototype属性
console.log("sleep" in personTest3);//true

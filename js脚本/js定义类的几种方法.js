function printDate() {
    console.log(Date());
}


var Person = {
    name: new String(),
    age: new Number(),
    country: new String(),
    doSth: printDate()  //这一步js解释器会以为你想把函数返回值作为变量值赋值给  doSth 变量
    //若换成 doSth: printDate，解释器会以为你想把这个 函数名赋值给变量，即 [Function: printDate] 赋值给变量
};     //这是类模板，想要生成相应的类还是要手的

var PersonA = Person;//或者 var PersonA={};  var PersonA=new Object();
PersonA.age = 12;
PersonA.country = "China";
PersonA.name = "jeason";
console.log(PersonA);

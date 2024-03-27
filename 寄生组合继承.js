// 核心代码：
/*

改变子类构造函数的原型上的
原型指向+构造函数指向
Chinese.prototype = Object.create(Human.prototype)
Chinese.prototype.constructor = Chinese

在构造函数里用call调用父类的构造函数
function Chinese(name, age) {
  Human.call(this, name)
  this.color = 'yellow'
  this.age = age
}
*/
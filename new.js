const _new = function (constructor, ...args) {
  if (typeof constructor !== 'function') {
    throw new TypeError(`${constructor} must be a function`)
  }
  // 创建一个新对象，原型指向构造函数的原型对象
  // const obj = Object.create(constructor.prototype)
  const obj = {}
  obj.__proto__ = constructor.prototype
  // 将构造函数的this指向新对象。如果构造函数没有返回对象时，result为undefined，this指向obj
  // 如果构造函数返回了一个对象，this指向返回的对象
  const result = constructor.apply(obj, args)
  // 如果构造函数返回了一个对象，则返回该对象；否则，返回新对象
  return result instanceof Object ? result : obj
}

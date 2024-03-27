const _objectFreeze = (object) => {
  // 补全代码
  if (typeof object !== 'object' || object === null) {
    throw new TypeError(`the ${object} is not a object`)
  }

  const keys = Object.getOwnPropertyNames(object)
  const symbols = Object.getOwnPropertySymbols(object)

  ;[...keys, ...symbols].forEach((key) => {
    Object.defineProperty(object, key, {
      // configurable: false,
      writable: false,
    })
  })

  // Object.preventExtensions(object):防止对象被扩展和冻结原型链
  Object.seal(object) // preventExtensions + 不可被配置（且delete失效）删除与配置相关！
  // freeze = seal + 不可写
}

// Object.getOwnPropertyNames()方法返回一个由指定对象的所有自身属性的属性名（包括不可枚举属性但不包括 Symbol 值作为名称的属性）组成的数组。
// Object.getOwnPropertySymbols() 方法返回一个给定对象自身的所有 Symbol 属性的数组。

// Object.defineProperty() 方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性，并返回此对象。

// 当且仅当该属性的 configurable 键值为 true 时，该属性的描述符才能够被改变，同时该属性也能从对应的对象上被删除。

// configurable: false, // 如果下面使用的是Object.preventExtensions(object)而不是Object.seal()，则需要设置configurable: false

// 当 writable 属性设置为 false 时，该属性被称为“不可写的”。它不能被重新赋值

// Object.seal()方法封闭一个对象，
// 阻止添加新属性并将所有现有属性标记为不可配置。
// 当前属性的值只要原来是可写的就可以改变。
// 不会影响从原型链上继承的属性。但 __proto__ ( 已弃用 ) 属性的值也会不能修改。
// Object.seal的效果相当于: 在Object.defineProperty时将configurable设置成false，同时对对象调用Object.preventExtensions。

// Object.preventExtensions()方法让一个对象变的不可扩展，也就是永远不能再添加新的属性。
// 该方法使得目标对象的 [[prototype]] 不可变；任何重新赋值 [[prototype]] 操作都会抛出 TypeError。
// 这种行为只针对内部的 [[prototype]] 属性，目标对象的其它属性将保持可变。
// Object.preventExtensions(object)


const _shallowClone = (target) => {
  // es6
  // return Object.assign({},target)
  // return { ...target }

  if (typeof target !== 'object' || target === null) {
    throw new TypeError(`${target} is not a object`)
  }

  // 注意对数组情况的特判
  let obj = Array.isArray(target) ? [] : {}
  // let obj = {}
  for (let key in target) {
    if (target.hasOwnProperty(key)) {
      obj[key] = target[key]
    }
  }
  return obj
}

let obj = {
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3,
    },
  },
}

let obj2 = _shallowClone(obj)
obj2.b.d.e = 4
obj2.a = 3

console.log('obj', obj)
console.log('obj2', obj2)

let arr = [1, 2, 3, 4, 5]

console.log('arr', _shallowClone(arr))

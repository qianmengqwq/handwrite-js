// JSON.parse(JSON.stringify())
/*
环 引用丢失问题
不能正确处理new Date()，正则
undefined、symbol 和函数会被忽略。
*/
// hack:环
const _sampleDeepClone = (target) => {
  if (target === null || typeof target !== 'object') {
    return target
  }
  let copy = Array.isArray(target) ? [] : {}
  for (let key in target) {
    if (target.hasOwnProperty(key)) {
      copy[key] = _sampleDeepClone(target[key])
    }
  }
  return copy
}

// 用缓存的方式，既解决了环的问题，还解决了引用丢失问题，详情见下

const _completeDeepClone = (target, cache = new WeakMap()) => {
  if (target === null || typeof target !== 'object') return target

  let constructor = target.constructor
  if (/^(Function|RegExp|Date|Map|Set)$/i.test(constructor.name))
    return new constructor(target)

  if (cache.has(target)) return cache.get(target)
  const copy = new constructor()

  cache.set(target, copy)
  for (let key in target) {
    if (target.hasOwnProperty(key)) {
      copy[key] = _completeDeepClone(target[key], cache)
    }
  }
  return copy
}

const _deepClone = (target, cache = new WeakMap()) => {
  if (target === null || typeof target !== 'object') return target

  // 避免环
  if (cache.has(target)) return target

  // 没必要做太多判断
  const copy = Array.isArray(target) ? [] : {}

  cache.set(target, copy)

  for (let key in target) {
    if (target.hasOwnProperty(key)) {
      copy[key] = _deepClone(target[key], cache)
    }
  }

  return copy
}

// 引用丢失问题

let obj1 = {}

let obj2 = {
  a: obj1,
  b: obj1,
}

let copyObj2 = _sampleDeepClone(obj2)

console.log('obj2.a === obj2.b',obj2.a === obj2.b)
console.log('copyObj2.a === copyObj2.b',copyObj2.a === copyObj2.b)

let copyObj2WithCache = _completeDeepClone(obj2)

console.log('obj2.a === obj2.b',obj2.a === obj2.b)
console.log('copyObj2WithCache.a === copyObj2WithCache.b',copyObj2WithCache.a === copyObj2WithCache.b)

// 对于递归爆栈还有循环实现，先不背太多了


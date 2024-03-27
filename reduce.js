Array.prototype._reduce = function (fn, initialValue) {
  // 保留this
  const context = this

  if (typeof fn !== 'function') {
    throw new Error(`${fn} must be a function`)
  }

  if (context.length === 0 && initialValue === undefined) {
    throw new Error('Reduce of empty array with no initial value')
  }

  let pre, cur, curIdx

  if (initialValue === undefined) {
    pre = context[0]
    curIdx = 1
    cur = context[1]
  } else {
    pre = initialValue
    curIdx = 0
    cur = context[0]
  }

  for (let i = curIdx; i < context.length; i++) {
    const curItem = context[i]
    pre = fn(pre, curItem)
  }

  return pre
}

console.log([1, 2, 3]._reduce((x, y) => x + y, 3))
console.log([1, 2, 3].reduce((x, y) => x + y, 3))

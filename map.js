Array.prototype._map = function (fn, context) {
  if (typeof fn !== 'function') {
    throw new Error(`${fn} must be a function`)
  }
  let res = []
  const ctx = context || this

  this.forEach((item) => {
    res.push(fn.call(ctx, item))
  })
  return res
}

console.log([1, 2]._map((x) => x + 1))

Array.prototype._mapwithReduce = function (fn, context) {
  let ctx = context || this
  if (typeof fn !== 'function') {
    throw new Error(`${fn} must be a function`)
  }

  return ctx.reduce((pre, cur, curIdx, context) => {
    pre.push(fn.call(ctx, cur, curIdx, context))
    return pre
  }, [])
}

console.log([1, 2]._mapwithReduce((x) => x * 10))

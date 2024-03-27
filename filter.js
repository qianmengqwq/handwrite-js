Array.prototype._filter = function (fn, context) {
  let res = []
  const ctx = context || this
  if (typeof fn !== 'function') {
    throw new Error(`${fn} must be a function`)
  }

  this.forEach((item) => {
    if (fn.call(ctx, item)) {
      res.push(item)
    }
  })
  return res
}

const words = ['spray', 'elite', 'exuberant', 'destruction', 'present']

const result = words._filter((word) => word.length > 6)

console.log('result', result)
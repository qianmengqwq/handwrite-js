Function.prototype._call = function (context, ...args) {
  if (typeof this !== 'function') {
    throw TypeError('not a function')
  }

  // 找到ctx
  const ctx = typeof context === 'object' ? context : window
  // 把当前函数绑在ctx上
  const key = Symbol()
  ctx[key] = this

  const res = ctx[key](...args)
  //记得删除！
  delete ctx[key]
  return res
}

// apply同理，args不加...而已

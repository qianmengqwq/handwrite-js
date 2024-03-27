const _instanceof = (A, B) => {
  let BPro = B.prototype
  while (A.__proto__ !== null) {
    if (A.__proto__ === BPro) {
      return true
    }
    A = A.__proto__
  }
  return false
}

console.log(_instanceof([], Array))
console.log(_instanceof([], Object))

const isArray = (args) => {
  return Object.prototype.toString.call(args) === '[object Array]'
}

console.log('isArray', isArray([1, 2]))
console.log('2', isArray({}))

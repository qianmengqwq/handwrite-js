function copyArrayShallow(arr) {
  //   return [...arr]
  //   return Array.from(arr)
  //   return arr.slice()
  return arr.concat()
}

let arr = [1, 2, 3, 4, 5]
let copy = copyArrayShallow(arr)

copy[3] = 9999

console.log('arr', arr)
console.log('copy', copy)
console.log('arr === copy', arr === copy)

// 对于多维数组，还是需要深拷贝，比如json

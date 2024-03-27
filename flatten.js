// reduce递归写法
function flatten(list, depth = 1) {
  if (depth === 0) return list
  return list.reduce(
    (a, b) => a.concat(Array.isArray(b) ? flatten(b, depth - 1) : b),
    []
  )
}

function flatten3(arr, depth = 1) {
  const flatArray = []
  const stack = arr.map((item) => ({ value: item, depth }))

  while (stack.length) {
    const { value, depth } = stack.pop()
    if (Array.isArray(value) && depth > 0) {
      stack.push(...value.map((item) => ({ value: item, depth: depth - 1 })))
    } else {
      flatArray.unshift(value)
    }
  }

  return flatArray
}

const arr = [1, [2, 3], 4, [[5, 6], [[[7]]]]]

console.log('flatten', flatten(arr, 1))
console.log(arr.flat(1))

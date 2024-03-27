var quickSort = function (arr) {
  if (arr.length <= 1) {
    return arr
  }

  var pivot = arr.splice(0, 1)

  var left = [],
    right = []

  for (var i = 0; i < arr.length; i++) {
    arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i])
  }

  return quickSort(left).concat(pivot, quickSort(right))
}

let arr = [2, 5, 3, 6, 3, 2, 23, 4, 5, -5]

console.log('arr', quickSort(arr))

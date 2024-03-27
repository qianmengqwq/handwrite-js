const city = [
  { id: 12, parentId: 1, name: '朝阳区' },
  { id: 241, parentId: 24, name: '田林街道' },
  { id: 31, parentId: 3, name: '广州市' },
  { id: 13, parentId: 1, name: '昌平区' },
  { id: 2421, parentId: 242, name: '上海科技绿洲' },
  { id: 21, parentId: 2, name: '静安区' },
  { id: 242, parentId: 24, name: '漕河泾街道' },
  { id: 22, parentId: 2, name: '黄浦区' },
  { id: 11, parentId: 1, name: '顺义区' },
  { id: 2, parentId: 0, name: '上海市' },
  { id: 24, parentId: 2, name: '徐汇区' },
  { id: 1, parentId: 0, name: '北京市' },
  { id: 2422, parentId: 242, name: '漕河泾开发区' },
  { id: 32, parentId: 3, name: '深圳市' },
  { id: 33, parentId: 3, name: '东莞市' },
  { id: 3, parentId: 0, name: '广东省' },
]
// 优雅但复杂度高
function arrayToTree1(list, root) {
  return list
    .filter((item) => item.parentId === root) // 找到所有具有相同父ID的子节点
    .map((item) => ({ ...item, children: arrayToTree1(list, item.id) })) // 递归地为每个子节点构建树
}

const treeData = arrayToTree1(city, 0)

// console.log(arrayToTree1(city, 0))

// 通过map降低了复杂度
// function arrayToTree2(arr, root) {
//   const res = []
//   const map = new Map()
//   arr.forEach((item) => map.set(item.id, item))
//   arr.forEach((item) => {
//     if (item.parentId === root) {
//       res.push(item)
//     } else {
//       const parent = map.get(item.parentId)
//       parent.children = parent.children || []
//       parent.children.push(item)
//     }
//   })
//   return res
// }

// console.log(arrayToTree2(city, 0))

// function treeToArray(tree, parentId) {
//   const flatArray = []

//   function traverse(node, parentId) {
//     const { children, ...rest } = node
//     flatArray.push({ ...rest, parentId })

//     if (children && children.length > 0) {
//       children.forEach((child) => traverse(child, node.id))
//     }
//   }

//   tree.forEach((node) => traverse(node, parentId))

//   return flatArray
// }

function treeToArray(tree, parentId) {
  const flatArray = []
  const stack = [...tree.map((node) => ({ ...node, parentId }))]
  console.log('stack', stack)
  while (stack.length > 0) {
    const node = stack.pop()
    const { children, ...rest } = node
    flatArray.push({ ...rest })

    if (children && children.length > 0) {
      stack.push(...children.map((child) => ({ ...child, parentId: node.id })))
    }
  }

  return flatArray
}

function isSameArray(arr1, arr2) {
  // 如果两个数组的长度不同，直接返回 false
  if (arr1.length !== arr2.length) {
    return false
  }

  // 使用哈希表来记录每个对象的数量
  const frequencyCounter1 = {}
  const frequencyCounter2 = {}

  // 遍历第一个数组，记录每个对象的出现次数
  for (const obj of arr1) {
    const key = JSON.stringify(obj) // 将对象转换为字符串作为哈希表的键
    frequencyCounter1[key] = (frequencyCounter1[key] || 0) + 1
  }

  // 遍历第二个数组，记录每个对象的出现次数
  for (const obj of arr2) {
    const key = JSON.stringify(obj) // 将对象转换为字符串作为哈希表的键
    frequencyCounter2[key] = (frequencyCounter2[key] || 0) + 1
  }

  // 比较两个哈希表中每个对象的数量
  for (const key in frequencyCounter1) {
    if (
      !(key in frequencyCounter2) ||
      frequencyCounter1[key] !== frequencyCounter2[key]
    ) {
      return false
    }
  }
  return true
}

const arr = treeToArray(treeData, 0)

console.log('isSameArray(arr, city)', isSameArray(arr, city))

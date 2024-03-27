const _permute = (string) => {
  const res = []
  const dfs = (path) => {
    if (path.length == string.length) {
      res.push(path)
      return
    }
    for (const item of string) {
      if (path.includes(item)) continue
      dfs(path + item)
    }
  }
  dfs('')
  return res
}

console.log('res', _permute('abc'))

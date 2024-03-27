const asyncPool = async (limit, arr, cb) => {
  const ret = []
  const executing = []
  for (let item of arr) {
    const p = Promise.resolve().then(() => {
      return cb(item)
    })
    ret.push(p)

    if (limit <= arr.length) {
      const e = p.then(() => executing.splice(executing.indexOf(e), 1))
      executing.push(e)
      if (executing.length >= limit) {
        await Promise.race(executing)
      }
    }
  }
  return Promise.all(ret)
}

const timeout = (i) =>
  new Promise((resolve) => setTimeout(() => resolve(i), i)).then((r) => {
    console.log('r', r)
    return r
  })
const test = async () => {
  const time1 = Date.now()
  const res = await asyncPool(2, [1000, 5000, 3000, 2000], timeout)
  const time2 = Date.now()
  console.log('time', time2 - time1)
  console.log('res', res)
}

test()

Promise._all = function (_promises) {
  return new Promise((resolve, reject) => {
    const promises = Array.from(_promises)
    const res = []
    let count = 0
    for (let i = 0; i < promises.length; i++) {
      Promise.resolve(promises[i])
        .then((r) => {
          res[i] = r
          count++
          if (count === promises.length) {
            resolve(res)
          }
        })
        .catch((e) => reject(e))
    }
  })
}

async function test() {
  const res1 = await Promise._all([1, 2, 3])
  //-> [1, 2, 3]
  console.log('res1', res1)

  const res2 = await Promise._all([1, Promise.resolve(2), 3])
  console.log('res2', res2)
  //-> [1, 2, 3]

  const res3 = await Promise._all([1, Promise.resolve(2)])
  //-> [1, 2]
  console.log('res3', res3)

  const res4 = await Promise._all([1, Promise.reject(2)]).catch(
    (e) => `catch：${e}`
  )
  //-> Throw Error: 2s
  console.log('res4', res4)
}

test()

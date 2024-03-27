const sleep = (func, time, ...args) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      Promise.resolve(func(...args)).then(resolve)
    }, time)
  })
}

const fn = (str) => {
  console.log('test sleep')
  return str
}

const res = sleep(fn, 1000, 'qwq').then((res) => {
  console.log(res)
})


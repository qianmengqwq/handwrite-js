const _throttle = (fn, delay) => {
  let startTime = 0
  function throttle(...args) {
    setTimeout(() => {
      const now = Date.now()
      if (now - startTime >= delay) {
        fn(...args)
        startTime = now
      }
    }, delay)
  }
  return throttle
}

const log = () => console.log('qwq')

const throttledLog = _throttle(log, 1000)

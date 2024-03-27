const debounce = (fn, delay) => {
  let timer = null
  function _debounce(...args) {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      fn(...args)
      timer = null
    }, delay)
  }
  return _debounce
}

const log = () => console.log('qwq')

const debouncedLog = debounce(log, 1000)

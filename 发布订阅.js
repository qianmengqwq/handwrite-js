class EventEmitter {
  constructor() {
    //事件中心
    this.events = new Map()
  }

  on(type, fn) {
    if (this.events.has(type)) {
      this.events.get(type).push(fn)
    } else {
      this.events.set(type, [fn])
    }
  }

  emit(type, ...args) {
    if (!this.events.has(type)) return
    this.events.get(type).forEach((item) => {
      item(...args)
    })
  }

  off(type, cb) {
    this.events.get(type).splice(this.events.get(type).indexOf(cb), 1)
  }

  // on 触发，触发完立即回收掉
  once(type, cb) {
    const fn = (...args) => {
      cb(...args)
      this.off(type, fn)
    }
    this.on(type, fn)
  }
}

const bus = new EventEmitter()

// bus.on('qwq', (name) => {
//   console.log(`${name}qwq`)
// })

// bus.on('qwq', (name) => {
//   console.log(`name is ${name}`)
// })

const fn = (name) => {
  console.log('test fn off', name)
}

// bus.on('qwq', fn)
// bus.off('qwq', fn)

// bus.emit('qwq', 'sayori')
bus.once('qwq', fn)

bus.emit('qwq', 'sayori')
bus.emit('qwq', 'sayori')
bus.emit('qwq', 'sayori')

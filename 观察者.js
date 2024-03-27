/*
  被观察者维护观察者数组，每次有变化通知观察者更新
  观察者有自己的更新函数
*/
class Observerd {
  constructor(name) {
    this.name = name
    this.state = '走路'
    this.obserberList = []
  }

  setObserver(observer) {
    this.obserberList.push(observer)
  }

  setState(state) {
    this.state = state
    this.notify()
  }

  notify() {
    this.obserberList.forEach((observer) => {
      observer.update(this)
    })
  }
}

class Observer {
  constructor() {}
  update(observed) {
    console.log(observed.name + '正在' + observed.state)
  }
}

const observed = new Observerd('张三')
const observer = new Observer()

observed.setObserver(observer)
observed.setState('跑步')

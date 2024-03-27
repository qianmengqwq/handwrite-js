Function.prototype._bind = function (context, ...args) {
  if (typeof this !== 'function') {
    throw TypeError('not a function')
  }
  let fn = this

  return function F() {
    // 针对new的情况,new优先级更高
    console.log('this instanceof F', this instanceof F)
    return fn.apply(this instanceof F ? this : context, args)
  }
}

let obj = {
  name: 'sayori',
  child: {
    name: 'sayori-child',
    child: {
      name: 'sayori-child-child',
      child: null,
    },
  },
  say: function () {
    console.log(this.name)
  },
}

// obj.say.call(obj.child)

const fn = obj.say._bind(obj.child.child)
fn()
const newObj = new fn()

console.log('newObj.name', newObj.name)

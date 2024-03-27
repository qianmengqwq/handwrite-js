let a = '9007199254740991'
let b = '1234567899999999999'
let big1 = BigInt(a)
let big2 = BigInt(b)
console.log('ans', big1 + big2)
const add2 = (a: string, b: string) => {
  const maxLen = Math.max(a.length, b.length)

  a = a.padStart(maxLen, '0')
  b = b.padStart(maxLen, '0')

  let t = 0
  let num = 0
  let sum = ''
  for (let i = maxLen - 1; i >= 0; i--) {
    num = parseInt(a[i]) + parseInt(b[i]) + t
    t = Math.floor(num / 10)
    sum = (num % 10) + sum
  }
  if (t) {
    sum = '1' + sum
  }
  return sum
}

const add = (a: string, b: string) => {
  let res = ''
  let carry = 0
  let i = a.length - 1
  let j = b.length - 1
  while (i >= 0 || j >= 0 || carry > 0) {
    let fir = i >= 0 ? parseInt(a[i]) : 0
    let sec = j >= 0 ? parseInt(b[j]) : 0
    let num = fir + sec + carry
    carry = Math.floor(num / 10)
    res = (num % 10) + res
    i--
    j--
  }
  return res
}

console.log(add(a, b))
console.log(add2(a, b))

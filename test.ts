interface A {
  name: string
  age: number
}

interface B {
  name: string
  age: number
  sex: string
}

let a: A = {
  name: 'a',
  age: 1,
}

let b: B = {
  name: 'b',
  age: 2,
  sex: 'man',
}

a = b
// b = a

let fna = (param: A) => {}
fna(b)

let fnb = (param: B) => {}

fnb = fna
// fna = fnb
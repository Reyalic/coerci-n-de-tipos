/***********************/
/* COERCIÓN DE TIPOS */
/*********************/
// En JavaScript, la coerción es una característica que fuerza a una variable de cierto tipo a tener el comportamiento de una diferente.
​
  // console.log(2 + 5) // 7
​
/************************************/
/* COERCIÓN DE TIPOS ==> Inplícita */
/***********************************/
​
// console.log('hola ' + 'como estas')
// console.log('1' + 2) // 12
// console.log(1 + '2') // 12 CONCATENACIÓN
// console.log('esto es un boleano ' + true) // esto es un boleano true
​
// coerción implicita con strings
// console.log('24' / '2') // 12
// console.log('15' - '5') // 10
// console.log('2' * '2') // 4
​
// NaN 
// console.log('abc' * 2) // NaN
​
// null y undefined
// null = 0 
// console.log(1 / null) // Infinity
​
// undefined = NaN
// console.log((2 + 4) * 2 / undefined) // NaN
​
// boolean
// true = 1
// false = 0
// console.log(true + 2) // 3
// console.log(true * 5) // 5
// console.log(true / false) // Infinity
​
/************************************/
/* COERCIÓN DE TIPOS ==> Explícita */
/***********************************/
// console.log(String(1) + String(2)) // '12'
​
// strings => número
// console.log(Number('24') + Number('2')) // 26
// console.log(Number(true)) // 1
​
// console.log(Number(false)) // 0
// console.log(Number('')) // 0
// console.log(Number(null)) // 0
​
// console.log(Number(undefined)) // NaN
​
// console.log(Number([])) // 0
// console.log(Number({})) // NaN
​
// Operdador de adición o suma
// console.log(+'abc' + +'2') // NaN
// console.log(+true + +true) // 2
// console.log(+null) // 0
// console.log(+false) // 0
// console.log(Number('24') + Number('2')) // 26
​
// Booleano
// truty todo lo demas siempre nos daran = true 
console.log('trutys: ')
console.log(Boolean(1)) // true
console.log(Boolean('abc')) // true
console.log(Boolean(Infinity)) // true
console.log(Boolean([])) // true
console.log(Boolean({})) // true
​
console.log('Falsys: ')
// falsy: null, '', false, 0, undefined, NaN = false
console.log(Boolean(null)) // false
console.log(Boolean('')) // false
console.log(Boolean(0)) // false
console.log(Boolean(NaN)) // false
console.log(Boolean(undefined)) // false
​
// Más Info: https://www.notion.so/academlo/Coerci-n-de-Tipos-a85c5d617ee54a34b85ed12d13131734
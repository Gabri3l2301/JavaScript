//Operadores aritméticos

let a = 10
let b = 5

console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(a / b)

console.log(a % b)
console.log(a ** b)

a++ 
console.log(a)

b--
console.log(b)

//Operadores de asignación

let miVariable = 2
console.log(miVariable)
miVariable += 3
console.log(miVariable)

miVariable -= 2
miVariable *= 2
miVariable /= 2
miVariable **= 2

//Operadores de comparación
console.log (a)
console.log(a > b)
console.log(a < b)
console.log(10 >= 10)
console.log(a <= b)
console.log(a == b)
console.log(a == 11)
console.log(a == "11")
console.log(a == a)
console.log(a === a)
console.log(a === 11)
console.log(a === "11")
console.log(a != 11)
console.log(a !== "11")
console.log(0 == false)
console.log(1 == true)
console.log(0 == "")
console.log(0 == " ")
console.log(0 == '')
console.log(0 == "Hola")
console.log(0 === '')
console.log(undefined == null)
console.log(undefined === null)

// Truthy values

/*
Todos los números positivos y negativos menos el cero
Todas las cadenas de texto menos las vacías
El boolean true
*/

// Falsy values

/*
0
0n
null
undefined
NaN
El boolean false
Cadenas de texto vacias
*/

//Operadores lógicos

//and (&&)
console.log(5 > 10 && 15 > 20)
console.log(5 < 10 && 15 < 20)
console.log(5 < 10 && 15 > 20)

//or (||)
console.log(5 > 10 || 15 > 20)
console.log(5 < 10 || 15 < 20)
console.log(5 < 10 || 15 > 20)
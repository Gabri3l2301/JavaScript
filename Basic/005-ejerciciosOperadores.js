// 1. Crea una variable para cada operación aritmética

let suma = 5 + 3
let resta = 5 - 3
let multiplicacion = 5 * 3
let division = 5 / 3
let modulo = 5 % 3
let potenciacion = 5 ** 3

// 2. Crea una variable para cada tipo de operación de asignación, 
// que haga uso de las variables utilizadas para las operaciones aritméticas

let variable = 9
variable += 2
variable -= 2
variable *= 2
variable /= 2
variable **= 2

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación

console.log(5 > 3)
console.log(10 >= 10)
console.log(6 < 7)
console.log(5 != 3)
console.log(5 == 5)

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación

console.log(19 != 19)
console.log(12  < 10)
console.log(5 > 10)
console.log(10 >= 11)
console.log(5 == 6)

// 5. Utiliza el operador lógico and

console.log(5 > 3 && 10 >= 10)
console.log(6 < 7 && 5 != 3)
console.log(5 == 5 && 19 != 19)

// 6. Utiliza el operador lógico or

console.log(5 > 3 || 10 >= 10)
console.log(6 < 7 || 5 != 3)
console.log(5 == 5 || 19 != 19)

// 7. Combina ambos operadores lógicos

console.log(5 > 3 && 10 >= 10 || 6 < 7 && 5 != 3)
console.log(5 == 5 && 19 != 19 || 12 < 10)

// 8. Añade alguna negación

console.log(!(5 > 3))
console.log(!(6 < 7))
console.log(!(5 == 5))

// 9. Utiliza el operador ternario

let resultado = (5 > 3) ? "Mayor" : "Menor"
console.log(resultado)

// 10. Combina operadores aritméticos, de comparación y lógicos

let combinacion = (5 + 3 > 7 && 10 - 2 < 9) || (6 * 2 == 12 && 5 / 5 != 0)
console.log(combinacion)
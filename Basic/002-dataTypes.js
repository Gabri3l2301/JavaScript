// String (Cadena de texto)
let nombre = "Gabriel Peñaloza"
let apodo = 'Gabo'
let email = `steff.acuario23@gmail.com`

// Números
let edad = 18
let altura = 1.72

// Booleanos
let esProfesor = true
let esEstudiante = false

// Undefined
let noDefinido; // Variable declarada pero no inicializada
console.log(noDefinido); // Imprime "undefined"

// Null
let nulo = null; // Variable intencionalmente vacía

// Symbol
let simbolo = Symbol('descripcion del simbolo')

// BigInt
let numeroGrande = BigInt(1234567890123456789012345678901234567890)
let numeroGrande2 = 1234567890123456789012345678901234567890n // Sufijo 'n' para BigInt

// Imprimir los tipos de datos
console.log(typeof nombre)
console.log(typeof edad)
console.log(typeof esProfesor)
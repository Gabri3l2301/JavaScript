// 1. Escribe un comentario en una línea

// Este es un comentario

// 2. Escribe un comentario en varias líneas

/*
Este es un comentario
en varias líneas
*/

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos

let String = "Hola, mundo!"
let numero = 42
let booleano = true
let nulo = null
let indefinido
let simbolo = Symbol('mi simbolo')
let numeroGrande = BigInt(1234567890123456789012345678901234567890)

// 4. Imprime por consola el valor de todas las variables

console.log(String)
console.log(numero)
console.log(booleano)
console.log(nulo)
console.log(indefinido)
console.log(simbolo)
console.log(numeroGrande)

// 5. Imprime por consola el tipo de todas las variables

console.log(typeof String)
console.log(typeof numero)
console.log(typeof booleano)
console.log(typeof nulo)
console.log(typeof indefinido)
console.log(typeof simbolo)
console.log(typeof numeroGrande)

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo

String = "Hola, mundo modificado!"
numero = 100
booleano = false
nulo = null
indefinido = undefined
simbolo = Symbol('mi simbolo modificado')
numeroGrande = BigInt(9876543210987654321098765432109876543210)

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo

String = 100
numero = "Hola, mundo!"
booleano = null
nulo = false
indefinido = Symbol('mi simbolo')
simbolo = BigInt(1234567890123456789012345678901234567890)
numeroGrande = "9876543210987654321098765432109876543210"

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos

const StringConstante = "Hola, mundo!"
const numeroConstante = 42
const booleanoConstante = true
const nuloConstante = null
const indefinidoConstante = undefined
const simboloConstante = Symbol('mi simbolo')
const numeroGrandeConstante = BigInt(1234567890123456789012345678901234567890)

// 9. A continuación, modifica los valores de las constantes

StringConstante = "Hola, mundo modificado!"
numeroConstante = 100
booleanoConstante = false
nuloConstante = null
indefinidoConstante = undefined
simboloConstante = Symbol('mi simbolo modificado')
numeroGrandeConstante = BigInt(9876543210987654321098765432109876543210)

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse

/*

StringConstante = "Hola, mundo modificado!"
numeroConstante = 100
booleanoConstante = false
nuloConstante = null
indefinidoConstante = undefined
simboloConstante = Symbol('mi simbolo modificado')
numeroGrandeConstante = BigInt(9876543210987654321098765432109876543210)

*/
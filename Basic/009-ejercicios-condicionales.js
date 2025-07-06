//if/else if/ternaria

//Imprime por consola tu nombre si una variable toma su valor
let operador = 3
if (operador == 5){
    console.log("Gabriel")
}else {
    console.log("Error: operador incorrecto . . .")
}

//Imprime por consola un mensaje si el usuario y contraseña coincide con unos establecidos
let contraseña = 1234
if (contraseña == 1234){
    console.log("Contraseña correcta")
}else {
    console.log("Contraseña incorrecta")
}

//Verifica si un número es positivo, negativo o cero e imprime un mensaje
let numero
if (numero > 0){
    console.log("El número es positivo...")
}else if (numero == 0) {
    console.log("El número es cero...")
}else {
    console.log("El número es negativo")
}

//Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan
let edad = 17
let añosFaltantes
if (edad >= 18){
    console.log("Usted sí puede votar")
}else {
    console.log("Usted todavía no puede votar")
    añosFaltantes = 18 - edad
    console.log("A usted le falta " + añosFaltantes + " años para poder votar")
}

//Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable dependiendo de la edad
let edad2 = 18
const mensaje = edad >= 18 ? "adulto" : "menor"
console.log(mensaje)

//Muestra en qué estación del año nos encontramos dependiendo del valor de una variable mes
let mes
if (mes == 1 || mes == 2 || mes == 3){
    console.log("Estamos en Verano")
}else if (mes == 4 || mes == 5 || mes == 6){
    console.log("Estamos en Otoño")
}else if (mes == 7 || mes == 8 || mes == 9){
    console.log("Estamos en Invierno")
}else if (mes == 10 || mes == 11 || mes == 12){
    console.log("Estamos en Primavera")
}else {
    console.log("ERROR: Ingrese un dato correcto")
}

//Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior
if (mes == 1 || mes == 3 || mes == 5 || mes == 7 || mes == 8 || mes == 10 || mes == 12){
    console.log("El mes tiene 31 días")
}else if (mes == 4 || mes == 6 || mes == 9 || mes == 11){
    console.log("El mes tiene 30 días")
}else if (mes == 2){
    console.log("El mes tiene 28 o 29 días")
}else {
    console.log("ERROR: Ingrese un dato correcto")
}

// switch

//Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma

//Usa un switch para hacer de nuevo el ejercicio 6

//Usa un switch para hacer de nuevo el ejercicio 7
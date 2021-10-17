// Realizar un script llamado Ejercicio4.js, que dado un array, ordene sus valores de menor
// a mayor y los muestre por pantalla.

var arrayNumbers = [10, 8, 9, 5, 3, 78, 23,12,11]

console.log(arrayNumbers.sort(function (a, b){
    return a - b;
}))

console.log(arrayNumbers.sort((a, b) => a - b ))
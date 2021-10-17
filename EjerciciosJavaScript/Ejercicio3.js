// Realizar un script llamado Ejercicio3.js, que cree un array vacío, y luego generar N
// números al azar y guardarlos en un array, N es introducido por el usuario a través de un
// prompt.

// Aca se generaria un número random de entre 0 y 1001
var arr = []
var cantNumeros = prompt('Coloque la cantidad de numeros que quiera que tenga el array.')
for(var i = 0; i< cantNumeros; i++){
    arr.push(Math.floor(Math.random()*1001));
}
console.log(arr);

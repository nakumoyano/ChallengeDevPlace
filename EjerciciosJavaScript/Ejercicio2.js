// Realizar un script llamado Ejercicio2.js, que dado el array [1,2,3,4,5,7] realice una copia
// del array sumándole 1 a cada uno de los valores.

var array = [1,2,3,4,5,7];
var arrayCopia = [];

for(var i = 0; i < array.length; i++){
    arrayCopia.push(array[i] + 1);
}

console.log(array);
console.log(arrayCopia);


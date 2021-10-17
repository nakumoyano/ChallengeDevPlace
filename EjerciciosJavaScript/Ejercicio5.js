// Dado los siguientes vectores:
// int var1={1,2,4,6,7,8}
// int var2={1,2,4,5,6,7,8}
// a - Mostrar de manera ordenada la unión de los elementos de ambos vectores.


const var1=[1,2,4,6,7,8]
const var2=[1,2,3,4,5,6,7,8]
const arrayConcatenado = var1.concat(var2)

console.log(arrayConcatenado)

// Ordenado de mayor a menor
console.log(arrayConcatenado.sort((a, b) => a - b ))
arrayConcatenado.reverse()
console.log(arrayConcatenado);

// Ordenado de menor a mayor
console.log(arrayConcatenado.sort((a, b) => a - b ))
console.log(arrayConcatenado);

//Funcion para evitar números repetidos al ordenarlos y ordenados de menor a mayor
function onlyUnique(value, index, self) { 
    return self.indexOf(value) === index;
}

var unique = arrayConcatenado.filter( onlyUnique ); 
console.log(unique);
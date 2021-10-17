// Realizar un script llamado Ejercicio1.js, que contenga una función llamada
// CantidadMayusculas que reciba como parámetro un string y devuelva el número de letras
// mayúsculas que contiene dicha cadena. El valor devuelto debe ser mostrado en pantalla.

function CantidadMayusculas(cadena){
    var cadNueva = cadena.replace(/[a-z]/g, '');
    return(cadNueva.length)
}
CantidadMayusculas('kjJNSjnkjKuI')

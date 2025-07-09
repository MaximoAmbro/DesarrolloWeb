let texto = "hola mundo";
let mayusculas = texto.toUpperCase();
console.log(mayusculas);

let primerosCinco = texto.substring(0, 5);
console.log(primerosCinco);

let ultimosTres = texto.substring(texto.length - 3);
console.log(ultimosTres);

let primeraMayus = texto.substring(0, 1).toUpperCase() + texto.substring(1).toLowerCase();
console.log(primeraMayus);

let espacioPos = texto.indexOf(" ");
console.log(espacioPos);

let palabras = "javascript es genial";
let espacio = palabras.indexOf(" ");
let palabra1 = palabras.substring(0, espacio);
let palabra2 = palabras.substring(espacio + 1);
let resultadoF = palabra1.substring(0, 1).toUpperCase() + palabra1.substring(1).toLowerCase() + " " +
                 palabra2.substring(0, 1).toUpperCase() + palabra2.substring(1).toLowerCase();
console.log(resultadoF);
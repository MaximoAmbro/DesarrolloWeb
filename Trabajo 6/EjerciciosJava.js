// Variables y operadores
let num1 = 10;
let num2 = 20;
let suma = num1 + num2;
console.log(suma);

let str1 = "Hola";
let str2 = "Mundo";
let resultado = str1 + " " + str2;
console.log(resultado);

let str3 = "JavaScript";
let str4 = "Rocks";
let longitudTotal = str3.length + str4.length;
console.log(longitudTotal);
// Strings
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
// Arrays
let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log(meses[4]);
console.log(meses[10]);

let mesesOrdenados = [...meses].sort();
console.log(mesesOrdenados);

meses.unshift("Inicio");
meses.push("Fin");
console.log(meses);

meses.shift();
meses.pop();
console.log(meses);

let mesesInvertidos = [...meses].reverse();
console.log(mesesInvertidos);

let mesesUnidos = meses.join(" - ");
console.log(mesesUnidos);

let copiaMeses = meses.slice(4, 11);
console.log(copiaMeses);
// If else
let randomNum = Math.random();
if (randomNum >= 0.5) {
    alert("Greater than 0,5");
} else {
    alert("Lower than 0,5");
}

let Age = 25;
if (Age < 2) {
    alert("Bebe");
} else if (Age >= 2 && Age <= 12) {
    alert("Niño");
} else if (Age >= 13 && Age <= 19) {
    alert("Adolescente");
} else if (Age >= 20 && Age <= 30) {
    alert("Joven");
} else if (Age >= 31 && Age <= 60) {
    alert("Adulto");
} else if (Age >= 61 && Age <= 75) {
    alert("Adulto mayor");
} else {
    alert("Anciano");
}
// For
let palabras = ["hola", "mundo", "javascript", "es", "genial"];
for (let i = 0; i < palabras.length; i++) {
    alert(palabras[i]);
}

for (let i = 0; i < palabras.length; i++) {
    let palabraMod = palabras[i].substring(0, 1).toUpperCase() + palabras[i].substring(1).toLowerCase();
    alert(palabraMod);
}

let sentence = "";
for (let i = 0; i < palabras.length; i++) {
    sentence += palabras[i] + " ";
}
alert(sentence.trim());

let arrayNumeros = [];
for (let i = 0; i < 10; i++) {
    arrayNumeros.push(i);
}
console.log(arrayNumeros);
// Funciones
function suma(a, b) {
    return a + b;
}
let resultadoSuma = suma(5, 10);
console.log(resultadoSuma);

function sumaValidada(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        alert("Uno de los parámetros no es un número");
        return NaN;
    }
    return a + b;
}

function validateInteger(num) {
    return Number.isInteger(num);
}

function sumaEnteros(a, b) {
    if (!validateInteger(a) || !validateInteger(b)) {
        alert("Error: uno de los números no es entero");
        return Math.round(a) + Math.round(b);
    }
    return a + b;
}

function validarEnteros(a, b) {
    if (!validateInteger(a) || !validateInteger(b)) {
        alert("Error: uno de los números no es entero");
        return [Math.round(a), Math.round(b)];
    }
    return [a, b];
}

function sumaConValidacion(a, b) {
    let [numA, numB] = validarEnteros(a, b);
    return numA + numB;
}
console.log(sumaConValidacion(5.7, 3));
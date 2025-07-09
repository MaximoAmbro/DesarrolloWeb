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

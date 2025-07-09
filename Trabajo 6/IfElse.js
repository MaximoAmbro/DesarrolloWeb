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
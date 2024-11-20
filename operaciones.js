
let numero1 = 16;
let numero2 = 8;


let suma = numero1 + numero2;
let resta = numero1 - numero2;
let multiplicacion = numero1 * numero2;
let division = numero1 / numero2;
let modulo = numero1 % numero2;


let esMayor = numero1 > numero2;
let esMenor = numero1 < numero2;


console.log("Resultados de las operaciones aritméticas:");
console.log(`Suma: ${numero1} + ${numero2} = ${suma}`);
console.log(`Resta: ${numero1} - ${numero2} = ${resta}`);
console.log(`Multiplicación: ${numero1} * ${numero2} = ${multiplicacion}`);
console.log(`División: ${numero1} / ${numero2} = ${division}`);
console.log(`Módulo: ${numero1} % ${numero2} = ${modulo}`);

console.log("\nComparaciones:");
console.log(`¿El número ${numero1} es mayor que ${numero2}? ${esMayor}`);
console.log(`¿El número ${numero1} es menor que ${numero2}? ${esMenor}`);

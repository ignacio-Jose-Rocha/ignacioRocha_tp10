
let nombre = "ignacio";
let apellido = "rocha";
let sueldoActual = 20000;
let porcentajeAumento = 25;

let calculoAumento = (sueldoActual * porcentajeAumento) / 100;

let nuevoSueldo = sueldoActual + calculoAumento;


console.log(
  `Hola, estimad@ ${nombre} ${apellido}\n` +
  `En base a su sueldo actual: $${sueldoActual}\n` +
  `Ha recibido un aumento del ${porcentajeAumento}%: $${calculoAumento}\n` +
  `y su nuevo sueldo es de: $${nuevoSueldo}`
);

import calculadora from "./calculadora.js";

const inputNumeroA = document.getElementById("numero-a");
const inputNumeroB = document.getElementById("numero-b");
const inputResultado = document.getElementById("resultado");
const tipoDeOperacion = document.getElementById("tipo-operacion");
const btnCalcular = document.getElementById("btn-calcular");

calculadora({
    inputNumeroA,
    inputNumeroB,
    inputResultado,
    tipoDeOperacion,
    btnCalcular
});

// const cosasGenerales = {
//     color: "rojo",
//     anio: 2023,
//     saludo: "Hola",
//     nombre: "Juan",
//     a: 5,
//     b: 3,
// };

// const cosasGenerales2 = {
//     color: "rojo",
//     anio: 2023,
//     saludo: "Hola",
//     nombre: "Jose",
//     a: 7,
//     b: 5,
// };

// //Destructurar a nivel de variable:
// const {a, b, nombre} = cosasGenerales;
// const { a: a2, b: b2, nombre: nombre2 } = cosasGenerales2;

// console.log(a + b, nombre);
// console.log(a2 + b2, nombre2);


// //Destructurar a nivel de parametro:
// function saludar({nombre}) {
//     console.log(`hola ${nombre}`);
// }
// saludar(cosasGenerales);









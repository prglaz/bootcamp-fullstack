let primerValor = document.getElementById("calc-primervalor");
let segundoValor = document.getElementById("calc-segundovalor");
let resultado = document.getElementById("calc-resultado");

let btnSuma = document.getElementById("btn-suma");
let btnResta = document.getElementById("btn-resta");
let btnMultiplicacion = document.getElementById("btn-multiplicacion");
let btnDivision = document.getElementById("btn-division");

// NO ENCUENTRO UN TIPO DE DATO CON MAS PRECISION, YA QUE SI USO EL BigInt, PIERDO LOS DECIMALES
btnSuma.addEventListener("click",(event) => {
    event.preventDefault();
    resultado.value = Number(primerValor.value) + Number(segundoValor.value);
})

btnResta.addEventListener("click", (event) => {
    event.preventDefault();
    resultado.value = Number(primerValor.value) - Number(segundoValor.value);
})

btnMultiplicacion.addEventListener("click", (event) => {
    event.preventDefault();
    resultado.value = Number(primerValor.value) * Number(segundoValor.value);
})

btnDivision.addEventListener("click", (event) => {
    event.preventDefault();
    resultado.value = Number(primerValor.value) / Number(segundoValor.value);
})

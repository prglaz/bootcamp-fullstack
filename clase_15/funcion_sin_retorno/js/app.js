let resultado = 0;
let esCorrecto = true;

if (esCorrecto) {
    let x = 5;
    resultado += 10;
}

document.write("<p>" + resultado + "</p>");
//document.write("<p>" + x + "</p>"); //esto no se ve


//funciones sin retorno y sin parametros
function sumar() {
    resultado = 10 + 5
}

sumar();

document.write("<p>Resultado de la funcion: " + resultado + "</p>");


//funciones sin retorno y con parametros
const IVA = 21;
function calcularPrecio(costo) {
    resultado = costo * (1 + IVA / 100) * 1.3;
    document.write("<p>Resultado de la funcion: " + resultado + "</p>");
}

calcularPrecio(100);
calcularPrecio(50);
calcularPrecio(500);


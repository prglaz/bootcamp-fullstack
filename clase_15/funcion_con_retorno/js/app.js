let resultado = 3 + 4;
document.write("<p>Resultado Global: " + resultado + "</p>");

//funciones con retorno y sin parametros
function sumarA() {
    let resultado = 10 + 5;
    return resultado;
}

let a = sumarA();

document.write("<p>Resultado de la funcion A: " + a + "</p>");
//se podria invocar directamente de la siguiente manera:
//document.write("<p>Resultado de la funcion A: " + sumarA() + "</p>");


//funciones con retorno y con parametros
function sumarB(numero) {
    let resultado = 10 + 5 + numero;
    return resultado;
}

document.write("<p>Resultado de la funcion B: " + sumarB(3) + "</p>");

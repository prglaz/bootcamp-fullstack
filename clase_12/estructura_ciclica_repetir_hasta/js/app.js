let contadorA = 11;

//Estructura ciclica repetir-hasta (se garantiza al menos una ejecucion del bloque interno)
do {
    document.write("<p>Iteracion A " + contadorA + "</p>");
    contadorA++;
} while (contadorA <= 10); //Evalua la condicion al final del bloque interno de codigo

//Estructura ciclica repetir-mientras
let contadorB = 11;
//Evalua la condicion al inicio del bloque interno del codigo
while (contadorB <= 10) {
    document.write("<p>Iteracion B " + contadorB + "</p>");
    contadorB++;
}

let contadorC = 1;
do {
    //Saltar la iteracion actual (siendo contadorC igual a 4)
    if (contadorC === 4) {
        contadorC++;
        continue;
    }
    //Rompe el bucle
    if (contadorC === 8) {
        break;
    }

    if (contadorC % 2 === 0) {
        document.write("<p>Iteracion C " + contadorC + "</p>");
    }

    contadorC++;
} while (contadorC <= 20); //Evalua la condicion al final del bloque interno de codigo

document.write("<p>Fin de instrucciones</p>")

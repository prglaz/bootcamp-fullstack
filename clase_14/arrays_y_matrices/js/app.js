// let pais1 = "Argentina";
// let pais2 = "Chile";
// let pais3 = "Colombia";
// let pais4 = "Uruguay";

// let vector = ["hola", true, 10, 3, "x", 66.25];


//let paises = ["Argentina", "Chile", "Colombia", "Uruguay", "Perú"];
const paises = ["Argentina", "Chile", "Colombia", "Uruguay", "Perú"]; //lo unico que pone como inmutable es que no se puede reasignar por un nuevo array o directamente cambiar el tipo de la variable completa (paises). No se podria hacer despues: paises = [1, 2] o paises = "String"

console.log(paises);
document.write("<p>Pais: " + paises[1] + "</p>");

paises[1] = "Paraguay";
paises[4] = "USA";

document.write("<p>Pais: " + paises[1] + "</p>");
console.log(paises);


//Array Bidimensional
const paisesConPoblacion = [ ["Argentina", 47000000] , ["Chile", 19000000] , ["Perú", 28000000, "Altura", "Moneda"] ];
//paisesConPoblacion[0][1] = Number(window.prompt("Ingrese la población"));

document.write("<p>Pais: " + paisesConPoblacion[0][0] + " Población: " + paisesConPoblacion[0][1] + "</p>");
document.write("<p>Pais: " + paisesConPoblacion[2][0] + " Población: " + paisesConPoblacion[2][1] + "</p>");
console.log(paisesConPoblacion);


//Matriz
const matriz = [ [21, 15], [77, 50], [20, 55]];
console.table(matriz);
document.write("<p>Matriz: " + matriz[1][1] + "</p>");


//Lectura completa: Por medio de un recorrido del vector
let longitudDePaises = paises.length;
for (let i = 0; i < longitudDePaises; i++) {
    document.write("<p>País N°" + i + ": " + paises[i] + "</p>");
}

//Lectura completa: Por medio de un recorrido de un array bidimensional
for (let i = 0; i < paisesConPoblacion.length; i++) {
    for (let j = 0; j < paisesConPoblacion[i].length; j++) {
        document.write("<p>Valor N°" + i + "-" + j + ": " + paisesConPoblacion[i][j] + "</p>");
    }
}



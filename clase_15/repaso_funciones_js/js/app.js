//Ejercicio 1
function calcularPrecio(precio) {
    return precio * 1.3 * 1.21;
}

document.write("<h2>EJERCICIO 1</h2>");
//let precio = prompt("Ingrese precio");
let precio = 100;
precioFinal = calcularPrecio(precio);
document.write("<p>Precio sin iva ni margen de ganancia: $" + precio + ". Precio final: $" + precioFinal + "</p>");


//Ejercicio 2
function sumarUnoAVector(vec) {
    for (let i = 0; i < vec.length; i++) {
        vec[i]++;
    }
}

document.write("<h2>EJERCICIO 2</h2>");
let vector = [1, 4, 5];
document.write("<p>Vector inicial: " + vector + "</p>");
sumarUnoAVector(vector);
document.write("<p>Vector mas uno: " + vector + "</p>");


//Ejercicio 3
function calcularDobleElementosVector(vec) {
    for (let i = 0; i < vec.length; i++) {
        vec[i] *= 2;
    }
}

document.write("<h2>EJERCICIO 3</h2>");
calcularDobleElementosVector(vector);
document.write("<p>Vector multiplicado por dos: " + vector + "</p>");


//Ejercicio 4
function mostrarSegundoElementoFilasMatriz(mat) {
    for (let i = 0; i < mat.length; i++) {
        document.write("<p>Segundo elemento fila " + (i+1) + ": " + mat[i][1] + "</p>");
    }
}

document.write("<h2>EJERCICIO 4</h2>");
let matriz = [ [3, 4, 5], [8, 9, 12] , [17, 84, 56], [7, 59, 1] ];
mostrarSegundoElementoFilasMatriz(matriz);



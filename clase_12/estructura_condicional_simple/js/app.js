let numA = 10;
let numB = 5;
let valorBooleano = true;

if (numA == "10") {
    window.document.write("<p>Hola Mundo</p>");
}

window.document.write("<p>Última instrucción</p>");

// Comparación estricta de igualdad
if (numA === 10) {
    window.document.write("<p>El valor y el tipo de datos son iguales</p>");
}
// Comparación estricta de desigualdad
if (numA !== "10") {
    window.document.write("<p>El valor es igual pero el tipo de datos es diferente</p>");
}
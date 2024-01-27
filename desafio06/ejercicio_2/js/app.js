let cantidadDeGatos = prompt("Ingrese cantidad de gatos");
let cantidadDePasos = prompt("Ingrese cantidad de pasos");
let sentencia;

//document.write("<h1>Ejercicio 2</h1>");
//document.write("<p>```</p>");
console.log("```");

for (let i = 1; i <= cantidadDeGatos; i++) {
    //document.write("<p>Gato #" + i + ": 🐈 ");
    sentencia = "Gato #" + i + ": 🐈 ";
    for (let j = 1; j <= cantidadDePasos; j++) {
        //document.write("🐾");
        sentencia += "🐾";
    }
    //document.write("</p>")
    console.log(sentencia);
}

//document.write("<p>```</p>")
console.log("```");

let cantidadDeGatos = prompt("Ingrese cantidad de gatos");
let cantidadDePasos = prompt("Ingrese cantidad de pasos");
let sentencia;

//document.write("<h1>Ejercicio 2</h1>");
//document.write("<p>```</p>");
console.log("```");

for (let i = 1; i <= cantidadDeGatos; i++) {
    if (i % 2 == 1) {
        sentencia = "<p>Gato #" + i + ": 🐈 ";
    } else {
        sentencia = "<p>Gato #" + i + ": 🐈🐈 "; //no puedo hacerlo solo agregando el segundo caballo por el espacio que pongo luego del primero en el primer write
    }

    for (let j = 1; j <= cantidadDePasos; j++) {
        //document.write("🐾");
        sentencia += "🐾";
    }
    
    //document.write("</p>")
    console.log(sentencia);
}

//document.write("<p>```</p>")
console.log("```");
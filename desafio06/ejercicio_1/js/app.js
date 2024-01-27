let cantidadDeGatos = prompt("Ingrese cantidad de gatos");

//document.write("<h1>Ejercicio 1</h1>");
//document.write("<p>```</p>");
console.log("```");

for (let i = 1; i <= cantidadDeGatos; i++) {
    if (i % 3 == 1) {
        console.log("Gato #" + i + ": 😺");
        //document.write("<p>Gato #" + i + ": 😺</p>");
    } else if (i % 3 == 2) {
        console.log("Gato #" + i + ": 😸");
        //document.write("<p>Gato #" + i + ": 😸</p>");
    } else {
        console.log("Gato #" + i + ": 😹");
        //document.write("<p>Gato #" + i + ": 😹</p>");
    }
    
}

//document.write("<p>```</p>")
console.log("```");

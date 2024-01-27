//Estructura ciclica repetir-para (incremental)
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        continue;
    }
    
    document.write("<p>iteracion A " + i +"</p>");
}

//Estructura ciclica repetir-para (decremental)
for (let i = 10; i > 0; i--) {
    document.write("<p>iteracion B " + i + "</p>");

    if (i === 5) {
        break;
    }
}

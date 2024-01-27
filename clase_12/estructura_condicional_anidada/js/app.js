const ARGENTINA = "Argentina";
const CHILE = "Chile"

let edad = 1;
let nacionalidad = ARGENTINA;
//console.log(ARGENTINA);

//Determinar si es mayor de edad (18)
if (edad >= 18) {
    window.document.write("<p>Es mayor de edad</p>");
    
    //Un condicional anidado
    if (edad >= 65) {
        window.document.write("<p>Es jubilado</p>");
    }
} else {
    window.document.write("<p>Es menor de edad</p>");

    if (nacionalidad === ARGENTINA) {
        window.document.write("<p>Tiene nacionalidad Argentina</p>");
    }
}

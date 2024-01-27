//EJERCICIO 1
let titulo = document.querySelector("title").innerHTML;
console.log(titulo);

//EJERCICIO 3 + 5
let nombres = document.querySelectorAll("dl");

function imprimirParticipantes() {
    let impresionParticipantes = '-----\n';
    for (let i = 0; i < nombres.length; i++) {
        let participante = nombres[i].children;
        impresionParticipantes += 'Integrante ' + (i + 1) + ': "';
        for (let j = 1; j <= participante.length; j += 2) {
            if (j === 1) {
                impresionParticipantes += participante[j].innerHTML;
            } else if (j === 3 && participante[j].innerHTML != "") {
                impresionParticipantes += " " + participante[j].innerHTML;
            } else if (j > 3 && participante[j].innerHTML != "") {
                impresionParticipantes += " " + participante[j].innerHTML.toUpperCase();
            }
        }
        impresionParticipantes += '"\n';
    }
    impresionParticipantes += '-----';
    console.log(impresionParticipantes);
}

imprimirParticipantes();


//EJERCICIO 4 + 5
//Verificar nombres repetidos
// let nombres = document.querySelectorAll("dl");
function verificarCoincidenciasNombre() {
    let coincidencias = false;
    for (let i = 0; i < nombres.length - 1; i++) {
        let participantePrimero = nombres[i].children;
        for (let j = 1; j < nombres.length; j++) {
            let participanteComparador = nombres[j].children;
            if ((participantePrimero[1].innerHTML) === (participanteComparador[1].innerHTML) ||
                (participantePrimero[1].innerHTML) === (participanteComparador[3].innerHTML) ||
                (participantePrimero[3].innerHTML) === (participanteComparador[1].innerHTML) ||
                (participantePrimero[3].innerHTML) === (participanteComparador[3].innerHTML)) {
                coincidencias = true;
            }
        }
    }
    return coincidencias;
}

//Setear color nombres repetidos
function colorearNombresRepetidos(color) {
    for (let i = 0; i < nombres.length - 1; i++) {
        let participantePrimero = nombres[i].children;
        for (let j = 1; j < nombres.length; j++) {
            let participanteComparador = nombres[j].children;
            if ((participantePrimero[1].innerHTML) === (participanteComparador[1].innerHTML)) {
                participantePrimero[1].style.color = color;
                participanteComparador[1].style.color = color;
            }
            if ((participantePrimero[1].innerHTML) === (participanteComparador[3].innerHTML)) {
                // participantePrimero[1].style.color = color;
                // participanteComparador[3].style.color = color;
                participantePrimero[1].style.setProperty("color", color);
                participanteComparador[3].style.setProperty("color", color);
            }
            if ((participantePrimero[3].innerHTML) === (participanteComparador[1].innerHTML)) {
                participantePrimero[3].style.color = color;
                participanteComparador[1].style.color = color;
            }
            if ((participantePrimero[3].innerHTML) === (participanteComparador[3].innerHTML)) {
                participantePrimero[3].style.color = color;
                participanteComparador[3].style.color = color;
            }
        }
    }
}


let nombresIguales = verificarCoincidenciasNombre();

if (nombresIguales) {
    console.log("Hubo coincidencias en el nombre");
    let colorNombre = prompt("Hubo coincidencias en el nombre! Por favor, ingrese un color");
    colorearNombresRepetidos(colorNombre);
} else {
    console.log("No hubo coincidencias en el nombre");
}


//comparacion de apellidos
function verificarCoincidenciasApellido() {
    //Verificar apellidos repetidos
    let coincidencias = false;
    for (let i = 0; i < nombres.length - 1; i++) {
        let participantePrimero = nombres[i].children;
        for (let j = 1; j < nombres.length; j++) {
            let participanteComparador = nombres[j].children;
            if ((participantePrimero[5].innerHTML) === (participanteComparador[5].innerHTML) ||
                (participantePrimero[5].innerHTML) === (participanteComparador[7].innerHTML) ||
                (participantePrimero[7].innerHTML) === (participanteComparador[5].innerHTML) ||
                (participantePrimero[7].innerHTML) === (participanteComparador[7].innerHTML)) {
                coincidencias = true;
            }
        }
    }
    return coincidencias;
}

function colorearApellidosRepetidos(color) {
    for (let i = 0; i < nombres.length - 1; i++) {
        let participantePrimero = nombres[i].children;
        for (let j = 1; j < nombres.length; j++) {
            let participanteComparador = nombres[j].children;
            if ((participantePrimero[5].innerHTML) === (participanteComparador[5].innerHTML)) {
                participantePrimero[5].style.color = color;
                participanteComparador[5].style.color = color;
            }
            if ((participantePrimero[5].innerHTML) === (participanteComparador[7].innerHTML)) {
                participantePrimero[5].style.color = color;
                participanteComparador[7].style.color = color;
            }
            if ((participantePrimero[7].innerHTML) === (participanteComparador[5].innerHTML)) {
                participantePrimero[7].style.color = color;
                participanteComparador[5].style.color = color;
            }
            if ((participantePrimero[7].innerHTML) === (participanteComparador[7].innerHTML)) {
                participantePrimero[7].style.color = color;
                participanteComparador[7].style.color = color;
            }
        }
    }
}

let compararApellidos = confirm("¿Comparar Apellidos?");
if (compararApellidos) {
    let apellidosIguales = verificarCoincidenciasApellido();

    //Setear de color apellidos repetidos
    if (apellidosIguales) {
        console.log("Hubo coincidencias en el apellido");
        let colorApellido = prompt("Hubo coincidencias en el apellido! Por favor, ingrese un color");
        colorearApellidosRepetidos(colorApellido);
    } else {
        console.log("No hubo coincidencias en el apellido");
    }
}



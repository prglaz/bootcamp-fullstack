//EJERCICIO 1
let titulo = document.querySelector("title").innerHTML;
console.log(titulo);
let boton1 = document.querySelector("#id-button-completar1");
let boton2 = document.querySelector("#id-button-completar2");

//EJERCICIO 3 + 5
let nombres = document.querySelectorAll("form");
// console.dir(nombres[0].querySelectorAll("input[type='text']"));
function imprimirParticipantes() {
    let impresionParticipantes = '-----\n';
    for (let i = 0; i < nombres.length; i++) {
        let participante = nombres[i].querySelectorAll("input[type='text']");
        impresionParticipantes += 'Integrante ' + (i + 1) + ': "';
        for (let j = 0; j < participante.length; j++) {
            if (j === 0) {
                impresionParticipantes += participante[j].value;
            } else if (j === 1 && participante[j].value != "") {
                impresionParticipantes += " " + participante[j].value;
            } else if (j > 1 && participante[j].value != "") {
                impresionParticipantes += " " + participante[j].value.toUpperCase();
            }
        }
        impresionParticipantes += '"\n';
    }
    impresionParticipantes += '-----';
    console.log(impresionParticipantes);
}


//EJERCICIO 4 + 5
//Verificar nombres repetidos
function verificarCoincidenciasNombre() {
    let coincidencias = false;
    for (let i = 0; i < nombres.length - 1; i++) {
        let participantePrimero = nombres[i].querySelectorAll("input[type='text']");
        for (let j = 1; j < nombres.length; j++) {
            let participanteComparador = nombres[j].querySelectorAll("input[type='text']");
            if ((participantePrimero[0].value) === (participanteComparador[0].value) ||
                (participantePrimero[0].value) === (participanteComparador[1].value) ||
                (participantePrimero[1].value) === (participanteComparador[0].value) ||
                (participantePrimero[1].value) === (participanteComparador[1].value)) {
                coincidencias = true;
            }
        }
    }
    return coincidencias;
}

//Setear color nombres repetidos
function colorearNombresRepetidos(color) {
    for (let i = 0; i < nombres.length - 1; i++) {
        let participantePrimero = nombres[i].querySelectorAll("input[type='text']");
        for (let j = 1; j < nombres.length; j++) {
            let participanteComparador = nombres[j].querySelectorAll("input[type='text']");
            if ((participantePrimero[0].value) === (participanteComparador[0].value)) {
                participantePrimero[0].style.color = color;
                participanteComparador[0].style.color = color;
            }
            if ((participantePrimero[0].value) === (participanteComparador[1].value)) {
                participantePrimero[0].style.color = color;
                participanteComparador[1].style.color = color;
            }
            if ((participantePrimero[1].value) === (participanteComparador[0].value)) {
                participantePrimero[1].style.color = color;
                participanteComparador[0].style.color = color;
            }
            if ((participantePrimero[1].value) === (participanteComparador[1].value)) {
                participantePrimero[1].style.color = color;
                participanteComparador[1].style.color = color;
            }
        }
    }
}


//comparacion de apellidos
function verificarCoincidenciasApellido() {
    //Verificar apellidos repetidos
    let coincidencias = false;
    for (let i = 0; i < nombres.length - 1; i++) {
        let participantePrimero = nombres[i].querySelectorAll("input[type='text']");
        for (let j = 1; j < nombres.length; j++) {
            let participanteComparador = nombres[j].querySelectorAll("input[type='text']");
            if ((participantePrimero[2].value) === (participanteComparador[2].value) ||
                (participantePrimero[2].value) === (participanteComparador[3].value) ||
                (participantePrimero[3].value) === (participanteComparador[2].value) ||
                (participantePrimero[3].value) === (participanteComparador[3].value)) {
                coincidencias = true;
            }
        }
    }
    return coincidencias;
}

function colorearApellidosRepetidos(color) {
    for (let i = 0; i < nombres.length - 1; i++) {
        let participantePrimero = nombres[i].querySelectorAll("input[type='text']");
        for (let j = 1; j < nombres.length; j++) {
            let participanteComparador = nombres[j].querySelectorAll("input[type='text']");
            if ((participantePrimero[2].value) === (participanteComparador[2].value)) {
                participantePrimero[2].style.color = color;
                participanteComparador[2].style.color = color;
            }
            if ((participantePrimero[2].value) === (participanteComparador[3].value)) {
                participantePrimero[2].style.color = color;
                participanteComparador[3].style.color = color;
            }
            if ((participantePrimero[3].value) === (participanteComparador[2].value)) {
                participantePrimero[3].style.color = color;
                participanteComparador[2].style.color = color;
            }
            if ((participantePrimero[3].value) === (participanteComparador[3].value)) {
                participantePrimero[3].style.color = color;
                participanteComparador[3].style.color = color;
            }
        }
    }
}

function resetearColores() {
    for (let i = 0; i < nombres.length; i++) {
        let formulario = nombres[i].querySelectorAll("input[type='text']");
        formulario[0].removeAttribute("style");
        formulario[1].removeAttribute("style");
        formulario[2].removeAttribute("style");
        formulario[3].removeAttribute("style");
    }
}

function acciones() {
    resetearColores();
    imprimirParticipantes();
    let nombresIguales = verificarCoincidenciasNombre();
    console.log(nombresIguales);

    if (nombresIguales) {
        console.log("Hubo coincidencias en el nombre");
        let colorNombre = prompt("Hubo coincidencias en el nombre! Por favor, ingrese un color");
        colorearNombresRepetidos(colorNombre);
    } else {
        console.log("No hubo coincidencias en el nombre");
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
}


boton1.onclick = acciones;
boton2.onclick = acciones;

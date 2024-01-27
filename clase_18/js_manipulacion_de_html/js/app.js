/*Manipulacion de estilos*/
let seccion1 = document.querySelector("#id-section1");
let pDeSeccion1 = document.querySelector("#id-section1 p");
seccion1.style.margin = "2em";
seccion1.style.padding = "2em";
pDeSeccion1.style.color = "red";
pDeSeccion1.style.textDecoration = "underline";

console.log("Manipulacion de Estilos");
console.log(seccion1.style.margin);
console.log(pDeSeccion1.style.color);


/*Manipulacion de contenidos*/
let pDeSeccion2 = document.querySelector("#id-section2 p");
let smallDeSeccion2 = document.querySelector("#id-section2 small");

let inputTextDeSeccion2 = document.querySelector("#id-section2 input[type='text']");
let inputCheckBoxDeSeccion2 = document.querySelector("#id-chequeo");
let inputRadioDeSeccion2 = document.querySelectorAll("#id-section2 input[type='radio']");
let selectDeSeccion2 = document.querySelector("#id-section2 select");

pDeSeccion2.innerHTML = "Esto lo escribi desde <b>JS</b>";
smallDeSeccion2.innerText = "Esto lo escribi desde <b>JS</b>";

inputTextDeSeccion2.value = "Juan";
inputCheckBoxDeSeccion2.checked = true;
inputRadioDeSeccion2[1].checked = true;
selectDeSeccion2.value = 2;

console.log("\nManipulacion de Contenidos");
console.log(pDeSeccion2.innerHTML);
console.log(smallDeSeccion2.innerHTML);
console.log(inputTextDeSeccion2.value);
console.log(inputCheckBoxDeSeccion2.checked);
console.log(inputRadioDeSeccion2);
console.log(inputRadioDeSeccion2[1].checked);
console.log(selectDeSeccion2.value);


/*Manipulacion de atributos*/
let pDeSeccion3 = document.querySelector("#id-section3 p");
let inputNumberDeSeccion3 = document.querySelector("#id-edad");
pDeSeccion3.setAttribute('id', 'id-parrafo');
console.log(pDeSeccion3.hasAttribute('id'));
console.log(pDeSeccion3.getAttribute('id'));
inputNumberDeSeccion3.setAttribute('max', '10');
inputNumberDeSeccion3.removeAttribute('placeholder'); //elimino el elemento

pDeSeccion3.setAttribute('class', 'color-rojo');


/*Manipulacion de eventos*/
let pDeSeccion4 = document.querySelector("#id-section4 p");
let buttonDeSeccion4 = document.querySelector("#id-section4 button");

function cambiarColor() {
    if (pDeSeccion4.style.color === "red") {
        pDeSeccion4.style.color = "green";
    } else {
        pDeSeccion4.style.color = "red";
    }
}

buttonDeSeccion4.onclick = cambiarColor; //no poner parentesis porque sino se invoca automaticamente (y ademas despues ya no funciona mas)

pDeSeccion4.ondblclick = cambiarColor; //esto es de doble click en el parrafo


/*Manipulacion de elementos*/
let divDeSeccion5 = document.querySelector("#id-section5 div");
let buttonDeSeccion5Agregar = document.querySelector("#id-agregar");
let buttonDeSeccion5Modificar = document.querySelector("#id-modificar");
let buttonDeSeccion5Eliminar = document.querySelector("#id-eliminar");
let buttonDeSeccion5EliminarTodo = document.querySelector("#id-eliminar-todo");

function agregar() {
    let parrafoNuevo = document.createElement('p');
    parrafoNuevo.innerText = "texto agregado desde JS";
    divDeSeccion5.appendChild(parrafoNuevo);
}

function modificar() {
    divDeSeccion5.innerText = "texto modificado desde JS";
}

function eliminarPrimerNodo() {
    let nodos = divDeSeccion5.childNodes; //con este, incluye el text que esta en el div ademas de los tipos Element
    //let nodos = divDeSeccion5.children; //con este, no incluye el text que esta en el div ya que este trae solo de tipo Element y el text es un CharacterData (dentro del DOM)

    console.dir(nodos);
    console.dir(nodos[0]);

    if(nodos.length > 0) {
        divDeSeccion5.removeChild(nodos[0]);
    }
}

function eliminarTodo() {
    //divDeSeccion5.remove(); //elimina a todo el elemento (en este caso, el div)
}

buttonDeSeccion5Agregar.onclick = agregar;
buttonDeSeccion5Modificar.onclick = modificar;
buttonDeSeccion5Eliminar.onclick = eliminarPrimerNodo;
buttonDeSeccion5EliminarTodo.onclick = eliminarTodo;


//let parrafo = document.querySelector("p");
let parrafo = document.querySelectorAll("p");

console.log(parrafo);
console.log(parrafo[1].innerHTML);

parrafo[1].innerHTML = "Hola Mundo";

// let elementoConClase = document.querySelector(".resaltado");
// console.log(elementoConClase);
// elementoConClase.innerHTML = "Cambio";

let elementoConClase = document.querySelectorAll(".resaltado");
console.log(elementoConClase);
//elementoConClase.innerHTML = "Cambio";


let elementoPorId = document.querySelector("#parrafo");
console.log(elementoPorId);
elementoPorId.innerHTML = "Chau";

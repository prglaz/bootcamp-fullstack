const tituloDelArticulo1 = document.querySelector("#id-article h3");
const parrafoDelArticulo1 = document.querySelector("#id-article p");
const botonDelArticulo1Agregar = document.querySelector("#id-article button:first-of-type");
const botonDelArticulo1Quitar = document.querySelector("#id-article button:nth-of-type(2)");

let contador = 0;
function agregarEstilos() {
    // let textoActual = parrafoDelArticulo1.innerText;
    // parrafoDelArticulo1.innerText = textoActual.toUpperCase() + "<p>Hola</p>";
    // Alternativa:
    // let p = document.createElement('p');
    // p.innerText = textoActual + " hola";
    // parrafoDelArticulo1.appendChild(p);

    //parrafoDelArticulo1.setAttribute("style", "background-color: beige;"); //esto pisa todo lo que hubiera en el style inline
    
    // let estilos = parrafoDelArticulo1.getAttribute("style");
    // parrafoDelArticulo1.style.setAttribute("style", estilos + "background-color: beige;")
    
    switch (contador) {
        case 1:
            parrafoDelArticulo1.style.setProperty("text-shadow", "2px 2px 2px gray");
            break;
        case 2:
            tituloDelArticulo1.style.setProperty("color", "blue");
            break;
        case 3:
            contador = 0;
            quitarEstilos();
            return;
        default:
            parrafoDelArticulo1.style.setProperty("background-color", "beige");
    }
    contador++;
}

function quitarEstilos() {
    parrafoDelArticulo1.style.removeProperty("background-color");
    parrafoDelArticulo1.style.setProperty("color", "brown");
    //parrafoDelArticulo1.style.removeProperty("color");
    parrafoDelArticulo1.style.removeProperty("text-shadow");
    tituloDelArticulo1.style.setProperty("color", "brown");
    //tituloDelArticulo1.style.removeProperty("color");
}


botonDelArticulo1Agregar.onclick = agregarEstilos;
botonDelArticulo1Quitar.onclick = quitarEstilos;


function mostrar() {
    console.log(opciones.value);
}
const opciones = document.querySelector("body section:last-of-type form div input[type='radio']:checked");

const boton = document.querySelector("body section:last-of-type form input[type='button']");

boton.onclick = mostrar;
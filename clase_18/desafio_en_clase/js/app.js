let seccion1 = document.querySelector("#id-section1");
let button1 = document.querySelector("#id-button");

function crearTitulo(pTitulo) {
    let titulo = document.createElement('h3');
    titulo.innerText = pTitulo;
    seccion1.appendChild(titulo);
}

function crearParrafo(pParrafo) {
    let parrafo = document.createElement('p');
    parrafo.innerText = pParrafo;
    seccion1.appendChild(parrafo);
}

function crearImagen(path, descripcion) {
    let imagen = document.createElement('img');
    imagen.setAttribute('src', path);
    imagen.setAttribute('alt', descripcion);
    imagen.setAttribute('class','imagen');
    seccion1.appendChild(imagen);
}

function agregar() {
    const datos = [
        ["Titulo Primero", "Primer Parrafo", './images/auto01.jpg', ['foto de BMW']],
        ["Titulo Segundo", "Segundo Parrafo", './images/auto02.jpg', ['foto de Chevrolet']],
        ["Titulo Tercero", "Tercer Parrafo", './images/auto03.jpg', ['foto de Ford']]
    ];
    //TODO: AGREGAR FOR PARA ITERAR EN ARRAY PARA ENVIAR TODOS LOS ELEMENTOS DEL MISMO
    for (let i = 0; i < datos.length; i++) {
        crearTitulo(datos[i][0]);
        crearParrafo(datos[i][1]);
        crearImagen(datos[i][2], datos[i][3]);
    }
}

button1.onclick = agregar;





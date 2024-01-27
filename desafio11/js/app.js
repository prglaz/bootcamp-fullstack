let divMenuItems = document.getElementById("id-menu-items");
let btnProcesarPedido = document.getElementById("btn-procesar_pedido");
let inputNombre = document.getElementById("id-nombre");
let inputApellido = document.getElementById("id-apellido");
let inputDireccion = document.getElementById("id-direccion");
let inputTel = document.getElementById("id-telefono");
let inputMail = document.getElementById("id-mail");
let inputMenuItems = document.getElementById("id-menu-items");


const menuItems = [
    { "id": 1, "nombre": "Pollo grillado", "descripcion": "Pollo cocinado en la plancha. Viene con una guarnición (elegirla en los comentarios)", "precio": 2000 },
    { "id": 2, "nombre": "Vacio a la parrilla", "descripcion": "Porción de vacío a la parrilla. Comen 2 personas. Viene con una guarnición (elegirla en los comentarios)", "precio": 4000 },
    { "id": 3, "nombre": "Parrillada completa para 4 personas", "descripcion": "Parrillada que incluye: 1 porción de asado, 1 porción de vacío, 1 porción de pollo, 2 Chorizos, 1 morcilla, chinchulín, 2 riñones, 1 molleja, 1 provoleta. Viene con una guarnición de papas fritas y una ensalada mixta", "precio": 18000 },
];

const cargarItems = () => {
    divMenuItems.innerHTML = "";

    menuItems.forEach((e, i) => {
        // console.log(e)
        // const idItem = document.createElement('p');
        // idItem.innerText = `${e.id}`;
        const nombreItem = document.createElement('p');
        nombreItem.innerText = `${e.nombre.toUpperCase()}`;
        const descItem = document.createElement('p');
        descItem.innerText = `DESCRIPCIÓN: ${e.descripcion}`;
        const precioItem = document.createElement('p');
        precioItem.innerText = `PRECIO: $${e.precio}`;

        const buttonAgregar = document.createElement('button');
        buttonAgregar.setAttribute('id', `btn-agregar${i}`);
        buttonAgregar.innerText = "+";
        buttonAgregar.onclick = (event) => {
            event.preventDefault();
            agregar(i);
        };

        const inputContadorItem = document.createElement('input');
        inputContadorItem.setAttribute('type', 'number');
        inputContadorItem.setAttribute('id', `contador${i}`);
        inputContadorItem.value = 0;

        const buttonQuitar = document.createElement('button');
        buttonQuitar.setAttribute('id', `btn-quitar${i}`);
        buttonQuitar.innerText = "-";
        buttonQuitar.onclick = (event) => {
            event.preventDefault();
            quitar(i);
        };

        const divItem = document.createElement("div");
        // divItem.style.display = "flex";
        divItem.style.gap = "1vw";
        // divItem.append(idItem);
        divItem.append(nombreItem);
        divItem.append(descItem);
        divItem.append(precioItem);
        divItem.append(buttonAgregar);
        divItem.append(buttonQuitar);
        divItem.append(inputContadorItem);

        divMenuItems.append(divItem);
    });
}

window.onload = cargarItems;


const agregar = (indice) => {
    // event.preventDefault();
    const contador = document.getElementById(`contador${indice}`);
    let valor = Number(contador.value);
    contador.value = ++valor;
}

const quitar = (indice) => {
    // event.preventDefault();
    const contador = document.getElementById(`contador${indice}`);
    let valor = Number(contador.value);
    contador.value = valor === 0 ? valor : --valor;
}

function validarForm() {
    if (inputNombre.value == "" || inputApellido == "" || inputDireccion == "" || inputTel == "" || inputMail == "") {
        alert("Corregir datos");
        return false;
    }
    return true;
}

const procesarPedido = (event) => {
    // console.log(event);
    // event.preventDefault();
    let formCorrecto = validarForm();
    if (formCorrecto) {
        const pedido = {};
        let precioTotalPedido = 0;
        pedido["nombre"] = inputNombre.value;
        pedido["apellido"] = inputApellido.value;
        pedido["direccion"] = inputDireccion.value;
        pedido["telefono"] = inputTel.value;
        pedido["email"] = inputMail.value;
        pedido["items"] = [];

        menuItems.forEach((e, i) => {
            const cantItem = document.getElementById(`contador${i}`);
            if (cantItem.value > 0) {
                const elemento = {};
                elemento["nombreItem"] = e.nombre;
                elemento["descripcionItem"] = e.descripcion;
                elemento["cantidadItem"] = cantItem.value;
                elemento["precioItem"] = e.precio;
                elemento["precioTotalItem"] = Number(elemento["precioItem"]) * Number(elemento["cantidadItem"]);
                // console.log(elemento);
                precioTotalPedido += elemento["precioTotalItem"];
                pedido["items"].push(elemento);
            }
        })

        pedido["preciototal"] = precioTotalPedido;

        console.log(`El pedido es:`);
        console.log(pedido);
    }
}

btnProcesarPedido.addEventListener("click", procesarPedido);

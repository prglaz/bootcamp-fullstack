let nivel = Number(window.prompt("Indica tu nivel actual:"))
let categoria = null;

switch (nivel) {
    case 1:
    case 2:
    case 3:
        categoria = "Tu categoria es inicial"
        break;
    case 4:
    case 5:
    case 6:
        categoria = "Tu categoria es intermedia"
        break;
    case 7:
        categoria = "Tu categoria es avanzada"
        break;
    default:
        categoria = "Tu categoria es pro"
        //break; //no hace falta poner el break al default
}

document.write(categoria);
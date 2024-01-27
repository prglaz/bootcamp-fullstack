let formulario = document.querySelector("#id-section1 form");
let botonCalcular = document.querySelector("#id-calcular");

function calcularOperacion(params) {
    let primerValor = Number(document.querySelector("#id-numero1").value)
    // console.log(primerValor);
    let segundoValor = Number(document.querySelector("#id-numero2").value)
    // console.log(segundoValor);
    let resultado;
    let operacionSeleccionada = document.querySelectorAll("#id-section1 input[type='radio']"); //COMO SERIA PARA OBTENER POR EL NAME = "operacion"?
    // console.dir(operacionSeleccionada[0].id);
    for (let i = 0; i < operacionSeleccionada.length; i++) {
        if(operacionSeleccionada[i].checked) {
            if (operacionSeleccionada[i].id === "id-suma") {
                resultado = primerValor + segundoValor;
            } else if (operacionSeleccionada[i].id === "id-resta") {
                resultado = primerValor - segundoValor;
            } else if (operacionSeleccionada[i].id === "id-multiplicacion") {
                resultado = primerValor * segundoValor;
            } else if (operacionSeleccionada[i].id === "id-division") {
                resultado = primerValor / segundoValor;
            }
        }
    }
    // console.log(resultado);
    agregarInputText(resultado);
}

function agregarInputText(valor) {
    let marco = document.createElement('div');
    let inputText = document.createElement('input');
    inputText.setAttribute("type", "text");
    inputText.value = valor;
    inputText.setAttribute('readonly', 'true');
    inputText.style.color = 'green';
    marco.appendChild(inputText);
    formulario.appendChild(marco);
}


botonCalcular.onclick = calcularOperacion;




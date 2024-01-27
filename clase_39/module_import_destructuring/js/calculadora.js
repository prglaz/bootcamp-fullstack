import { PI, sumar, restar, multiplicar, dividir } from "./operaciones.js";

const calculadora = (props) => {
    const { inputNumeroA, inputNumeroB, inputResultado, tipoDeOperacion, btnCalcular } = props;
    btnCalcular.onclick = () => {
        const operaciones = {
            "+": sumar,
            "-": restar,
            "*": multiplicar,
            "/": dividir,
        };
        const numeroA = Number(inputNumeroA.value);
        const numeroB = Number(inputNumeroB.value);
        inputResultado.value = operaciones[tipoDeOperacion.value](numeroA, numeroB);
    };
};

export default calculadora;

//btnCalcular.onclick = () => {
// switch (tipoDeOperacion.value) {
//     case "+":
//         inputResultado.value = sumar(Number(inputNumeroA.value), Number(inputNumeroB.value));
//         console.log(tipoDeOperacion.value)
//         break;
//     case "-":
//         inputResultado.value = restar(Number(inputNumeroA.value), Number(inputNumeroB.value));
//         break;
//     case "*":
//         inputResultado.value = multiplicar(Number(inputNumeroA.value), Number(inputNumeroB.value));
//         break;
//     case "/":
//         inputResultado.value = dividir(Number(inputNumeroA.value), Number(inputNumeroB.value));
//         break;
//     default:
//         break;
// }
//};


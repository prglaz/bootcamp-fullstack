const PI = 3.141516;
function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

const dividir = (a, b) => {
    if (b === 0) {
        return "Error";
    }
    return a / b;
}

export { PI, sumar, restar, multiplicar, dividir }
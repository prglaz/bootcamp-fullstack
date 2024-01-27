(function saludar() {
    console.log("Hola Mundo")
})();


const calculadora = (function() {
    let version = "2.0";

    (function inicializar() {
        console.log(`Calculadora ${version}`)
    })();

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
        return a / b;
    }

    return {
        sumar,
        restar,
        multiplicar,
        dividir,
    };
})();

// console.log(calculadora)
console.log(calculadora.dividir(20, 5));
console.log(calculadora.multiplicar(10, 3));

let sueldoBruto = 1000;
let sueldoNeto = calculadora.restar(sueldoBruto, 100);
console.log(sueldoNeto);



"use strict"; //esto hace que se use el modo estricto (ECMAscript)

// Lo siguiente anda con JS pero no con ECMAJS
// a = 20;
// console.log(a)

// let undefined;
// console.log(undefined);

// function sumar(a, b, a) {
//     console.log(a+b) //aca el parametro a que se toma es el del segundo
// }
// sumar (10, 5, 15) //en JS, esto da 20. En ECMA no lo permite



//parametros con valor por defecto. Esto es valido en ambas. Los parametros con valores por defecto se tienen que poner al final en la definicion de la funcion
function sumar(a, b, c = 0) {
    console.log(a+b+c) //aca el parametro a que se toma es el del segundo
}
sumar(10, 20);
sumar(10,20,5);

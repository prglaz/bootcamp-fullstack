//document.cookie = "marca=Fiat"

let marca = document.cookie.split("=")[1];
console.log(marca)

document.cookie = "marca=Ford";
document.cookie = "modelo=Fiesta";

console.log(document.cookie)
let cookies = document.cookie.split(";");
let modelo = cookies[1].split("=")[1];
console.log(modelo);


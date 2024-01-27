// alert("Bienvenidos");
//confirm("Estas seguro de continuar?");
//alert(window.location);
//window.location = "https://www.educacionit.com/"; //con esto va a hacer que se redireccione a esa pagina
//window.prompt("Que edad tienes?","18"); //para numeros no seria necesaria las comillas
// console.log("Hola Mundo");
//console.error("Hola Mundo");
//console.info("Hola Mundo");
//console.assert(1 > 2, "1 no es mayor que 2"); // solo se muestra el mensaje si la condicion inicial es falsa

//con time y timeEnd muestra el tiempo que pasa entre 1 y otro (para medir tiempo de algunos pasos intermedios)
// console.time();
// alert("Bienvenidos");
// console.timeEnd();

// let varA = "Hola Mundo"; //se podria hacer en 2 pasos: let a; y despues: a = 10;
// console.log(varA);
// const CONSTANTE_1 = "Hola Mundo Constante";
// console.log(CONSTANTE_1);

// varA = "Chau";
// console.log(varA);
// CONSTANTE_1 = "Chau Constante"; //esto genera un error porque es una constante
// console.log(CONSTANTE_1);

// let a = 10;
// let b;
// let c = "Hola";
// let d = true;
// let e = null;
// let f = 4 - "x";
// let g = 10 - Number("2");
// //let g = 10 - "2"; // asi funcionaria igual que el anterior
// let h = String(100);
// let i = 15.88;
// let j = "true";
// let k = 0;

// console.log(a + " tipo: " + typeof(a));
// console.log(b,typeof(b));
// console.log(c,typeof(c));
// console.log(d,typeof(d));
// console.log(e,typeof (e));
// console.log(f,typeof (f));
// console.log(g, typeof (g));
// console.log(h, typeof (h));
// console.log(i, Number.parseInt(i));
// console.log(Boolean(j),typeof(Boolean(j)));
// console.log(Boolean(k), typeof (Boolean(k)));


let saludo = "Hola";
let nombreDeLaPersona = "Pablo";
let x = saludo + " " + nombreDeLaPersona;
console.log(x);

let a = 7;
let b = 3;
let c = a + b;
let d = a >= b;
let e = a == b;
let f = a != b;
let m;

console.log(c);
console.log(d);
console.log(e);
console.log(f);

let g = (a > b) && (a < 100);
let h = (a > b) && (a > 100);
let l = (a > b) && !(a > 100);
let j = (a > b) || (a < 100);
let k = (a > b) || (a > 100);
let n = (a > b) && m != undefined; // m != undefined tambien se puede poner como !m (tambien sirve para verificar contra null)


console.log(g);
console.log(h);
console.log(l);
console.log (j);
console.log(k);
console.log(n);

let i = 10;
console.log(i++);
console.log(i);
console.log(++i);
console.log(i);


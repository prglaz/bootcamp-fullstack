/* ****************************** EJERCICIOS ****************************** */

// ● Triplicar estos valores[50, 25, 75, 10, 100] e imprimir en la consola.
const valoresA = [50, 25, 75, 10, 100];
const valoresTriplicados = valoresA.map((valor) => valor * 3);
console.log('valoresTriplicados: ', valoresTriplicados);

// ● Filtrar los valores impares[13, 14, 8, 11, 99] e imprimir en la consola.
const valoresB = [13, 14, 8, 11, 99];
const valoresFiltrados = valoresB.filter((valor) => valor % 2 != 0);
console.log('valoresFiltrados: ', valoresFiltrados);

// ● Sumar todo los valores[100, 15, 25, 50, 10] e imprimir en la consola.
const valoresD = [100, 25, 50, 30, 15];
const valoresReducidos = valoresD.reduce((acumulador, valor) => acumulador + valor);
console.log('valoresReducidos: ', valoresReducidos);

// ● Imprimir cada valor del siguiente array junto a la leyenda “valor: ”[10, 25, 50, 30, 15]
const valoresC = [100, 15, 25, 50, 10];
valoresC.filter((valor) => console.log(`valor: ${valor}`));
/* ALTERNATIVA (el anterior NO me parece correcto aunque anda) */
//valoresC.forEach((valor) => console.log(`valor: ${valor}`))

// ● Agregar la fruta  “pera” antes de la “manzana”['manzana', 'ananá', 'durazno']
const frutasA = ['manzana', 'ananá', 'durazno'];
frutasA.unshift('pera');
console.log('frutasA: ', frutasA);

// ● Agregar la fruta  “frutilla” después del “'durazno” [ 'manzana', 'ananá', 'durazno' ]
const frutasB = ['manzana', 'ananá', 'durazno'];
frutasB.push('“frutilla”');
console.log('frutasB: ', frutasB);

// ● Quitar la marca  “ford”['ford', 'renault', 'peugeot', 'fiat']
const marcasA = ['ford', 'renault', 'peugeot', 'fiat'];
marcasA.shift();
console.log('marcasA: ', marcasA);

// ● Quitar la marca  “fiat”['ford', 'renault', 'fiat']
const marcasB = ['ford', 'renault', 'fiat'];
marcasB.pop();
console.log('marcasB: ', marcasB);
// Callbacks

const saludar = (nombre) => {
  alert(`Hola ${nombre}`);
};

const procesarEntradaUsuario = (callback) => {
  const nombre = prompt(`Por favor ingresa tu nombre`);

  callback(nombre);
};

// procesarEntradaUsuario(saludar);

// Repeat

// const nombre = "Emiliano ";
// console.log(nombre.repeat(3));

// ChartAt

// const nombre = "Emiliano";
// console.log(nombre.charAt(4));

// Concat

const nombre = "Gabriel, ";
// console.log(nombre.concat("holu"));

const arr = [1, 2, 3];
// console.log(arr.concat([4, 5, 6]));
// console.log(arr.concat("Mati"));

// Includes
// console.log(nombre.includes(`L`));
// console.log(nombre.includes(`a`) && nombre.includes(`e`));

// console.log(arr.includes(5));

// Slice
// El start lo incluye, el end no lo incluye
// console.log(nombre.slice(2, 5));

// Map

const numeros = [1, 2, 3, 4, 5, 6, 7];

const numerosDoble = numeros.map((numero) => {
  return numero * 2;
});

// console.log(numeros);
// console.log(numerosDoble);

// Filter

// const ejemplo = [1, 2, 3, 4, 5, 6, 7];

// const ejFiltrado = ejemplo.filter((item) => {
//   return item > 3;
// });

// console.log(ejFiltrado);

// Ejemplos
// const arrayPalabras = ["Argentina", "Qatar", "Suiza", "Belgica", "Portugal"];

// const arrayPalabrasFiltrado = arrayPalabras.filter((pais) => {
//   return pais.includes("t");
// });

// console.log(arrayPalabrasFiltrado);

// Find

const ejemplo = [1, 2, 3, 4, 5, 6, 7];

// const ejFind = ejemplo.find((item) => {
//   return item > 4;
// });

// const palabrasFind = arrayPalabras.find((pais) => {
//   return pais.includes("g");
// });

// console.log(ejFind);
// console.log(palabrasFind);

// Reduce

// const arrayReduce = [22, 76, 86];

// const reducido = arrayReduce.reduce((acc, val) => {
//   acc = acc + val;
//   return acc;
// }, 0);

// console.log(reducido);

// Sort

// const arrDesordenado = [1, 3, 8, 2, 24, 12];

// console.log(arrDesordenado.sort()); Si lo pasamos asi sin nada en el sort, nos lo va a pasar desordenado

// console.log(
//   arrDesordenado.sort((a, b) => {
//     return a - b;
//   })
// );

// Every

// const arrEvery = [1, 2, 8, 2, 24, 12];

// console.log(
//   arrEvery.every((elemento) => {
//     return elemento > 1;
//   })
// );

// some

// const arrNum = [1, 2, 3, 4, 5, 6];

// console.log(
//   arrNum.some((item) => {
//     return item > 8;
//   })
// );

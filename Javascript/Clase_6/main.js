// Spread

const numeros = [1, 2, 3, 4];
// const numerosCopiados = numeros;
const numerosCopiados = [...numeros];

numerosCopiados[0] = 10;
// console.log(numeros, numerosCopiados);

const otrosNumeros = [5, 6, 7, 8];
// console.log([100, ...numeros, ...otrosNumeros]);

// Spread con objetos

const user = {
  nombre: "Pepe",
  edad: 23,
};

const userContact = {
  Telefono: `2131231123`,
  email: `ada@dada.com`,
};

let copyUser = { ...user };
// console.log(user);
copyUser.web = `www.pepe.com`;
// console.log(copyUser);

const fullUser = { ...user, ...userContact, nombre: "Fran" };
// console.log(fullUser);

// Metodos de string

//  Length
const string = `Hola mundo`;
// if (string.length === 8) {
//   console.log("Tuki");
// }

// toUpperCase, toLowerCase

// console.log(string.toUpperCase());
// console.log(string.toLowerCase());

// Replace

const stringModificado = string.replace("mundo", "Messi");
// console.log(stringModificado);
// console.log(string);

// trim
const stringConEspacios = "             Hola mundo";
// console.log(stringConEspacios.trim());

// Ejercicio 1

const stringEjercicio1 = "Hola MuNDo";
// console.log(stringEjercicio1.toLowerCase().replace("mundo", "pepito"));

// Split

const stringSplit = "Hola mundo, soy un string";
const resultadoSplit = stringSplit.split(",");
// console.log(resultadoSplit);

// typeof

// console.log(typeof stringSplit);
// console.log(typeof resultadoSplit);

// ARRAYS

// indexOf

const arrGenerico = [1, 2, 3, 4, 5];

// console.log(arrGenerico.indexOf(3));

// pop
// console.log(arrGenerico);
// const pop = arrGenerico.pop();
// console.log(arrGenerico);
// console.log(pop);

// shift
// console.log(arrGenerico);
// const shift = arrGenerico.shift();
// console.log(shift);
// console.log(arrGenerico);

// unshift
// console.log(arrGenerico.unshift("Messi"));
// console.log(arrGenerico);

// reverse

// console.log(arrGenerico.reverse());

// to string

// const arrToString = arrGenerico.toString();
// console.log(arrToString);

//  push

const animales = ["perro", "gato", "conejo"];

// animales.push("tortuga");
// console.log(animales);

// join

// console.log(animales.join("*"));

// concat

// console.log(animales.concat(["pato", "gallina"]));

//  slice

const nombres = ["Jose", "Angel", "Agus", "Ruben", "Tuki", "Messi"];

const corte = nombres.slice(1, 3);

// console.log(corte);

// includes
// console.log(nombres.includes("Tuki"));

// forEach

// nombres.forEach((nombres) => console.log(nombres));

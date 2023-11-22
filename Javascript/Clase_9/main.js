// console.log(document);

const logo = document.getElementById("logo");
const div = document.getElementById("header");

// console.log(logo.innerHTML);
// console.log(div.innerHTML);

const logoClase = document.getElementsByClassName("logo");

// console.log(logoClase[0].innerHTML);

// for (let i = 0; i < logoClase.length; i++) {
//   console.log(logoClase[i].innerHTML);
// }

const pTag = document.getElementsByTagName("p");

// console.log(pTag[0].innerHTML);

const aQuery = document.querySelector(".logo");

// console.log(aQuery); Te trae el primero

const aAll = document.querySelector("a");

// Aca hacemos lio

logo.innerHTML = "Hola como estan?";

let ejemplo1 = "Hola";
let ejemplo2 = "Hola";

// console.log(ejemplo1 === ejemplo2);

// let ejemplo3 = {
//   nombre: "Rodrigo",
//   camada: 2717,
// };

// let ejemplo4 = {
//   nombre: "Rodrigo",
//   camada: 2717,
// };

// console.log(ejemplo3.nombre === ejemplo4.nombre);

// "" === ""
// {} !== {}
// [] !== []

// logo.innerHTML = "Estoy agregando algo";

// setTimeout(() => {
//   logo.innerHTML = "Estoy agregando algo";
// }, 2000);

// Lo que le pongamos de milisegundos, es lo que va a tardar en aparecer en pantalla

// setInterval(() => {
//   console.log("Ejecutando");
// }, 2000);
// Lo repite infinitamente cada 2000 milisegundos

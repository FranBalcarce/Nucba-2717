function saludar() {
  console.log("Hola,2717");
}

// saludar();

function saludoPersonal(nombre) {
  console.log(`Hola ${nombre} `);
}

// saludoPersonal("Angel");
// saludoPersonal("Martin");

function descripcionPersonal(nombre, edad) {
  console.log(`Hola Soy ${nombre} y tengo ${edad} años`);
}

// descripcionPersonal("Rodrigo", "31");
// El nombre se puedo poner asi

// O lo podemos poner asi:

let miNombre = "Rodrigo";

// descripcionPersonal(miNombre, 31);

function otraDescripcion(nombre, edad, carrera = "abogacia") {
  console.log(
    `Hola! Mi nombre es ${nombre}. Tengo ${edad} años y estudio ${carrera}`
  );
}

// otraDescripcion("Enzo", "20", "Desarrollo web");

function Sumar(a, b) {
  return a + b;
}

// console.log(sumar(2, 3));

// for (InputDeviceInfo, condicion, actualizacion){
//     Lo que tiene que hacer el bucle
// }

// Break

// for (let i = 0; i < 10; i++) {
//   if (i === 4) {
//     break;
//   }
//   console.log(`El numero que estamos iterando es ${i}`);
// }

// Continue

// for (let i = 20; i > 10; i--) {
//   if (i === 15) {   //Saltea ese numero y sigue
//     continue;
//   }

//   console.log(`El numero que estamos iterando es ${i}`);
// }

// for (let i = 20; i > 10; i--) {
//   if (i === 15 || i === 13) { //Saltea los dos numeros y sigue
//     continue;
//   }

//   console.log(`El numero que estamos iterando es ${i}`);
// }

// While

// while (condition) {
//     codigo a ejecutar
// }

let pConP = 0;

// while (pConP < 10) {
//   console.log(pConP);

//   pConP++;
// }

// do {
//   console.log(pConP);
//   pConP++;
// } while (pConP < 0);

// while (pConP < 20) {
//   pConP++;
//   if (pConP % 2 !== 0) {
//     continue;
//   }
//   console.log(`El numero ${pConP} es par`);
// }

// Arrays

// let miArray = [2, 6, "Nucba", true];

// console.log(miArray);
// Ahi me va a devolver en que posicion esta cada uno, ej: en posicion 0 esta el 2

// let miArray = [2, 6, "Nucba", true];

// console.log(miArray[2]);
// Ahi me va a devolver lo que este en la posicion 2, osea Nucba

// let miArray = [2, 6, "Nucba", true];

// console.log(miArray.length);
// Ahi me va a devolver cuantos valores hay, en este aso hay 4

// let miArray = [2, null, "Nucba", true, 25];

// console.log(0);
// console.log(3);

// Aca me va a devolver los dos que consolee

// let miArray = [2, null, "Nucba", true, 25];
// let nombre = "Gabriel";

// console.log(0);
// console.log(3);

// console.log(Array.isArray(miArray));
// console.log(Array.isArray(nombre));
// Aca le pregunto si mi array es un array, si lo es me va a dar true

// let miArray = [2, null, "Nucba", true, 25];
// let nombre = "Gabriel";

// for (let i = 0; i < miArray.length; i++) {
//   console.log(miArray[i]);
// }
// Aca recorrimos todo el array en orden

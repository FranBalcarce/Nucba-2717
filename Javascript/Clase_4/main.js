// let resultado;
// let numero1 = 1;
// let numero2 = 2;

// resultado = numero1 + numero2;

// console.log(`El resultado es ${resultado}`);

function sumar(num1, num2) {
  return num1 + num2;
}

// console.log(`El resultado es ${sumar(2, 5)}`);

function descripcion(nombre, edad) {
  console.log(`Hola! Mi nombre es ${nombre} y tengo ${edad} años`);
}

// descripcion("Rodrigo", 31);

// Funciones Flecha

// let suma = (numero1, numero2) => {
//   return numero1 + numero2;
// };

// console.log(suma(5, 6));

// En las funciones Flecha, le podemos sacar las llaves, solo si escribimos todo en una sola linea

// Ej:
let suma = (numero1, numero2) => numero1 + numero2;

// console.log(suma(5, 6));

// En esta funcion el return se hace solo

// Otro Ejemplo con las dos maneras de hacerlo

// Una forma es esta , con las llaves

// const saludar = (nombre) => {
//   console.log(`Hola ${nombre}, como te va?`);
// };

// saludar();

// Y la otra es esta sin las llaves

// const saludar = (nombre) => console.log(`Hola ${nombre}, como te va?`);

// saludar("Mati");

// Funciones recursivas

// for (let i = 5; i > 0; i--) {
//   console.log(i);
// }

let cuentaAtras = (numero) => {
  if (numero === 0) {
    return;
  }

  console.log(numero);
  return cuentaAtras(numero - 1);
};

// cuentaAtras(5);

const duplicar = (num) => {
  num = num + num;
  console.log(num);

  if (num > 100) {
    return "Terminó";
  }

  return duplicar(num);
};

// duplicar(2);

// Callback

// let logSaludo = (nombre) => {
//   console.log(`Hola ${nombre}`);
// };

// let procesarEntradaUsuario = (callback) => {
//   let nombre = prompt("Por favor ingrese su nombre");

//   callback(nombre);
// };

// procesarEntradaUsuario(logSaludo);

// const generarFuncion = () => {
//   const nombre = "Mozilla";
//   const mostrarNombre = () => {
//     return alert(nombre);
//   };
//   return mostrarNombre;
// };

// const nuevaFuncion = generarFuncion();
// nuevaFuncion();

// Ejercicios del video
// 1) Escribí una función que reciba como parámetro un nombre y que imprima en consola “hola, soy {nombre} “.

// function imprimirNombre(nombre) {
//   console.log(`Hola soy ${nombre}`);
// }

// imprimirNombre("Francisco");

// Este con sintaxis de flecha

// const imprimirNombre = (nombre) => {
//   console.log(`Hola, soy ${nombre}`);
// };
// imprimirNombre("Francisco");

// 2)Escribí una función que imprima en consola la suma de dos números pasados por parámetro.

// function suma(num1, num2) {
//   console.log(num1 + num2);
// }

// suma(3, 5);

// Con sintaxis de suma

// const suma = (num1, num2) => {
//   console.log(num1 + num2);
// };

// suma(2, 4);

// 3)Escribí una función que reciba dos números por parámetro, multiplique a cada uno por dos y luego imprima por consola la suma de ambos números multiplicados

// function sumarMultiplicados(num1, num2) {
//   console.log(num1 * 2 + num2 * 2);
// }
// sumarMultiplicados(2, 3);

// const sumarMultiplicados = (num1, num2) => {
//   console.log(num1 * 2 + num2 * 2);
// };

// sumarMultiplicados(3, 5);

// 4)Escribí una función que pueda recibir un número como parámetro y que imprima por consola la tabla de multiplicación del 1 al 10 de ese número.
// Nota: El mensaje en consola debe ser "user-friendly" (Ej. : El “(número) multiplicado por (número actual de la tabla) es igual a (resultado) “)

// function tablaDel(numero) {
//   for (let i = 0; index <= 10; i++) {
//     console.log(
//       `El numero ${numero} multiplicado por ${i} es igual a ${numero * i}`
//     );
//   }
// }
// tablaDel(i);

// 5)Escribí una función que reciba dos números por parámetro y que imprima por consola todo el intervalo entre ambos números, incluyéndolos. Por ejemplo , si ingresamos 1 y 3 deben imprimirse en consola los números “1” , “2” y “3”. Sin son iguales, que se imprima “Ambos números son iguales”.

// function intervaloEntre(num1, num2) {
//   let numeroActual = num1;

//   if (numeroActual > num2) {
//     console.log(numeroActual);
//     while (numeroActual > num2) {
//       numeroActual--;
//       console.log(numeroActual);
//     }
//   } else if (numeroActual < num2) {
//     console.log(numeroActual);
//     while (numeroActual < num2) {
//       numeroActual++;
//       console.log(numeroActual);
//     }
//   } else {
//     console.log("Ambos números son iguales");
//   }
// }

// intervaloEntre(25, 20);

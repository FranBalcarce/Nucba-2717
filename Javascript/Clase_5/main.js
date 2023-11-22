// let auto = {
//   marca: "Fiat",
//   modelo: "Uno",
//   anio: 2002,
//   combustible: "Nafta",
//   seguro: true,
//   color: ["Rojo", "Azul", "Negro"],
// };

// console.log(auto);

// si quiero saber cierta cosa del auto pongo:

// console.log(auto.); con el punto, me van a aparecer todas las opciones que tengan que ver con el auto

// console.log(auto.color[2]); donde tenga varias opciones dentro de una, entre corchetes puedo elegir si quiero el primero, el segundo, etc...

// let array = ["Auto", "Moto", "Barco"];

// let peliculas = [
//   {
//     titulo: "Volver al futuro",
//     anio: 1985,
//     protagonista: "Michael Fox",
//   },
//   {
//     titulo: "Harry Potter 1",
//     anio: 2001,
//     protagonista: "Daniel Radcliffe",
//   },
// ];

// console.log(peliculas);

// class Auto {
//   constructor(marca, modelo, anio, seguro) {
//     (this.marca = marca),
//       (this.modelo = modelo),
//       (this.anio = anio),
//       (this.seguro = seguro);
//   }

//   arrancar = function () {
//     return "El auto arranca";
//   };

//   getMarca = () => {
//     return this.marca;
//   };
// }

// let auto1 = new Auto("Fiat", "Uno", 2002, true);
// let auto2 = new Auto("Audi", "a3", 2010, false);

// auto1.marca = "Chevrolet"  Puedo pisar lo que estaba antes, ahora la marca pasa a ser chevrolet

// console.log(auto1);
// console.log(auto2);
// console.log(auto1.arrancar());
// console.log(auto2.getMarca());

class Robot {
  constructor(color, posicionX, posicionY) {
    (this.color = color),
      (this.posicionX = posicionX),
      (this.posicionY = posicionY);
  }

  desplazar = function (x, y) {
    (this.posicionX = x), (this.posicionY = y);
  };

  posicion = function () {
    console.log(
      `El robot ${this.color} esta en X:${this.posicionX} y en Y ${this.posicionY}`
    );
  };
}

let robot1 = new Robot("Azul", 20, 40);
let robot2 = new Robot("Rojo", 10, 50);

// console.log(robot1);

robot1.posicion();

robot1.desplazar(80, 80);

robot1.posicion();

// function ejemplo(){
//     let numero = 100;
// }

// Si lo dejo adentro del function no lo voy a poder usar porque vive solo adentro de la function

// console.log(numero);

var a = "Estoy global?";

function holu() {
  var b = "Estoy dentro de una funcion";
}

{
  var c = "Estoy en bloque";
}

{
  let d = "Estoy en bloque?";
}

{
  const e = "Estoy en bloque const";
}

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);

// Operadores

// let uno = true;
// let dos = false;

// console.log(uno || dos);

// if (2 + 4 == 7) {
//   console.log("Esto dio true");
// } else {
//   console.log("yyyy, me parece que 2 + 4 no es 7 ");
// }

// console.log("Aca sigue el codigo");

// let llueve = false;

// if (llueve) {
//   console.log("Lleva paraguas");
// } else {
//   console.log("Anda tranca nomas");
// }

// let edad = 17;

// if (edad >= 18) {
//   console.log("Puede tomar alcohol");
// } else if (edad === 17) {
//   console.log("Que tome juguito");
// }

// console.log("Aca sigue el codigo");

// Switch

const mascota = "gato";

// if (mascota === "lagarto") {
//   console.log("Tengo un lagarto");
// } else if (mascota === "Perro") {
//   console.log("Tengo un perro");
// } else if (mascota === "gato") {
//   console.log("Tengo un gato");
// } else if (mascota === "iguana") {
//   console.log("Tengo una iguana");
// } else {
//   console.log("No tengo mascota :(");
// }

switch (mascota) {
  case "lagarto":
    console.log("Tengo un lagarto");
    break;
  case "perro":
    console.log("Tengo un perro");
    break;
  case "gato":
    console.log("Tengo un gato");
    break;
  case "iguana":
    console.log("Tengo una iguana");
    break;
  default:
    console.log("No tengo mascota");
    break;
}

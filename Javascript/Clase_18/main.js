// fetch("https://pokeapi.co/api/v2/pokemon/charmander")
//   .then((res) => res.json())
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

const body = document.querySelector("body");

const miFetch = async () => {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/7");

    const data = await response.json();

    body.innerHTML = data.name;
  } catch (error) {
    body.innerHTML = `Rompimos todo y el error fue ${error}`;
  }
};

miFetch();

const cardContainer = document.querySelector("main");
const button = document.getElementById("reload");

const BASE_URL = "https://rickandmortyapi.com/api/character/";

const getRandomNumber = () => {
  return Math.floor(Math.random() * 825) + 1;
};

const getPj = async () => {
  try {
    const newPj = await fetch(`${BASE_URL} ${getRandomNumber()}`).then((res) =>
      res.json()
    );
    console.log(newPj);
    return newPj;
  } catch (error) {
    console.log(error);
    cardContainer.innerHTML = `
    <h1>ROMPIMOS TODO...</h1>
    `;
  }
};

const renderNewPj = (character) => {
  const { image, name, species, origin, gender, id } = character;
  cardContainer.innerHTML = `
  <div class="cardWrapper" id=${id}>
        <div class="imgContainer">
          <img src="${image}" alt="" />
        </div>
        <div class="infoContainer">
          <h1>${name}</h1>
          <div class="info">
            <h2>ESPECIE</h2>
            <span>${species}</span>
          </div>
          <div class="info">
            <h2>ORIGEN</h2>
            <span>${origin.name}</span>
          </div>
          <div class="info">
            <h2>GENERO</h2>
            <span>${gender}</span>
          </div>
        </div>
      </div>
      <div>
        <button class="btn">ACTUALIZAR</button>
      </div>`;
};

const getAndRenderPj = async () => {
  cardContainer.innerHTML = `
    <h1>CARGANDO....</h1>
    `;
  const pj = await getPj();
  renderNewPj(pj);
};

const init = () => {
  window.addEventListener("DOMContentLoaded", getAndRenderPj);
  reload.addEventListener("click", _);
  location.reload();
};

init();

// Hacer boton de actualizar, un mejor loader y mensaje de error y si pinta un setTimeOut

//Le pude poner el boton de actualizar pero no lo pude hacer andar

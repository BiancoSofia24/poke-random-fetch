let container = document.getElementById('item-container');

// Utilizando FETCH
/*function consult(id, num) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then((res) => res.json()
    .then((data) => createElem(data, num)))
}

function consultElemt() {
  let id1 = Math.round(Math.random() * 150);
  let id2 = Math.round(Math.random() * 150);

  consult(id1, 1);
  consult(id2, 2);
}

function createElem(data, num) {
  let item = container.querySelector(`#item-` + num);

  let name = item.getElementsByTagName('p')[0];
  name.textContent = data.name;

  let img = item.getElementsByTagName('img')[0];
  img.setAttribute('src', data.sprites.front_default);

}

consultElemt();
*/

const consultPoke = async(id, num) => {
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await res.json();
    const nombre = data.name;
    const img =  data.sprites.front_default;
    mostrar(nombre, img, num);
  } catch (error) { 
    console.log(error)
  }
}

const mostrar = (nombre, img, num) => {
  let item = container.querySelector(`#item-${num}`);
  let texto = item.getElementsByTagName('p')[0];
  texto.textContent = nombre;

  let imagen = item.getElementsByTagName('img')[0];
  imagen.setAttribute('src', img);

}

const consultItem = () => {
  let id1 = Math.round(Math.random() * 150);
  let id2 = Math.round(Math.random() * 150);
  consultPoke(id1, 1);
  consultPoke(id2, 2);
}

consultItem();
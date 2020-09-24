let container = document.getElementById('item-container');

function consult(id, num) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then((res) => res.json()
    .then((data) => createElem(data, num))
)}

function consultElemt() {
    let id1 = Math.round(Math.random() * 150);
    let id2 = Math.round(Math.random() * 150);

    consult(id1, 1);
    consult(id2, 2);
}

function createElem(data, num) {
    let item = container.querySelector(`#item-` + num);

    let img = item.getElementsByTagName('img')[0];
    img.setAttribute('src', data.sprites.front_default);

    let name = item.getElementsByTagName('p')[0];
    name.textContent = data.name;
}

consultElemt();
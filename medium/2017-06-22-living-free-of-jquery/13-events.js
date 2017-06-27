const p = document.querySelector('.p1');
const colors = ['red', 'blue', 'yellow', 'green', 'black'];
let index = 0;

const changeColor = function (event) {
  event.target.style.color = colors[index];
  index = index < 4 ? index + 1 : 0;
}

// Diretamente do método do elemento
p.onclick = changeColor;

// ou aplicando o evento
p.addEventListener('click', changeColor);

// ou para remover o evento
p.removeEventListener('click', changeColor);
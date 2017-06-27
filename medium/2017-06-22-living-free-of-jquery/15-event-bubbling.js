const p = document.querySelector('.p1');
const content = document.querySelector('.content')
const colors = ['red', 'blue', 'yellow', 'green', 'black'];
let index = 0;

// Repare que aqui foi utilizado o currentTarget,
// isso para pegar o elemento atual que esta chamando
// a função, porque o target retorna somente o elemento clicado.
// Caso você queira que o evento não se propague para o elemento
// pai use o event.stopPropagation() que vou deixar comentado
// nesta função.
const changeColor = function (event) {
  //event.stopPropagation();
  event.currentTarget.style.color = colors[index];
  index = index < 4 ? index + 1 : 0;
}

const changeBackground = function (event) {
  event.currentTarget.style.backgroundColor = colors[index];
  index = index < 4 ? index + 1 : 0;
}

// Diretamente do método do atributo
p.onclick = changeColor;
content.onclick = changeBackground;
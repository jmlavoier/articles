const content = document.querySelector('.content')
const colors = ['red', 'blue', 'yellow', 'green', 'black'];
let index = 0;

const changeColor = function (event) {
  if (event.target && event.target.tagName === 'P') {
    event.target.style.color = colors[index];
    index = index < 4 ? index + 1 : 0;
  }
}

content.onclick = changeColor;
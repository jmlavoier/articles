const content = document.querySelector('.content')
const colors = ['red', 'blue', 'yellow', 'green', 'black'];
let index = 0;

// Sintaxe ES6 
const eventDelegate = (tagName, callback) => event => {
  if (event.target && event.target.tagName === tagName) {
    return callback(event);
  }
}

const changeColor = function (event) {
  event.target.style.color = colors[index];
  index = index < 4 ? index + 1 : 0;
}
content.onclick = eventDelegate('P', changeColor);
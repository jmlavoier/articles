const allP = document.getElementsByTagName('p');

// Criando a função de callback
// Todos os eventos recebem como parâmetro o objeto event
// que permite pegarmos o elemento clicado event.target,
// e realizar outras funcionalidades.
const goToLastPosition = function (event) {
   event.target.parentNode.appendChild(event.target);
}

// Percorro todos os elementos e aplico a função ao evento.
for (let i = 0; i <= allP.length; i++) {
  allP[i].addEventListener('click', goToLastPosition);  
}
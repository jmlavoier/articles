const input = document.querySelector('input');
const content = document.querySelector('.content');

// Pegando atributo
const inputName = input.getAttribute('name');
console.log(inputName); // nome

// Setando atributo
input.setAttribute('maxlength', 20);

// Setando id
input.id = 'id_nome';
console.log(input); // <input name="nome" id="id_nome" value="teste" />

// Pegando id
const contentId = content.id;
console.log(contentId); // cont

// Manipulando classes
content.classList.remove('content');
input.classList.add('warning');

// Estilo inline
input.style.borderColor = 'red';

// Setando e pegando o atributo data
input.dataset.index = 1;
const inputIndex = input.dataset.index;

/* Resultado da renderização
<div>
  <div>
    <div id="cont" class="">
      <p class="p1">Paragrafo 1</p>
      <p class="p2">Paragrafo 2</p>
      <p class="p3">
        <input name="nome" 
               value="teste" 
               maxlength="20" 
               id="id_nome" 
               class="warning"
               style="border-color: red;"
               data-index="1"
        >
      </p>
    </div>
  </div>
</div>
*/
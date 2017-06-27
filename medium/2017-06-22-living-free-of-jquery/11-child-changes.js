const content = document.querySelector('.content');
const input = document.querySelector('input');
const div = document.createElement('DIV');

// Insere um span dentro da div
div.innerHTML = '<span>Dentro </span>';
console.log(div); //<div><span>Dentro </span></div>

// Insere a div na ultima posição da div.content
content.appendChild(div);

// Move o input do p.p3 e insere na ultima posição da DIV
div.appendChild(input); 

/* Resultado da renderização
<div>
  <div>
    <div id="cont" class="content">
      <p class="p1">Paragrafo 1</p>
      <p class="p2">Paragrafo 2</p>
      <p class="p3"></p>
      <div>
        <span>Dentro </span>
        <input name="nome" value="teste" />
      </div>
    </div>
  </div>
</div>
*/
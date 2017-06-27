const content = document.querySelector('.content');
let p = document.querySelector('p');
let pList = document.querySelectorAll('p');

console.log(p); // <p class="p1">Paragrafo 1</p>

p = document.querySelector('.content > p.p3');

console.log(p); // <p class="p3">...</p>
console.log(pList); // [p.p1, p.p2, p.p3]

pList = document.querySelectorAll('.content > p.p3');

console.log(pList); // [p.3]
console.log(content); // <div id="cont" class="content">...</div>

content = content.querySelectorAll('.p3');

console.log(pList); // <p class="p3">...</p>
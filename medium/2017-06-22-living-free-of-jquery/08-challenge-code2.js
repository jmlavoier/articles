const p = document.querySelector('.p1');

const parents = function (el) {
  let arrayElements = [];
  let currentEl = el;
   
  return function findParentByTagName(tn) {
    currentEl = currentEl.parentElement;
    if (!currentEl) return arrayElements;
    if (currentEl.tagName === tn) {
      arrayElements.push(currentEl);
    } 
    return findParentByTagName(tn);
  }
}

//Parents
const getParentsByTagName = parents(p);
console.log(getParentsByTagName('DIV')); // [div#cont.content, div, div]
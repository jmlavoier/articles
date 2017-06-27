const p = document.querySelector('.p1');

HTMLElement.prototype.parentsByTagName = function(tn) {
  let arrayElements = [];
  let currentEl = this;
   
  while (currentEl) {
    currentEl = currentEl.parentElement;
    if (!currentEl) return arrayElements;
    if (currentEl.tagName === tn) {
      arrayElements.push(currentEl);
    } 
  }
}

console.log(p.parentsByTagName('DIV')); // [div#cont.content, div, div]
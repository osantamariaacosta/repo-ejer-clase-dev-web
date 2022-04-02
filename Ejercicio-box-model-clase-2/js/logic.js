// Cómo traer elmentos del DOM en javascript
var element = document.getElementById('title');
console.log('elemento',element);

var paragraphList = document.getElementsByTagName('p');
console.log('getElementsByTagName', paragraphList);

var paragraphListByClass = document.getElementsByClassName('paragraph');
console.log('getElementsByClassName', paragraphListByClass);

//cómo agregar css a un elemento
element.classList.add('title');

let btn = document.getElementById('btn');
btn.addEventListener('click', changeActive);


function changeActive() {
  let paragraphListText = document.getElementsByClassName('g-text');
  for (let i = 1; i <= paragraphListText.length; i++) {
    // se ejecuta lo que está dentro de este bloque siempre y cuando index sea menor al tamaño de la lista
    console.log('indice', i);
    console.log('elemento', paragraphListText[i]);
  }
}

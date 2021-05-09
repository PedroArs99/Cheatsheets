//Remove Elements
const ul = document.querySelector('.items');
//ul.remove();
//ul.lastElementChild.remove(); //Remove last item on the ul

//Add content inside the tags
ul.firstElementChild.textContent = 'First item (Altered on JS)'; //Alter first item on the ul
ul.children[1].textContent = 'Item on position 1 (Altered on JS)';

//Alter Html
ul.lastElementChild.innerHTML = '<h4>Last Item (Altered on JS)</h4>'

//Alter CSS
const btn = document.querySelector('.btn');
btn.style.background = 'red';

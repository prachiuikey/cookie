// console.log(document.getElementById('my-form'));
// console.log(document.getElementsByClassName('items'));
//console.log(document.querySelector('h1'));
//console.log(document.querySelectorAll('.item'));

const ul = document.querySelector('.items');

// ul.remove();

ul.firstElementChild.textContent = 'Hello';
ul.children[1].innerHTML = 'Hello';
ul.lastElementChild.innerHTML = '<h1>Prachi</h1>';

const b = document.querySelector('.item').style.color = "Red";
const a = document.querySelector('.items').children[1].style.color = "Green";
document.querySelector('.items').lastElementChild.style.color = "Blue";

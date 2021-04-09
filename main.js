// console.log(document.getElementById('my-form'));
// console.log(document.getElementsByClassName('items'));
//console.log(document.querySelector('h1'));
//console.log(document.querySelectorAll('.item'));

// const ul = document.querySelector('.items');

// // ul.remove();

// ul.firstElementChild.textContent = 'Hello';
// ul.children[1].innerHTML = 'Hello';
// ul.lastElementChild.innerHTML = '<h1>Prachi</h1>';

// const b = document.querySelector('.item').style.color = "Red";
// const a = document.querySelector('.items').children[1].style.color = "Green";
// document.querySelector('.items').lastElementChild.style.color = "Blue";


// const btn = document.querySelector('.btn');

// //=> is a function
// btn.addEventListener('click', (e)=> {
//     e.preventDefault();
//     console.log('Click');
//     document.querySelector('.btn').style.color = "Blue";
//     document.querySelector("body").classList.add('bg-dark');
// });

// btn.addEventListener('mouseover', (e)=>{
//     //alert('mouse over');
//     document.querySelector('.btn').style.color = "Green";
//     console.log('Mouse over');

// });

// btn.addEventListener('mouseout', (e)=>{
//     document.querySelector('.btn').style.color = "Yellow";
// })

const myForm = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const msg = document.querySelector(".msg");
const userList = document.querySelector("#users");

myForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    if(nameInput.value === ''|| emailInput.value === ''){
        //alert("Enter Name and email");
        msg.classList.add("error");
        msg.innerHTML = "Enter Name and email";

        setTimeout(() => msg.remove(), 2000);
    }
    else{
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));
        userList.appendChild(li);


        nameInput.value = '';
        emailInput.value = '';
    }
    
});

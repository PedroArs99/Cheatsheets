//Take fields
const myform = document.querySelector('.my-form');
const nameInput = document.querySelector('#UserName');
nameInput.focus() //When entering the page the cursor is ready for typing in nameInput
const statusMessage = document.querySelector('.status');
const usersList = document.querySelector('#users');


//Add Trigger
myform.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();
    if (nameInput.value === '') {
        statusMessage.innerHTML = 'Please enter all fields';
        setTimeout(() => statusMessage.remove(), 3000); //Flush error after 3 seconds
    } else {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value}`));

        usersList.appendChild(li);

        //clearFields
        nameInput.value = '';
    }
}
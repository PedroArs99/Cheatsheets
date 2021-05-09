/* Browser Objects
* Window: Parent & most outside container
* Document: HTML view
*/

//Single Element Selector
const registerForm = document.getElementById('my-form'); //Older
const container = document.querySelector('.container'); //Similar to JQuery; althougth there's more than one element, it just picks the first one

//Multiple Element Selector
let items = document.getElementsByClassName('item'); //Gives HTML Collection. 
    items = document.getElementsByTagName('li'); //Gives HTML Collection. 
    items = document.querySelectorAll('.item'); //Gives a NodeList. Recommended

//Iterate over elements
items.forEach(element => {
    console.log(element); 
});






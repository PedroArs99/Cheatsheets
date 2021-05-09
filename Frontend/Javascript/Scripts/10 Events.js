//btn declared in DOM Manipulation

//On button Click ...
btn.addEventListener('click', (e) => {
    e.preventDefault(); //Avoid default behaviour
    //background will change it's color
    document.querySelector('body').style.backgroundColor = 'black';
});

//On button Hover ...
btn.addEventListener('mouseover', (e) => {
    e.preventDefault(); //Avoid default behaviour
    //background will change it's color
    document.querySelector('body').style.backgroundColor = 'green';
});
//And when the hover has ended it backs to default
btn.addEventListener('mouseout', (e) => {
    e.preventDefault(); //Avoid default behaviour
    //background will change it's color
    document.querySelector('body').style.backgroundColor = 'white';
});
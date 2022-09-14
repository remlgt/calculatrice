console.log('hello');


// DOM

const  keys = [...document.querySelectorAll('.key')];

const listKeyCode = keys.map(element => element.dataset.key);

// console.log(listKeyCode);

document.addEventListener('keydown',(e) => {
    // console.log(e);
    const value = e.keyCode.toString();
    // console.log(value, typeof value);
});

document.addEventListener('click',(e) => {
    // console.log(e);
    const clickValue = e.target.dataset.key;
    //  console.log(clickValue, typeof clickValue);
}); 



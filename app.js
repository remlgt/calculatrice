console.log('hello');


// DOM

const  keys = [...document.querySelectorAll('.key')];
// get all button with class .key

const listKeyCode = keys.map(element => element.dataset.key);
// get all KeyCode about the key with dataset

// key 6 = keycode 102

const screen = document.querySelector('.screen');
// get the html div .screen

// console.log(listKeyCode);

document.addEventListener('keydown',(e) => {
    // get the key on keyboard and convert value to string
    // console.log(e);
    const value = e.keyCode.toString();
    // console.log(value, typeof value);
    calculer(value);
});

document.addEventListener('click',(e) => {
    // get the key on calculator when press it with mouse 
    // console.log(e);
    const value = e.target.dataset.key;
    //  console.log(value, typeof value);
    calculer(value);
}); 

const calculer = (value) => {
    if (listKeyCode.includes(value)){
        // Check with include if our value are in our list of key, else nothing happened
        // console.log(listKeyCode);
        // Except value = and C who'll be not print into the screen 
        switch(value){
            case '8':
                    screen.textContent="";
                    break;
            // key '8' are C and its to erase the content of the screen
            case '13':
                const  calcul = eval(screen.textContent);
                screen.textContent = calcul;
                break;
            // key 13 are = and its to print the result & eval do the job
            default:
                const indexKeyCode = listKeyCode.indexOf(value);
            // indexKeyCode is to find our value into the Key list 
                const Key = keys[indexKeyCode];
                screen.textContent += Key.innerHTML;
            // Get the key and print it on the screen
        }
    }
}

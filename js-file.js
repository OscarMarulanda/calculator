const ac = document.querySelector('#ac');
const display = document.querySelector('#display');
const val = document.querySelectorAll('.grid-item');
const operand = document.querySelectorAll('.grid-item-cal');
const equals = document.querySelector('#igual');
const borrar = document.querySelector('#del');

let values = [];
let displayy = [];

let sign;

val.forEach((va) => {
    va.addEventListener('click', () => {
    displayy.push(va.innerText);
    display.textContent = displayy.join('');
    values.push(va.innerText);
});
});

operand.forEach((op) => {
    op.addEventListener('click', () => {
    if(values[0]==undefined && op.id=="-"){
        displayy.push(op.innerText);
        display.textContent = displayy.join('');
        values.push(op.id);
    }
    if(values[0]==undefined){
        return;
    }else if(values[values.length-1]=='+'||values[values.length-1]=='-'||values[values.length-1]=='*'||values[values.length-1]=='/'||values[values.length-1]=='**'){
        values[values.length-1]=op.id;
        displayy[displayy.length - 1]=op.innerText;
        display.textContent = displayy.join('');
    }else{
        displayy.push(op.innerText);
        display.textContent = displayy.join('');
        values.push(op.id);
    };
});
});

ac.addEventListener('click', () => {
    display.textContent=' ';
    values = [];
    displayy = [];
})

equals.addEventListener('click', () => {
    
    function evil(fn) {
        return new Function('return ' + fn)();
      }
      
    if(evil(values.join(''))=="Infinity"){
        display.textContent=":v"
    }else{
        display.textContent = evil(values.join(''));
    }
    
});

borrar.addEventListener('click', () => {
    displayy = displayy.slice(0, -1);
    values = values.slice(0, -1);
    display.textContent = displayy.join('');
});
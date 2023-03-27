const ac = document.querySelector('#ac');
const display = document.querySelector('#display');
const val = document.querySelectorAll('.grid-item');
const operand = document.querySelectorAll('.grid-item-cal');
const equals = document.querySelector('#igual');

let operation = [];
let value1;
let value2;
let sign;

val.forEach((va) => {
    va.addEventListener('click', () => {
    display.textContent+= +va.innerText;
    operation.push(va.innerText);
});
});

operand.forEach((op) => {
    op.addEventListener('click', () => {
    display.textContent+=op.innerText;
    value1 = operation.join('');
    operation = [];
    sign = op.innerText;
});
});

ac.addEventListener('click', () => {
    display.textContent=' ';
    operation = [];
})

equals.addEventListener('click', () => {
    if(sign=='+'){
        display.textContent = +value1 + +operation.join('');
    } else if(sign=='x'){
        display.textContent = +value1 * +operation.join('');
    } else if(sign=='-'){
        display.textContent = +value1 - +operation.join('');
    } else if(sign=='÷'){
        display.textContent = +value1 / +operation.join('');
    }

    
});

